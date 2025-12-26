import { Clock, Dumbbell, Heart, ChevronRight, SkipForward, GripVertical } from 'lucide-react';

function WorkoutCard({ workout, isNext, onStart, onSkip, canReorder }) {
  const isStrength = workout.type === 'strength';

  return (
    <div className={`workout-card ${isNext ? 'next-workout' : ''}`}>
      {canReorder && (
        <div className="drag-handle">
          <GripVertical size={18} />
        </div>
      )}

      <div className="workout-card-content">
        <div className="workout-type-icon">
          {isStrength ? (
            <Dumbbell size={24} className="strength-icon" />
          ) : (
            <Heart size={24} className="cardio-icon" />
          )}
        </div>

        <div className="workout-info">
          <h3>{workout.name}</h3>
          <div className="workout-meta">
            <span className="duration">
              <Clock size={14} />
              {workout.duration}
            </span>
            {workout.targetMuscles && (
              <span className="targets">{workout.targetMuscles.slice(0, 2).join(', ')}</span>
            )}
            {workout.intensity && (
              <span className="intensity">{workout.intensity.split(' - ')[0]}</span>
            )}
          </div>
        </div>

        <div className="workout-actions">
          {isNext && (
            <>
              <button className="skip-btn" onClick={() => onSkip(workout.id)} title="Skip (On Call)">
                <SkipForward size={18} />
              </button>
              <button className="start-btn" onClick={() => onStart(workout)}>
                Start
                <ChevronRight size={18} />
              </button>
            </>
          )}
          {!isNext && (
            <button className="preview-btn" onClick={() => onStart(workout)}>
              Preview
            </button>
          )}
        </div>
      </div>

      {isNext && <div className="next-badge">Up Next</div>}
    </div>
  );
}

export default WorkoutCard;
