// 6-Month Half Marathon Training Plan - Darmin Reddy
// Rolling schedule: 3 Strength + 2-3 Cardio per week
// Designed for: Darmin Reddy, 25M, Virgin Active Umhlanga
// Training Philosophy: Build structured foundation with swimming and running variety
// All exercises include Technogym equipment setup + video instruction links

import { exercises } from './exercises';

// Phase structure for progressive overload
export const phases = {
  foundation: {
    name: 'Foundation Phase',
    weeks: '1-6',
    focus: 'Build base strength, learn movements, establish cardio baseline',
    strengthSets: 3,
    strengthReps: '12-15',
    cardioIntensity: 'Low - can hold conversation',
    runWalkRatio: '1:2 (1 min run, 2 min walk)'
  },
  building: {
    name: 'Building Phase',
    weeks: '7-12',
    focus: 'Increase strength, extend run duration, build aerobic base',
    strengthSets: 3,
    strengthReps: '10-12',
    cardioIntensity: 'Low-Moderate',
    runWalkRatio: '2:1 (2 min run, 1 min walk)'
  },
  development: {
    name: 'Development Phase',
    weeks: '13-18',
    focus: 'Peak strength, continuous running, speed work introduction',
    strengthSets: 4,
    strengthReps: '8-10',
    cardioIntensity: 'Moderate with tempo intervals',
    runWalkRatio: 'Continuous running with walk breaks as needed'
  },
  race: {
    name: 'Race Preparation Phase',
    weeks: '19-24',
    focus: 'Maintain strength, peak running, race simulation, taper',
    strengthSets: 3,
    strengthReps: '8-12',
    cardioIntensity: 'Race pace practice + easy runs',
    runWalkRatio: 'Continuous running'
  }
};

// Helper to get exercise details
const getExercise = (category, key) => {
  if (exercises[category] && exercises[category][key]) {
    return exercises[category][key];
  }
  return null;
};

// Standard warm-up routine
export const standardWarmup = {
  name: 'Dynamic Warm-Up',
  duration: '8-10 minutes',
  exercises: [
    getExercise('warmup', 'jumpingJacks'),
    getExercise('warmup', 'armCircles'),
    getExercise('warmup', 'legSwings'),
    getExercise('warmup', 'hipCircles'),
    getExercise('warmup', 'walkingLunges'),
    getExercise('warmup', 'catCow'),
    getExercise('warmup', 'worldsGreatestStretch')
  ].filter(Boolean)
};

// Standard cool-down routine
export const standardCooldown = {
  name: 'Cool-Down & Stretch',
  duration: '8-10 minutes',
  exercises: [
    getExercise('cooldown', 'walkingCooldown'),
    getExercise('cooldown', 'standingQuadStretch'),
    getExercise('cooldown', 'standingHamstringStretch'),
    getExercise('cooldown', 'hipFlexorStretch'),
    getExercise('cooldown', 'standingCalfStretch'),
    getExercise('cooldown', 'childsPose'),
    getExercise('cooldown', 'neckStretches')
  ].filter(Boolean)
};

// Cardio warm-up (running specific)
export const cardioWarmup = {
  name: 'Cardio Warm-Up',
  duration: '5-7 minutes',
  exercises: [
    getExercise('warmup', 'walkingLunges'),
    getExercise('warmup', 'legSwings'),
    getExercise('warmup', 'hipCircles'),
    getExercise('warmup', 'highKnees'),
    getExercise('warmup', 'buttKicks'),
    getExercise('warmup', 'inchworms')
  ].filter(Boolean)
};

// Cardio cool-down
export const cardioCooldown = {
  name: 'Cardio Cool-Down',
  duration: '10-12 minutes',
  exercises: [
    getExercise('cooldown', 'walkingCooldown'),
    getExercise('cooldown', 'standingQuadStretch'),
    getExercise('cooldown', 'standingHamstringStretch'),
    getExercise('cooldown', 'hipFlexorStretch'),
    getExercise('cooldown', 'pigeonStretch'),
    getExercise('cooldown', 'standingCalfStretch'),
    getExercise('cooldown', 'foamRollQuads'),
    getExercise('cooldown', 'foamRollIT'),
    getExercise('cooldown', 'foamRollCalves')
  ].filter(Boolean)
};

// ============ WORKOUT TEMPLATES ============

// STRENGTH WORKOUT A - Lower Body Focus
export const strengthWorkoutA = {
  id: 'strength-a',
  name: 'Strength A - Lower Body',
  type: 'strength',
  duration: '60 minutes',
  targetMuscles: ['Quadriceps', 'Hamstrings', 'Glutes', 'Core'],
  warmup: standardWarmup,
  mainExercises: [
    {
      ...getExercise('machineStrength', 'legPress'),
      prescription: { sets: 3, reps: '12-15', rest: '90 seconds' }
    },
    {
      ...getExercise('machineStrength', 'legCurl'),
      prescription: { sets: 3, reps: '12-15', rest: '60 seconds' }
    },
    {
      ...getExercise('machineStrength', 'legExtension'),
      prescription: { sets: 3, reps: '12-15', rest: '60 seconds' }
    },
    {
      ...getExercise('machineStrength', 'hipAbductor'),
      prescription: { sets: 3, reps: '15', rest: '60 seconds' }
    },
    {
      ...getExercise('machineStrength', 'hipAdductor'),
      prescription: { sets: 3, reps: '15', rest: '60 seconds' }
    }
  ],
  stabilityExercises: [
    {
      ...getExercise('stability', 'gluteBridge'),
      prescription: { sets: 3, reps: '15', rest: '45 seconds' }
    },
    {
      ...getExercise('stability', 'singleLegBalance'),
      prescription: { sets: 2, duration: '30 sec each leg', rest: '30 seconds' }
    },
    {
      ...getExercise('stability', 'plank'),
      prescription: { sets: 3, duration: '30-45 seconds', rest: '30 seconds' }
    }
  ],
  cooldown: standardCooldown
};

// STRENGTH WORKOUT B - Upper Body Focus
export const strengthWorkoutB = {
  id: 'strength-b',
  name: 'Strength B - Upper Body',
  type: 'strength',
  duration: '60 minutes',
  targetMuscles: ['Chest', 'Back', 'Shoulders', 'Arms', 'Core'],
  warmup: standardWarmup,
  mainExercises: [
    {
      ...getExercise('machineStrength', 'chestPress'),
      prescription: { sets: 3, reps: '12-15', rest: '90 seconds' }
    },
    {
      ...getExercise('machineStrength', 'latPulldown'),
      prescription: { sets: 3, reps: '12-15', rest: '90 seconds' }
    },
    {
      ...getExercise('machineStrength', 'seatedRow'),
      prescription: { sets: 3, reps: '12-15', rest: '60 seconds' }
    },
    {
      ...getExercise('machineStrength', 'shoulderPress'),
      prescription: { sets: 3, reps: '12-15', rest: '60 seconds' }
    },
    {
      ...getExercise('machineStrength', 'cableFacePull'),
      prescription: { sets: 3, reps: '15', rest: '60 seconds' }
    }
  ],
  stabilityExercises: [
    {
      ...getExercise('stability', 'deadBug'),
      prescription: { sets: 3, reps: '10 each side', rest: '45 seconds' }
    },
    {
      ...getExercise('stability', 'birdDog'),
      prescription: { sets: 3, reps: '10 each side', rest: '45 seconds' }
    },
    {
      ...getExercise('machineStrength', 'cableWoodchop'),
      prescription: { sets: 2, reps: '10 each side', rest: '45 seconds' }
    }
  ],
  cooldown: standardCooldown
};

// STRENGTH WORKOUT C - Full Body / Running Specific
export const strengthWorkoutC = {
  id: 'strength-c',
  name: 'Strength C - Full Body / Running Focus',
  type: 'strength',
  duration: '60 minutes',
  targetMuscles: ['Full Body', 'Running-Specific Muscles', 'Core'],
  warmup: standardWarmup,
  mainExercises: [
    {
      ...getExercise('machineStrength', 'legPress'),
      prescription: { sets: 3, reps: '10-12', rest: '90 seconds' }
    },
    {
      ...getExercise('machineStrength', 'assistedPullUp'),
      prescription: { sets: 3, reps: '8-12', rest: '90 seconds' }
    },
    {
      ...getExercise('machineStrength', 'legCurl'),
      prescription: { sets: 3, reps: '12', rest: '60 seconds' }
    },
    {
      ...getExercise('machineStrength', 'cableKickback'),
      prescription: { sets: 3, reps: '12 each leg', rest: '60 seconds' }
    },
    {
      ...getExercise('machineStrength', 'cableFacePull'),
      prescription: { sets: 3, reps: '15', rest: '60 seconds' }
    }
  ],
  stabilityExercises: [
    {
      ...getExercise('stability', 'singleLegGluteBridge'),
      prescription: { sets: 3, reps: '10 each leg', rest: '45 seconds' }
    },
    {
      ...getExercise('stability', 'clamshells'),
      prescription: { sets: 3, reps: '15 each side', rest: '45 seconds' }
    },
    {
      ...getExercise('stability', 'sidePlank'),
      prescription: { sets: 2, duration: '30 sec each side', rest: '30 seconds' }
    },
    {
      ...getExercise('stability', 'singleLegRomanianDeadlift'),
      prescription: { sets: 2, reps: '8 each leg', rest: '60 seconds' }
    }
  ],
  cooldown: standardCooldown
};

// CARDIO WORKOUT 1 - Easy Run/Walk
export const cardioWorkout1 = {
  id: 'cardio-easy',
  name: 'Cardio - Easy Run/Walk',
  type: 'cardio',
  duration: '60 minutes',
  intensity: 'Low - Conversational pace',
  warmup: cardioWarmup,
  mainWorkout: {
    exercise: getExercise('cardio', 'treadmillJog'),
    phases: {
      foundation: {
        description: 'Walk 5 min → Run 1 min/Walk 2 min x 10 → Walk 5 min cool down',
        totalRunTime: '10 minutes',
        totalWalkTime: '30 minutes',
        instructions: 'Focus on form, not speed. Should be able to hold conversation.'
      },
      building: {
        description: 'Walk 5 min → Run 2 min/Walk 1 min x 12 → Walk 5 min cool down',
        totalRunTime: '24 minutes',
        totalWalkTime: '22 minutes',
        instructions: 'Gradually increasing run intervals. Stay comfortable.'
      },
      development: {
        description: 'Walk 5 min → Run 20-25 min continuous → Walk 5 min cool down',
        totalRunTime: '20-25 minutes',
        totalWalkTime: '10 minutes',
        instructions: 'Work toward continuous running. Walk if needed.'
      },
      race: {
        description: 'Walk 5 min → Run 30-35 min easy pace → Walk 5 min cool down',
        totalRunTime: '30-35 minutes',
        totalWalkTime: '10 minutes',
        instructions: 'Easy effort. This is recovery running.'
      }
    },
    heartRateZone: 'Zone 2 (60-70% max HR)',
    appleWatchMetric: 'Keep heart rate in green zone'
  },
  cooldown: cardioCooldown
};

// CARDIO WORKOUT 2 - Tempo/Interval
export const cardioWorkout2 = {
  id: 'cardio-tempo',
  name: 'Cardio - Tempo/Intervals',
  type: 'cardio',
  duration: '60 minutes',
  intensity: 'Moderate-High',
  warmup: cardioWarmup,
  mainWorkout: {
    exercise: getExercise('cardio', 'treadmillIntervals'),
    phases: {
      foundation: {
        description: 'Walk 5 min → (Fast walk 1 min / Easy walk 2 min) x 8 → Walk 5 min',
        instructions: 'Build intensity gradually. Fast walk should feel challenging but sustainable.'
      },
      building: {
        description: 'Walk 5 min → (Jog 2 min / Walk 1 min) x 10 → Walk 5 min',
        instructions: 'Jog intervals at slightly faster than easy pace.'
      },
      development: {
        description: 'Jog 10 min → (Hard run 1 min / Easy jog 2 min) x 6 → Jog 10 min',
        instructions: 'Hard intervals at comfortably hard effort (can speak in short phrases).'
      },
      race: {
        description: 'Jog 10 min → Tempo run 15-20 min at race pace → Jog 10 min',
        instructions: 'Tempo should feel like race effort - challenging but sustainable.'
      }
    },
    heartRateZone: 'Zone 3-4 (70-85% max HR)',
    appleWatchMetric: 'Allow heart rate into yellow/orange zone during work intervals'
  },
  cooldown: cardioCooldown
};

// CARDIO WORKOUT 3 - Cross Training (Optional third cardio day)
export const cardioWorkout3 = {
  id: 'cardio-cross',
  name: 'Cardio - Cross Training',
  type: 'cardio',
  duration: '60 minutes',
  intensity: 'Low-Moderate',
  warmup: cardioWarmup,
  mainWorkout: {
    options: [
      {
        exercise: getExercise('cardio', 'stationaryBike'),
        duration: '30-40 minutes',
        instructions: 'Steady pace, moderate resistance. Good for active recovery.'
      },
      {
        exercise: getExercise('cardio', 'rowerMachine'),
        duration: '20-30 minutes',
        instructions: 'Focus on form. Full body cardio without impact.'
      },
      {
        exercise: getExercise('cardio', 'elliptical'),
        duration: '30-40 minutes',
        instructions: 'Low impact alternative. Use arms actively.'
      },
      {
        exercise: getExercise('cardio', 'inclineTreadmill'),
        duration: '30 minutes',
        instructions: 'Power hiking. Great for building leg strength.'
      }
    ],
    heartRateZone: 'Zone 2-3 (60-75% max HR)',
    appleWatchMetric: 'Keep heart rate steady in green to low yellow zone'
  },
  cooldown: cardioCooldown
};

// ============ WEEKLY ROLLING SCHEDULE ============
export const rollingSchedule = {
  description: 'Rolling 5-6 workout rotation - not tied to specific days',
  note: 'Complete workouts in order. Skip days as needed for on-call. Resume where you left off.',
  workouts: [
    {
      order: 1,
      workout: strengthWorkoutA,
      restBefore: 'None or rest day'
    },
    {
      order: 2,
      workout: cardioWorkout1,
      restBefore: 'Can do day after strength'
    },
    {
      order: 3,
      workout: strengthWorkoutB,
      restBefore: 'Can do day after cardio'
    },
    {
      order: 4,
      workout: cardioWorkout2,
      restBefore: 'Can do day after strength'
    },
    {
      order: 5,
      workout: strengthWorkoutC,
      restBefore: 'At least 1 rest day recommended'
    },
    {
      order: 6,
      workout: cardioWorkout3,
      restBefore: 'Optional - do if feeling good and have time',
      optional: true
    }
  ],
  guidelines: {
    minimumRest: 'At least 1-2 full rest days per week',
    flexibility: 'Skip workouts as needed. Resume next workout in sequence when available.',
    doubleUp: 'OK to do strength + cardio same day if needed (strength first)',
    cardioVariety: 'Mix running and swimming for variety and lower impact on joints',
    recovery: 'Use sauna or steam room for 10-15 min after workouts for muscle recovery',
    listen: 'If feeling run down, rest is more valuable than forcing a workout'
  }
};

// All workouts for easy access
export const allWorkouts = [
  strengthWorkoutA,
  strengthWorkoutB,
  strengthWorkoutC,
  cardioWorkout1,
  cardioWorkout2,
  cardioWorkout3
];

export default {
  phases,
  standardWarmup,
  standardCooldown,
  cardioWarmup,
  cardioCooldown,
  strengthWorkoutA,
  strengthWorkoutB,
  strengthWorkoutC,
  cardioWorkout1,
  cardioWorkout2,
  cardioWorkout3,
  rollingSchedule,
  allWorkouts
};
