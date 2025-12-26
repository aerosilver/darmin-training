import { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Check, Play } from 'lucide-react';

function ExerciseCard({ exercise, prescription, onComplete, isCompleted = false, showCheckbox = true }) {
  const [expanded, setExpanded] = useState(false);

  if (!exercise) return null;

  const handleVideoClick = (e) => {
    e.stopPropagation();
    window.open(exercise.videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`exercise-card ${isCompleted ? 'completed' : ''}`}>
      <div className="exercise-header" onClick={() => setExpanded(!expanded)}>
        <div className="exercise-main">
          {showCheckbox && (
            <button
              className={`checkbox ${isCompleted ? 'checked' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onComplete && onComplete(exercise.id);
              }}
            >
              {isCompleted && <Check size={16} />}
            </button>
          )}
          <div className="exercise-info">
            <h4 className="exercise-name">{exercise.name}</h4>
            {prescription && (
              <p className="exercise-prescription">
                {prescription.sets && prescription.reps && `${prescription.sets} × ${prescription.reps}`}
                {prescription.duration && prescription.duration}
                {prescription.rest && ` • Rest: ${prescription.rest}`}
              </p>
            )}
            {!prescription && exercise.duration && (
              <p className="exercise-prescription">{exercise.duration}</p>
            )}
            {!prescription && exercise.reps && (
              <p className="exercise-prescription">{exercise.reps}</p>
            )}
          </div>
        </div>
        <div className="exercise-actions">
          <button className="video-btn" onClick={handleVideoClick} title="Watch how-to video">
            <Play size={18} />
          </button>
          <span className="expand-icon">
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </span>
        </div>
      </div>

      {expanded && (
        <div className="exercise-details">
          <p className="exercise-description">{exercise.description}</p>

          {exercise.muscleGroups && exercise.muscleGroups.length > 0 && (
            <div className="muscle-groups">
              <span className="label">Targets:</span>
              <span className="muscles">{exercise.muscleGroups.join(', ')}</span>
            </div>
          )}

          {exercise.cues && exercise.cues.length > 0 && (
            <div className="exercise-cues">
              <span className="label">Form Cues:</span>
              <ul>
                {exercise.cues.map((cue, index) => (
                  <li key={index}>{cue}</li>
                ))}
              </ul>
            </div>
          )}

          <button className="watch-video-btn" onClick={handleVideoClick}>
            <ExternalLink size={16} />
            <span>Watch on {exercise.videoSource}</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default ExerciseCard;
