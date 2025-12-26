import { useState } from 'react';
import { Settings, RotateCcw, Download, Upload, Info, ChevronDown, ChevronUp, MapPin, X, User } from 'lucide-react';
import WorkoutCard from './WorkoutCard';
import ProgressStats from './ProgressStats';
import { allWorkouts, rollingSchedule, phases } from '../data/trainingPlan';

function Dashboard({
  progress,
  currentWeek,
  onStartWorkout,
  onSkipWorkout,
  onReorderWorkout,
  onResetProgress,
  onExportProgress,
  onImportProgress
}) {
  const [showSettings, setShowSettings] = useState(false);
  const [showScheduleInfo, setShowScheduleInfo] = useState(false);
  const [importData, setImportData] = useState('');

  const currentPhase = progress.currentPhase || 'foundation';
  const phase = phases[currentPhase];
  const currentWorkoutIndex = progress.currentWorkoutIndex || 0;

  // Reorder workouts to show current first
  const orderedWorkouts = [
    ...allWorkouts.slice(currentWorkoutIndex),
    ...allWorkouts.slice(0, currentWorkoutIndex)
  ];

  const handleImport = () => {
    if (importData && onImportProgress(importData)) {
      setImportData('');
      setShowSettings(false);
      alert('Progress imported successfully!');
    } else {
      alert('Failed to import progress. Please check the data format.');
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      onResetProgress();
    }
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-bg"></div>
        <div className="header-content">
          <div className="header-top">
            <div className="user-greeting">
              <span className="greeting-text">Hello, Darmin</span>
              <span className="phase-tag">{phase.name}</span>
            </div>
            <button className="settings-btn" onClick={() => setShowSettings(!showSettings)}>
              <Settings size={22} />
            </button>
          </div>
          <div className="header-main">
            <h1>Half Marathon Training</h1>
            <p className="week-indicator">Week {currentWeek} of 24</p>
          </div>
        </div>
      </header>

      {/* Settings Modal */}
      {showSettings && (
        <div className="settings-overlay" onClick={() => setShowSettings(false)}>
          <div className="settings-modal" onClick={e => e.stopPropagation()}>
            <div className="settings-header">
              <h3>Settings</h3>
              <button className="close-modal" onClick={() => setShowSettings(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="settings-content">
              <div className="settings-section">
                <div className="settings-section-header">
                  <Download size={20} />
                  <div>
                    <h4>Export Progress</h4>
                    <p>Save your progress to a file</p>
                  </div>
                </div>
                <button
                  className="settings-action-btn"
                  onClick={() => {
                    const data = onExportProgress();
                    const blob = new Blob([data], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `darmin-training-${new Date().toISOString().split('T')[0]}.json`;
                    a.click();
                  }}
                >
                  Download Backup
                </button>
              </div>

              <div className="settings-section">
                <div className="settings-section-header">
                  <Upload size={20} />
                  <div>
                    <h4>Import Progress</h4>
                    <p>Restore from a backup file</p>
                  </div>
                </div>
                <textarea
                  placeholder="Paste exported JSON data here..."
                  value={importData}
                  onChange={(e) => setImportData(e.target.value)}
                />
                <button className="settings-action-btn secondary" onClick={handleImport}>
                  Import Data
                </button>
              </div>

              <div className="settings-section danger">
                <div className="settings-section-header">
                  <RotateCcw size={20} />
                  <div>
                    <h4>Reset Progress</h4>
                    <p>Start fresh (cannot be undone)</p>
                  </div>
                </div>
                <button className="settings-action-btn danger" onClick={handleReset}>
                  Reset All Progress
                </button>
              </div>
            </div>

            <div className="settings-footer">
              <p>Designed for Darmin Reddy</p>
            </div>
          </div>
        </div>
      )}

      {/* Progress Stats */}
      <ProgressStats
        stats={progress.stats}
        currentWeek={currentWeek}
        currentPhase={currentPhase}
      />

      {/* Phase Info */}
      <div className="phase-info">
        <div className="phase-header" onClick={() => setShowScheduleInfo(!showScheduleInfo)}>
          <div className="phase-header-left">
            <Info size={18} />
            <span>Training Phase Info</span>
          </div>
          <ChevronDown size={18} className={`chevron ${showScheduleInfo ? 'open' : ''}`} />
        </div>

        {showScheduleInfo && (
          <div className="phase-details">
            <div className="phase-detail-grid">
              <div className="detail-item">
                <span className="detail-label">Focus</span>
                <span className="detail-value">{phase.focus}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Strength</span>
                <span className="detail-value">{phase.strengthSets} sets × {phase.strengthReps}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Cardio</span>
                <span className="detail-value">{phase.cardioIntensity}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Run/Walk</span>
                <span className="detail-value">{phase.runWalkRatio}</span>
              </div>
            </div>

            <div className="schedule-guidelines">
              <h4>Rolling Schedule</h4>
              <ul>
                <li>{rollingSchedule.guidelines.minimumRest}</li>
                <li><strong>On-Call:</strong> {rollingSchedule.guidelines.onCallStrategy}</li>
                <li>{rollingSchedule.guidelines.doubleUp}</li>
                <li>{rollingSchedule.guidelines.listen}</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Workout List */}
      <section className="workouts-section">
        <div className="section-header">
          <h2>Your Workouts</h2>
          <span className="workout-count">{orderedWorkouts.length} sessions</span>
        </div>
        <p className="section-subtitle">Complete in order • Skip when on call • Resume anytime</p>

        <div className="workouts-list">
          {orderedWorkouts.map((workout, index) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              isNext={index === 0}
              onStart={onStartWorkout}
              onSkip={onSkipWorkout}
              onReorder={onReorderWorkout}
              canReorder={false}
            />
          ))}
        </div>
      </section>

      {/* Goal Reminder */}
      <div className="goal-reminder">
        <div className="goal-icon">
          <MapPin size={24} />
        </div>
        <div className="goal-content">
          <span className="goal-label">Your Goal</span>
          <h3>Half Marathon Goal</h3>
          <p>Cape Town, South Africa • 2026</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>Designed for <strong>Darmin Reddy</strong></p>
      </footer>
    </div>
  );
}

export default Dashboard;
