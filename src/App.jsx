import { useState } from 'react';
import { useTrainingProgress } from './hooks/useTrainingProgress';
import WelcomeScreen from './components/WelcomeScreen';
import Dashboard from './components/Dashboard';
import WorkoutView from './components/WorkoutView';
import './App.css';

function App() {
  const {
    progress,
    startTraining,
    getCurrentWeek,
    completeWorkout,
    skipWorkout,
    reorderWorkout,
    resetProgress,
    exportProgress,
    importProgress
  } = useTrainingProgress();

  const [activeWorkout, setActiveWorkout] = useState(null);
  const [completedExercises, setCompletedExercises] = useState([]);

  // Show welcome screen if not started
  if (!progress.startDate) {
    return <WelcomeScreen onStart={startTraining} />;
  }

  // Handle starting a workout
  const handleStartWorkout = (workout) => {
    setActiveWorkout(workout);
    setCompletedExercises([]);
  };

  // Handle going back to dashboard
  const handleBack = () => {
    setActiveWorkout(null);
    setCompletedExercises([]);
  };

  // Handle completing an exercise
  const handleExerciseComplete = (exerciseId) => {
    setCompletedExercises(prev =>
      prev.includes(exerciseId)
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  // Handle completing entire workout
  const handleCompleteWorkout = (workoutData) => {
    if (activeWorkout) {
      completeWorkout(activeWorkout.id, workoutData);
      setActiveWorkout(null);
      setCompletedExercises([]);
    }
  };

  // Handle skipping workout
  const handleSkipWorkout = () => {
    const reason = window.prompt('Reason for skipping (optional - e.g., "On call", "Sick")');
    skipWorkout(reason || 'Skipped');
  };

  // Render workout view if active
  if (activeWorkout) {
    return (
      <WorkoutView
        workout={activeWorkout}
        currentPhase={progress.currentPhase}
        onBack={handleBack}
        onComplete={handleCompleteWorkout}
        completedExercises={completedExercises}
        onExerciseComplete={handleExerciseComplete}
      />
    );
  }

  // Render dashboard
  return (
    <Dashboard
      progress={progress}
      currentWeek={getCurrentWeek()}
      onStartWorkout={handleStartWorkout}
      onSkipWorkout={handleSkipWorkout}
      onReorderWorkout={reorderWorkout}
      onResetProgress={resetProgress}
      onExportProgress={exportProgress}
      onImportProgress={importProgress}
    />
  );
}

export default App;
