import { useLocalStorage } from './useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import { parseISO, differenceInWeeks, startOfWeek } from 'date-fns';

// Initial state structure
const initialProgress = {
  startDate: null,
  currentPhase: 'foundation',
  currentWorkoutIndex: 0,
  completedWorkouts: [],
  stats: {
    totalWorkouts: 0,
    totalStrength: 0,
    totalCardio: 0,
    currentStreak: 0,
    longestStreak: 0,
    thisWeek: 0
  },
  notes: [],
  preferences: {
    showAppleWatchReminder: true,
    darkMode: false
  }
};

export function useTrainingProgress() {
  const [progress, setProgress] = useLocalStorage('training-progress', initialProgress);

  // Start or reset training plan
  const startTraining = () => {
    setProgress({
      ...initialProgress,
      startDate: new Date().toISOString()
    });
  };

  // Get current training week number
  const getCurrentWeek = () => {
    if (!progress.startDate) return 0;
    const weeks = differenceInWeeks(new Date(), parseISO(progress.startDate));
    return weeks + 1;
  };

  // Determine current phase based on week
  const determinePhase = (week) => {
    if (week <= 6) return 'foundation';
    if (week <= 12) return 'building';
    if (week <= 18) return 'development';
    return 'race';
  };

  // Complete a workout
  const completeWorkout = (workoutId, workoutData = {}) => {
    const completedWorkout = {
      id: uuidv4(),
      workoutId,
      completedAt: new Date().toISOString(),
      duration: workoutData.duration || null,
      notes: workoutData.notes || '',
      exercises: workoutData.exercises || [],
      rating: workoutData.rating || null,
      appleWatchData: workoutData.appleWatchData || null
    };

    const isStrength = workoutId.startsWith('strength');
    const isCardio = workoutId.startsWith('cardio');

    // Calculate new streak
    const lastWorkout = progress.completedWorkouts[progress.completedWorkouts.length - 1];
    let newStreak = progress.stats.currentStreak;

    if (lastWorkout) {
      const daysSinceLastWorkout = Math.floor(
        (new Date() - new Date(lastWorkout.completedAt)) / (1000 * 60 * 60 * 24)
      );
      if (daysSinceLastWorkout <= 3) {
        newStreak += 1;
      } else {
        newStreak = 1;
      }
    } else {
      newStreak = 1;
    }

    // Calculate this week's workouts
    const weekStart = startOfWeek(new Date());
    const thisWeekWorkouts = progress.completedWorkouts.filter(w =>
      new Date(w.completedAt) >= weekStart
    ).length + 1;

    // Move to next workout in rotation
    const nextIndex = (progress.currentWorkoutIndex + 1) % 6;

    setProgress(prev => ({
      ...prev,
      currentWorkoutIndex: nextIndex,
      currentPhase: determinePhase(getCurrentWeek()),
      completedWorkouts: [...prev.completedWorkouts, completedWorkout],
      stats: {
        ...prev.stats,
        totalWorkouts: prev.stats.totalWorkouts + 1,
        totalStrength: prev.stats.totalStrength + (isStrength ? 1 : 0),
        totalCardio: prev.stats.totalCardio + (isCardio ? 1 : 0),
        currentStreak: newStreak,
        longestStreak: Math.max(prev.stats.longestStreak, newStreak),
        thisWeek: thisWeekWorkouts
      }
    }));

    return completedWorkout;
  };

  // Skip a workout (for on-call days)
  const skipWorkout = (reason = '') => {
    const nextIndex = (progress.currentWorkoutIndex + 1) % 6;
    setProgress(prev => ({
      ...prev,
      currentWorkoutIndex: nextIndex,
      notes: [...prev.notes, {
        id: uuidv4(),
        date: new Date().toISOString(),
        type: 'skip',
        reason
      }]
    }));
  };

  // Reorder workouts (swap current with another)
  const reorderWorkout = (newIndex) => {
    setProgress(prev => ({
      ...prev,
      currentWorkoutIndex: newIndex
    }));
  };

  // Add a note
  const addNote = (note) => {
    setProgress(prev => ({
      ...prev,
      notes: [...prev.notes, {
        id: uuidv4(),
        date: new Date().toISOString(),
        type: 'note',
        content: note
      }]
    }));
  };

  // Update preferences
  const updatePreferences = (newPreferences) => {
    setProgress(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        ...newPreferences
      }
    }));
  };

  // Get workout history for a specific workout
  const getWorkoutHistory = (workoutId) => {
    return progress.completedWorkouts.filter(w => w.workoutId === workoutId);
  };

  // Get recent workouts (last 7 days)
  const getRecentWorkouts = () => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return progress.completedWorkouts.filter(w =>
      new Date(w.completedAt) >= sevenDaysAgo
    );
  };

  // Reset all progress
  const resetProgress = () => {
    setProgress(initialProgress);
  };

  // Export progress data
  const exportProgress = () => {
    return JSON.stringify(progress, null, 2);
  };

  // Import progress data
  const importProgress = (data) => {
    try {
      const parsed = JSON.parse(data);
      setProgress(parsed);
      return true;
    } catch (error) {
      console.error('Failed to import progress:', error);
      return false;
    }
  };

  return {
    progress,
    startTraining,
    getCurrentWeek,
    determinePhase,
    completeWorkout,
    skipWorkout,
    reorderWorkout,
    addNote,
    updatePreferences,
    getWorkoutHistory,
    getRecentWorkouts,
    resetProgress,
    exportProgress,
    importProgress
  };
}

export default useTrainingProgress;
