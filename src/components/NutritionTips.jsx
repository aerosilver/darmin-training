import { X, Coffee, Utensils } from 'lucide-react';
import { nutritionGuidelines } from '../data/nutrition';

function NutritionTips({ onClose }) {
  const { preWorkout, postWorkout } = nutritionGuidelines;

  return (
    <div className="nutrition-modal">
      <div className="nutrition-content">
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <h2>Nutrition Tips</h2>

        {/* Pre-Workout */}
        <section className="nutrition-section">
          <h3><Coffee size={18} /> Pre-Workout</h3>
          <p className="timing">Eat {preWorkout.timing}</p>

          <h4>Quick Options:</h4>
          <div className="meal-options">
            {preWorkout.quickOptions.meals.slice(0, 4).map((meal, index) => (
              <div key={index} className="meal-card">
                <h5>{meal.name}</h5>
                <p className="meal-desc">{meal.description}</p>
                <span className="meal-timing">{meal.timing}</span>
              </div>
            ))}
          </div>

          <h4>On-Call Quick Bites:</h4>
          <ul className="quick-list">
            {preWorkout.onCallOptions.meals.map((meal, index) => (
              <li key={index}>{meal.name} - {meal.description}</li>
            ))}
          </ul>
        </section>

        {/* Post-Workout */}
        <section className="nutrition-section">
          <h3><Utensils size={18} /> Post-Workout</h3>
          <p className="timing">Eat {postWorkout.timing}</p>

          <h4>Quick Options:</h4>
          <div className="meal-options">
            {postWorkout.quickOptions.meals.slice(0, 4).map((meal, index) => (
              <div key={index} className="meal-card">
                <h5>{meal.name}</h5>
                <p className="meal-desc">{meal.description}</p>
                <p className="meal-macros">{meal.macros}</p>
              </div>
            ))}
          </div>

          <h4>Hospital/On-Call Options:</h4>
          <ul className="quick-list">
            {postWorkout.onCallOptions.meals.map((meal, index) => (
              <li key={index}><strong>{meal.name}</strong> - {meal.description}</li>
            ))}
          </ul>

          <h4>Hydration:</h4>
          <ul className="quick-list">
            {postWorkout.hydration.recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default NutritionTips;
