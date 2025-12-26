import { useState } from 'react';
import { ArrowLeft, Clock, Target, Dumbbell, Heart, CheckCircle, Star, Utensils } from 'lucide-react';
import ExerciseCard from './ExerciseCard';
import NutritionTips from './NutritionTips';
import { phases } from '../data/trainingPlan';

function WorkoutView({ workout, currentPhase, onBack, onComplete, completedExercises = [], onExerciseComplete }) {
  const [showNutrition, setShowNutrition] = useState(false);
  const [workoutNotes, setWorkoutNotes] = useState('');
  const [workoutRating, setWorkoutRating] = useState(0);
  const [appleWatchData, setAppleWatchData] = useState({
    calories: '',
    duration: '',
    avgHeartRate: ''
  });

  const phase = phases[currentPhase] || phases.foundation;

  const totalExercises = [
    ...(workout.warmup?.exercises || []),
    ...(workout.mainExercises || []),
    ...(workout.stabilityExercises || []),
    ...(workout.cooldown?.exercises || [])
  ].length;

  const completedCount = completedExercises.length;
  const progressPercent = totalExercises > 0 ? (completedCount / totalExercises) * 100 : 0;

  const handleCompleteWorkout = () => {
    onComplete({
      duration: appleWatchData.duration,
      notes: workoutNotes,
      rating: workoutRating,
      exercises: completedExercises,
      appleWatchData: {
        calories: appleWatchData.calories,
        duration: appleWatchData.duration,
        avgHeartRate: appleWatchData.avgHeartRate
      }
    });
  };

  const renderCardioPhaseInstructions = () => {
    if (workout.type !== 'cardio' || !workout.mainWorkout?.phases) return null;

    const phaseData = workout.mainWorkout.phases[currentPhase];
    if (!phaseData) return null;

    return (
      <div className="cardio-phase-instructions">
        <h4>Today's Session ({phase.name})</h4>
        <p className="phase-description">{phaseData.description}</p>
        <p className="phase-instructions">{phaseData.instructions}</p>
        {phaseData.totalRunTime && (
          <div className="time-breakdown">
            <span>Run: {phaseData.totalRunTime}</span>
            {phaseData.totalWalkTime && <span>Walk: {phaseData.totalWalkTime}</span>}
          </div>
        )}
        {workout.mainWorkout.heartRateZone && (
          <p className="hr-zone">Heart Rate: {workout.mainWorkout.heartRateZone}</p>
        )}
        {workout.mainWorkout.appleWatchMetric && (
          <p className="apple-watch-tip">Apple Watch: {workout.mainWorkout.appleWatchMetric}</p>
        )}
      </div>
    );
  };

  return (
    <div className="workout-view">
      <header className="workout-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="header-info">
          <h2>{workout.name}</h2>
          <div className="workout-meta">
            <span><Clock size={14} /> {workout.duration}</span>
            <span className="phase-badge">{phase.name}</span>
          </div>
        </div>
        <button className="nutrition-btn" onClick={() => setShowNutrition(!showNutrition)}>
          <Utensils size={20} />
        </button>
      </header>

      {showNutrition && (
        <NutritionTips workoutType={workout.type} onClose={() => setShowNutrition(false)} />
      )}

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
        <span className="progress-text">{completedCount}/{totalExercises} exercises</span>
      </div>

      <div className="workout-content">
        {/* Workout Info */}
        <section className="workout-info-section">
          {workout.targetMuscles && (
            <div className="target-muscles">
              <Target size={16} />
              <span>{workout.targetMuscles.join(' • ')}</span>
            </div>
          )}
          {workout.intensity && (
            <div className="intensity">
              <Heart size={16} />
              <span>Intensity: {workout.intensity}</span>
            </div>
          )}
        </section>

        {/* Phase-specific cardio instructions */}
        {renderCardioPhaseInstructions()}

        {/* Cross training options for cardio-cross */}
        {workout.mainWorkout?.options && (
          <section className="section cross-training-options">
            <h3>Choose Your Cross Training</h3>
            <p className="section-note">Pick one of these options based on how you feel today:</p>
            {workout.mainWorkout.options.map((option, index) => (
              <ExerciseCard
                key={index}
                exercise={option.exercise}
                prescription={{ duration: option.duration }}
                showCheckbox={false}
              />
            ))}
          </section>
        )}

        {/* Warm-up Section */}
        {workout.warmup && (
          <section className="section warmup-section">
            <h3>
              <span className="section-icon warmup">🔥</span>
              {workout.warmup.name}
              <span className="section-duration">{workout.warmup.duration}</span>
            </h3>
            {workout.warmup.exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                isCompleted={completedExercises.includes(exercise.id)}
                onComplete={onExerciseComplete}
              />
            ))}
          </section>
        )}

        {/* Main Exercises Section (Strength) */}
        {workout.mainExercises && (
          <section className="section main-section">
            <h3>
              <span className="section-icon main"><Dumbbell size={18} /></span>
              Main Workout
              <span className="section-note">({phase.strengthSets} sets × {phase.strengthReps} reps)</span>
            </h3>
            {workout.mainExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                prescription={exercise.prescription}
                isCompleted={completedExercises.includes(exercise.id)}
                onComplete={onExerciseComplete}
              />
            ))}
          </section>
        )}

        {/* Main Cardio Section */}
        {workout.mainWorkout?.exercise && !workout.mainWorkout.options && (
          <section className="section main-section">
            <h3>
              <span className="section-icon cardio"><Heart size={18} /></span>
              Main Cardio
            </h3>
            <ExerciseCard
              exercise={workout.mainWorkout.exercise}
              showCheckbox={false}
            />
          </section>
        )}

        {/* Stability Section */}
        {workout.stabilityExercises && (
          <section className="section stability-section">
            <h3>
              <span className="section-icon stability">⚖️</span>
              Stability & Balance
            </h3>
            {workout.stabilityExercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                prescription={exercise.prescription}
                isCompleted={completedExercises.includes(exercise.id)}
                onComplete={onExerciseComplete}
              />
            ))}
          </section>
        )}

        {/* Cool-down Section */}
        {workout.cooldown && (
          <section className="section cooldown-section">
            <h3>
              <span className="section-icon cooldown">❄️</span>
              {workout.cooldown.name}
              <span className="section-duration">{workout.cooldown.duration}</span>
            </h3>
            {workout.cooldown.exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                isCompleted={completedExercises.includes(exercise.id)}
                onComplete={onExerciseComplete}
              />
            ))}
          </section>
        )}

        {/* Apple Watch Data Entry */}
        <section className="section apple-watch-section">
          <h3>⌚ Apple Watch Data (Optional)</h3>
          <div className="watch-data-inputs">
            <div className="input-group">
              <label>Calories Burned</label>
              <input
                type="number"
                placeholder="e.g., 350"
                value={appleWatchData.calories}
                onChange={(e) => setAppleWatchData(prev => ({ ...prev, calories: e.target.value }))}
              />
            </div>
            <div className="input-group">
              <label>Duration (min)</label>
              <input
                type="number"
                placeholder="e.g., 60"
                value={appleWatchData.duration}
                onChange={(e) => setAppleWatchData(prev => ({ ...prev, duration: e.target.value }))}
              />
            </div>
            <div className="input-group">
              <label>Avg Heart Rate</label>
              <input
                type="number"
                placeholder="e.g., 135"
                value={appleWatchData.avgHeartRate}
                onChange={(e) => setAppleWatchData(prev => ({ ...prev, avgHeartRate: e.target.value }))}
              />
            </div>
          </div>
        </section>

        {/* Notes & Rating */}
        <section className="section notes-section">
          <h3>Workout Notes</h3>
          <textarea
            placeholder="How did it feel? Any modifications? Energy levels?"
            value={workoutNotes}
            onChange={(e) => setWorkoutNotes(e.target.value)}
          />

          <div className="rating-section">
            <span>Rate this workout:</span>
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`star-btn ${workoutRating >= star ? 'active' : ''}`}
                  onClick={() => setWorkoutRating(star)}
                >
                  <Star size={24} fill={workoutRating >= star ? '#fbbf24' : 'none'} />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Button */}
        <button className="complete-workout-btn" onClick={handleCompleteWorkout}>
          <CheckCircle size={20} />
          Complete Workout
        </button>
      </div>
    </div>
  );
}

export default WorkoutView;
