import { TrendingUp, Calendar, Flame, Award, Dumbbell, Heart } from 'lucide-react';

function ProgressStats({ stats, currentWeek, currentPhase }) {
  const phaseNames = {
    foundation: 'Foundation',
    building: 'Building',
    development: 'Development',
    race: 'Race Prep'
  };

  return (
    <div className="progress-stats">
      <div className="stats-header">
        <h3>Your Progress</h3>
        <div className="phase-indicator">
          <Calendar size={16} />
          <span>Week {currentWeek} • {phaseNames[currentPhase]}</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon total">
            <TrendingUp size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-value">{stats.totalWorkouts}</span>
            <span className="stat-label">Total Workouts</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon strength">
            <Dumbbell size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-value">{stats.totalStrength}</span>
            <span className="stat-label">Strength</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon cardio">
            <Heart size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-value">{stats.totalCardio}</span>
            <span className="stat-label">Cardio</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon streak">
            <Flame size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-value">{stats.currentStreak}</span>
            <span className="stat-label">Current Streak</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon week">
            <Calendar size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-value">{stats.thisWeek}/5</span>
            <span className="stat-label">This Week</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon best">
            <Award size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-value">{stats.longestStreak}</span>
            <span className="stat-label">Best Streak</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressStats;
