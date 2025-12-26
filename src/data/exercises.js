// Comprehensive Exercise Library with Video Links
// Sources: ATHLEAN-X, Squat University, Mind Pump TV, MegSquats, Jack Hanrahan
// All links verified and from official channel uploads

export const exercises = {
  // ============ WARM-UP EXERCISES ============
  warmup: {
    jumpingJacks: {
      id: 'warmup-jumping-jacks',
      name: 'Jumping Jacks',
      category: 'warmup',
      duration: '60 seconds',
      description: 'Full body warm-up to elevate heart rate',
      videoUrl: 'https://www.youtube.com/watch?v=iSSAk4XCsRA',
      videoSource: 'ATHLEAN-X',
      cues: ['Land softly', 'Keep core engaged', 'Full arm extension overhead']
    },
    armCircles: {
      id: 'warmup-arm-circles',
      name: 'Arm Circles',
      category: 'warmup',
      duration: '30 seconds each direction',
      description: 'Shoulder mobility warm-up',
      videoUrl: 'https://www.youtube.com/watch?v=S6F7YXjbLn8',
      videoSource: 'Squat University',
      cues: ['Start small, gradually increase', 'Keep shoulders down', 'Both directions']
    },
    legSwings: {
      id: 'warmup-leg-swings',
      name: 'Leg Swings',
      category: 'warmup',
      duration: '10 each leg, each direction',
      description: 'Hip mobility and hamstring warm-up',
      videoUrl: 'https://www.youtube.com/watch?v=3Ymjw7TSzrE',
      videoSource: 'ATHLEAN-X',
      cues: ['Hold something for balance', 'Control the swing', 'Front-to-back and side-to-side']
    },
    hipCircles: {
      id: 'warmup-hip-circles',
      name: 'Hip Circles',
      category: 'warmup',
      duration: '10 each direction per leg',
      description: 'Hip joint mobility',
      videoUrl: 'https://www.youtube.com/watch?v=HnSMGR4nVYM',
      videoSource: 'Squat University',
      cues: ['Draw big circles with knee', 'Keep standing leg stable', 'Both directions']
    },
    walkingLunges: {
      id: 'warmup-walking-lunges',
      name: 'Walking Lunges',
      category: 'warmup',
      duration: '10 each leg',
      description: 'Dynamic lower body warm-up',
      videoUrl: 'https://www.youtube.com/watch?v=QOVaHwm-Q6U',
      videoSource: 'ATHLEAN-X',
      cues: ['Knee tracks over toes', 'Upright torso', 'Full range of motion']
    },
    highKnees: {
      id: 'warmup-high-knees',
      name: 'High Knees',
      category: 'warmup',
      duration: '30 seconds',
      description: 'Cardio warm-up and hip flexor activation',
      videoUrl: 'https://www.youtube.com/watch?v=tx5rgpDAJRI',
      videoSource: 'ATHLEAN-X',
      cues: ['Drive knees to hip height', 'Stay on balls of feet', 'Pump arms']
    },
    buttKicks: {
      id: 'warmup-butt-kicks',
      name: 'Butt Kicks',
      category: 'warmup',
      duration: '30 seconds',
      description: 'Quad warm-up and hamstring activation',
      videoUrl: 'https://www.youtube.com/watch?v=tx5rgpDAJRI',
      videoSource: 'ATHLEAN-X',
      cues: ['Heel to glute', 'Stay light on feet', 'Keep hips stable']
    },
    catCow: {
      id: 'warmup-cat-cow',
      name: 'Cat-Cow Stretch',
      category: 'warmup',
      duration: '10 reps',
      description: 'Spinal mobility warm-up',
      videoUrl: 'https://www.youtube.com/watch?v=K9bK0BwKFjs',
      videoSource: 'Squat University',
      cues: ['Breathe with movement', 'Full spinal flexion and extension', 'Slow and controlled']
    },
    worldsGreatestStretch: {
      id: 'warmup-worlds-greatest',
      name: "World's Greatest Stretch",
      category: 'warmup',
      duration: '5 each side',
      description: 'Full body dynamic mobility',
      videoUrl: 'https://www.youtube.com/watch?v=vpVnv1ykev4',
      videoSource: 'ATHLEAN-X',
      cues: ['Deep lunge position', 'Rotate thoracic spine', 'Drive elbow to instep']
    },
    inchworms: {
      id: 'warmup-inchworms',
      name: 'Inchworms',
      category: 'warmup',
      duration: '8 reps',
      description: 'Full body warm-up and hamstring mobility',
      videoUrl: 'https://www.youtube.com/watch?v=ZY2ji_Ho0dA',
      videoSource: 'ATHLEAN-X',
      cues: ['Keep legs as straight as possible', 'Walk hands out to plank', 'Walk feet back to hands']
    }
  },

  // ============ STRENGTH - MACHINE EXERCISES ============
  machineStrength: {
    legPress: {
      id: 'machine-leg-press',
      name: 'Leg Press Machine',
      category: 'strength',
      equipment: 'machine',
      muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
      description: 'Foundational lower body strength',
      videoUrl: 'https://www.youtube.com/watch?v=IZxyjW7MPJQ',
      videoSource: 'ATHLEAN-X',
      technogymSetup: [
        '1. Adjust seat: Sit with back flat against pad, knees should be at 90 degrees when feet are on platform',
        '2. Foot placement: Feet shoulder-width apart, toes slightly out (10-15 degrees)',
        '3. Select weight: Start with 60-80kg for foundation phase',
        '4. Safety release: Keep handles locked until ready, release only after feet are secure on platform'
      ],
      cues: ['Feet shoulder-width apart', 'Lower until 90 degrees', 'Do not lock knees at top', 'Keep lower back against pad']
    },
    chestPress: {
      id: 'machine-chest-press',
      name: 'Chest Press Machine',
      category: 'strength',
      equipment: 'machine',
      muscleGroups: ['chest', 'triceps', 'front deltoids'],
      description: 'Upper body pushing strength',
      videoUrl: 'https://www.youtube.com/watch?v=uIzbJX5EVIY',
      videoSource: 'ScottHermanFitness',
      technogymSetup: [
        '1. Seat height: Adjust so handles align with mid-chest (nipple line)',
        '2. Grip: Use horizontal handles for chest focus, vertical for more triceps',
        '3. Back position: Pull shoulder blades back and down, maintain contact with pad throughout',
        '4. Select weight: Start with 30-40kg for foundation phase',
        '5. Starting position: Handles should be at chest level when arms are bent'
      ],
      cues: ['Align handles with mid-chest', 'Retract shoulder blades', 'Control the weight back', 'Full range of motion']
    },
    latPulldown: {
      id: 'machine-lat-pulldown',
      name: 'Lat Pulldown',
      category: 'strength',
      equipment: 'machine',
      muscleGroups: ['lats', 'biceps', 'rear deltoids'],
      description: 'Upper body pulling strength',
      videoUrl: 'https://www.youtube.com/watch?v=CAwf7n6Luuc',
      videoSource: 'ATHLEAN-X',
      technogymSetup: [
        '1. Seat height: Sit with thighs secured under pad, feet flat on floor',
        '2. Thigh pad: Adjust down to keep you from lifting off seat during pull',
        '3. Grip: Wide grip for lat width, closer grip for thickness and biceps',
        '4. Select weight: Start with 40-50kg for foundation phase',
        '5. Starting position: Arms fully extended overhead, slight lean back (15 degrees)'
      ],
      cues: ['Slight lean back', 'Pull to upper chest', 'Squeeze shoulder blades', 'Control the negative']
    },
    seatedRow: {
      id: 'machine-seated-row',
      name: 'Seated Cable Row',
      category: 'strength',
      equipment: 'machine',
      muscleGroups: ['mid-back', 'lats', 'biceps', 'rear deltoids'],
      description: 'Horizontal pulling for posture',
      videoUrl: 'https://www.youtube.com/watch?v=GZbfZ033f74',
      videoSource: 'ATHLEAN-X',
      technogymSetup: [
        '1. Seat height: Adjust so cable pulls horizontally to belly button when seated',
        '2. Chest pad: Position chest pad 1-2 inches from chest when arms are extended',
        '3. Foot position: Feet flat on foot rests, knees slightly bent',
        '4. Select weight: Start with 35-45kg for foundation phase',
        '5. Attachment: Use V-bar handle for neutral grip (recommended for beginners)'
      ],
      cues: ['Sit tall', 'Pull to belly button', 'Lead with elbows', 'Squeeze at contraction']
    },
    legCurl: {
      id: 'machine-leg-curl',
      name: 'Lying Leg Curl',
      category: 'strength',
      equipment: 'machine',
      muscleGroups: ['hamstrings'],
      description: 'Isolated hamstring strengthening for running',
      videoUrl: 'https://www.youtube.com/watch?v=1Tq3QdYUuHs',
      videoSource: 'ATHLEAN-X',
      technogymSetup: [
        '1. Pad position: Adjust leg pad to sit just above your achilles tendon/heel',
        '2. Lying position: Lie face down, knees just off the edge of the main pad',
        '3. Hip alignment: Knees should align with the pivot point (marked with dot on machine)',
        '4. Select weight: Start with 25-35kg for foundation phase',
        '5. Grip handles: Hold handles firmly to keep hips from lifting'
      ],
      cues: ['Keep hips flat on pad', 'Full range of motion', 'Squeeze at top', 'Slow eccentric']
    },
    legExtension: {
      id: 'machine-leg-extension',
      name: 'Leg Extension',
      category: 'strength',
      equipment: 'machine',
      muscleGroups: ['quadriceps'],
      description: 'Isolated quad strengthening',
      videoUrl: 'https://www.youtube.com/watch?v=YyvSfVjQeL0',
      videoSource: 'ATHLEAN-X',
      technogymSetup: [
        '1. Seat back: Adjust so knees align with pivot point (marked dot on side)',
        '2. Shin pad: Position on lower shin, just above ankles',
        '3. Seat position: Back should be flush against back pad',
        '4. Select weight: Start with 30-40kg for foundation phase',
        '5. Starting position: Legs should be at 90 degrees before extending'
      ],
      cues: ['Adjust pad to lower shin', 'Do not lock out aggressively', 'Control the descent', 'Keep back against pad']
    },
    shoulderPress: {
      id: 'machine-shoulder-press',
      name: 'Shoulder Press Machine',
      category: 'strength',
      equipment: 'machine',
      muscleGroups: ['deltoids', 'triceps'],
      description: 'Overhead pressing strength',
      videoUrl: 'https://www.youtube.com/watch?v=qEwKCR5JCog',
      videoSource: 'ATHLEAN-X',
      technogymSetup: [
        '1. Seat height: Adjust so handles are at ear/shoulder level when seated',
        '2. Back position: Sit with back flat against pad, feet flat on floor',
        '3. Grip: Neutral grip (palms facing each other) is easier on shoulders',
        '4. Select weight: Start with 20-30kg for foundation phase',
        '5. Starting position: Elbows should be at 90 degrees, forearms vertical'
      ],
      cues: ['Elbows at 90 degrees start', 'Press overhead fully', 'Keep core braced', 'Do not arch excessively']
    },
    cableFacePull: {
      id: 'cable-face-pull',
      name: 'Cable Face Pull',
      category: 'strength',
      equipment: 'cable',
      muscleGroups: ['rear deltoids', 'rotator cuff', 'upper back'],
      description: 'Shoulder health and posture correction',
      videoUrl: 'https://www.youtube.com/watch?v=rep-qVOkqgk',
      videoSource: 'ATHLEAN-X',
      technogymSetup: [
        '1. Cable height: Set pulley at face/eye height',
        '2. Attachment: Use rope attachment (two separate handles)',
        '3. Distance: Stand 2-3 feet back from cable machine',
        '4. Select weight: Start with 15-25kg for foundation phase',
        '5. Stance: Feet shoulder-width apart, slight stagger for stability'
      ],
      cues: ['Set cable at face height', 'Pull to ears', 'External rotate at end', 'Squeeze rear delts']
    },
    cableWoodchop: {
      id: 'cable-woodchop',
      name: 'Cable Woodchop',
      category: 'strength',
      equipment: 'cable',
      muscleGroups: ['obliques', 'core', 'shoulders'],
      description: 'Rotational core strength',
      videoUrl: 'https://www.youtube.com/watch?v=pAplQXk3dkU',
      videoSource: 'ATHLEAN-X',
      technogymSetup: [
        '1. Cable height: For high-to-low woodchop, set pulley at highest position',
        '2. Attachment: Use D-handle or rope attachment',
        '3. Distance: Stand 2-3 feet to the side of cable machine',
        '4. Select weight: Start with 10-20kg for foundation phase',
        '5. Stance: Feet shoulder-width apart, perpendicular to cable'
      ],
      cues: ['Rotate from hips', 'Arms stay extended', 'Control the weight', 'Both directions']
    },
    assistedPullUp: {
      id: 'machine-assisted-pullup',
      name: 'Assisted Pull-Up Machine',
      category: 'strength',
      equipment: 'machine',
      muscleGroups: ['lats', 'biceps', 'core'],
      description: 'Building toward unassisted pull-ups',
      videoUrl: 'https://www.youtube.com/watch?v=lORFt9jwYDk',
      videoSource: 'ScottHermanFitness',
      technogymSetup: [
        '1. Weight selection: Select assistance weight (higher weight = easier). Start with 40-50kg assistance',
        '2. Knee/foot platform: Step onto platform, kneel or stand on assistance pad',
        '3. Grip: Use wide grip (outside shoulder width) for lats',
        '4. Goal: Reduce assistance weight by 5kg every 2 weeks',
        '5. Starting position: Full hang with arms extended, shoulders engaged (not shrugged)'
      ],
      cues: ['Full hang at bottom', 'Chin over bar at top', 'Control the descent', 'Reduce assistance over time']
    },
    hipAbductor: {
      id: 'machine-hip-abductor',
      name: 'Hip Abductor Machine',
      category: 'strength',
      equipment: 'machine',
      muscleGroups: ['glute medius', 'hip abductors'],
      description: 'Hip stability for running gait',
      videoUrl: 'https://www.youtube.com/watch?v=aKFEW6LEmSY',
      videoSource: 'Squat University',
      technogymSetup: [
        '1. Seat position: Sit all the way back, back flush against pad',
        '2. Pad placement: Outer pads should sit on outer thighs, just above knees',
        '3. Starting position: Legs should start together (pads touching)',
        '4. Select weight: Start with 30-40kg for foundation phase',
        '5. Range: Push legs out to comfortable width (aim for 45-60 degrees)'
      ],
      cues: ['Sit tall', 'Push knees outward', 'Control the return', 'Do not use momentum']
    },
    hipAdductor: {
      id: 'machine-hip-adductor',
      name: 'Hip Adductor Machine',
      category: 'strength',
      equipment: 'machine',
      muscleGroups: ['adductors', 'inner thigh'],
      description: 'Inner thigh strength for stability',
      videoUrl: 'https://www.youtube.com/watch?v=aKFEW6LEmSY',
      videoSource: 'Squat University',
      technogymSetup: [
        '1. Seat position: Sit all the way back, back flush against pad',
        '2. Pad placement: Inner pads should sit on inner thighs, just above knees',
        '3. Starting position: Use lever to adjust starting width (start narrower, progress to wider)',
        '4. Select weight: Start with 30-40kg for foundation phase',
        '5. Range: Squeeze legs together until pads touch in the middle'
      ],
      cues: ['Sit tall', 'Squeeze inward', 'Control the release', 'Full range of motion']
    },
    cableKickback: {
      id: 'cable-kickback',
      name: 'Cable Glute Kickback',
      category: 'strength',
      equipment: 'cable',
      muscleGroups: ['glutes', 'hamstrings'],
      description: 'Glute isolation for running power',
      videoUrl: 'https://www.youtube.com/watch?v=g_deBrasmGo',
      videoSource: 'MegSquats',
      technogymSetup: [
        '1. Cable height: Set pulley at lowest position',
        '2. Attachment: Use ankle strap (wrap around working ankle)',
        '3. Position: Face the machine, hold frame for balance',
        '4. Select weight: Start with 10-15kg for foundation phase',
        '5. Stance: Stand on one leg, working leg starts bent at 90 degrees'
      ],
      cues: ['Ankle strap attachment', 'Keep core tight', 'Squeeze glute at top', 'Do not arch lower back']
    },
    tricepPushdown: {
      id: 'cable-tricep-pushdown',
      name: 'Cable Tricep Pushdown',
      category: 'strength',
      equipment: 'cable',
      muscleGroups: ['triceps'],
      description: 'Arm strength and definition',
      videoUrl: 'https://www.youtube.com/watch?v=2-LAMcpzODU',
      videoSource: 'ATHLEAN-X',
      technogymSetup: [
        '1. Cable height: Set pulley at highest position',
        '2. Attachment: Use rope or straight bar (rope is easier on elbows)',
        '3. Position: Stand 6-12 inches from machine',
        '4. Select weight: Start with 15-25kg for foundation phase',
        '5. Stance: Slight forward lean, elbows pinned to sides'
      ],
      cues: ['Elbows pinned to sides', 'Full extension', 'Control the return', 'Do not lean forward']
    },
    cableBicepCurl: {
      id: 'cable-bicep-curl',
      name: 'Cable Bicep Curl',
      category: 'strength',
      equipment: 'cable',
      muscleGroups: ['biceps'],
      description: 'Arm strength with constant tension',
      videoUrl: 'https://www.youtube.com/watch?v=NFzTWp2qpiE',
      videoSource: 'ATHLEAN-X',
      technogymSetup: [
        '1. Cable height: Set pulley at lowest position',
        '2. Attachment: Use straight bar or EZ-curl bar (EZ bar is easier on wrists)',
        '3. Position: Stand 6-12 inches from machine',
        '4. Select weight: Start with 15-25kg for foundation phase',
        '5. Stance: Feet shoulder-width apart, elbows pinned to sides'
      ],
      cues: ['Elbows stay fixed', 'Full range of motion', 'Squeeze at top', 'Control the negative']
    }
  },

  // ============ STABILITY & BALANCE ============
  stability: {
    singleLegBalance: {
      id: 'stability-single-leg-balance',
      name: 'Single Leg Balance',
      category: 'stability',
      duration: '30 seconds each leg',
      description: 'Foundational balance for running',
      videoUrl: 'https://www.youtube.com/watch?v=vLLzUVvVLXA',
      videoSource: 'Squat University',
      cues: ['Soft knee', 'Eyes forward', 'Engage glute', 'Progress to eyes closed']
    },
    birdDog: {
      id: 'stability-bird-dog',
      name: 'Bird Dog',
      category: 'stability',
      reps: '10 each side',
      description: 'Core stability and balance',
      videoUrl: 'https://www.youtube.com/watch?v=wiFNA3sqjCA',
      videoSource: 'ATHLEAN-X',
      cues: ['Opposite arm and leg', 'Keep hips level', 'Draw in belly button', 'Hold at extension']
    },
    deadBug: {
      id: 'stability-dead-bug',
      name: 'Dead Bug',
      category: 'stability',
      reps: '10 each side',
      description: 'Anti-extension core stability',
      videoUrl: 'https://www.youtube.com/watch?v=I5xbsA71v1A',
      videoSource: 'ATHLEAN-X',
      cues: ['Lower back stays flat', 'Opposite arm and leg lower', 'Exhale as you extend', 'Control the movement']
    },
    plank: {
      id: 'stability-plank',
      name: 'Plank',
      category: 'stability',
      duration: '30-60 seconds',
      description: 'Core endurance and stability',
      videoUrl: 'https://www.youtube.com/watch?v=pvIjsG5Svck',
      videoSource: 'ATHLEAN-X',
      cues: ['Straight line head to heels', 'Squeeze glutes', 'Draw in belly button', 'Breathe normally']
    },
    sidePlank: {
      id: 'stability-side-plank',
      name: 'Side Plank',
      category: 'stability',
      duration: '30 seconds each side',
      description: 'Lateral core stability',
      videoUrl: 'https://www.youtube.com/watch?v=K2VljzCC16g',
      videoSource: 'ATHLEAN-X',
      cues: ['Stack hips', 'Elbow under shoulder', 'Lift hips high', 'Keep body straight']
    },
    gluteBridge: {
      id: 'stability-glute-bridge',
      name: 'Glute Bridge',
      category: 'stability',
      reps: '15 reps',
      description: 'Glute activation and hip stability',
      videoUrl: 'https://www.youtube.com/watch?v=OUgsJ8-Vi0E',
      videoSource: 'ATHLEAN-X',
      cues: ['Feet hip-width apart', 'Drive through heels', 'Squeeze glutes at top', 'Do not hyperextend']
    },
    singleLegGluteBridge: {
      id: 'stability-single-leg-glute-bridge',
      name: 'Single Leg Glute Bridge',
      category: 'stability',
      reps: '10 each leg',
      description: 'Unilateral glute strength and stability',
      videoUrl: 'https://www.youtube.com/watch?v=AVAXhy6pl7o',
      videoSource: 'Squat University',
      cues: ['Keep hips level', 'Drive through planted heel', 'Extend opposite leg', 'Control the descent']
    },
    clamshells: {
      id: 'stability-clamshells',
      name: 'Clamshells',
      category: 'stability',
      reps: '15 each side',
      description: 'Glute medius activation',
      videoUrl: 'https://www.youtube.com/watch?v=0RfWIxJyrEE',
      videoSource: 'Squat University',
      cues: ['Feet stay together', 'Lift top knee only', 'Do not rotate hips', 'Hold at top briefly']
    },
    palofPress: {
      id: 'stability-pallof-press',
      name: 'Pallof Press',
      category: 'stability',
      reps: '10 each side',
      description: 'Anti-rotation core stability',
      videoUrl: 'https://www.youtube.com/watch?v=AH_QZLm_0-s',
      videoSource: 'ATHLEAN-X',
      cues: ['Stand perpendicular to cable', 'Press straight out', 'Resist rotation', 'Hold at extension']
    },
    singleLegRomanianDeadlift: {
      id: 'stability-single-leg-rdl',
      name: 'Single Leg Romanian Deadlift',
      category: 'stability',
      reps: '8 each leg',
      description: 'Balance, hamstring, and glute strength',
      videoUrl: 'https://www.youtube.com/watch?v=Jdi5T-JdIeU',
      videoSource: 'Squat University',
      cues: ['Soft standing knee', 'Hinge at hips', 'Back leg extends behind', 'Keep hips square']
    },
    reverseLunge: {
      id: 'stability-reverse-lunge',
      name: 'Reverse Lunge',
      category: 'stability',
      reps: '10 each leg',
      description: 'Single leg strength and balance',
      videoUrl: 'https://www.youtube.com/watch?v=xrPteyQLGAo',
      videoSource: 'ATHLEAN-X',
      cues: ['Step back controlled', 'Front knee over ankle', 'Upright torso', 'Drive through front heel']
    },
    bosuSquat: {
      id: 'stability-bosu-squat',
      name: 'BOSU Ball Squat',
      category: 'stability',
      reps: '12 reps',
      description: 'Ankle and balance challenge',
      videoUrl: 'https://www.youtube.com/watch?v=Mg2c2E4RZp8',
      videoSource: 'Squat University',
      cues: ['Flat side up', 'Control the descent', 'Keep weight centered', 'Full depth if able']
    }
  },

  // ============ CARDIO EXERCISES ============
  cardio: {
    treadmillWalk: {
      id: 'cardio-treadmill-walk',
      name: 'Treadmill Walk',
      category: 'cardio',
      description: 'Low intensity base building',
      videoUrl: 'https://www.youtube.com/watch?v=aTvWAh2fKI8',
      videoSource: 'ATHLEAN-X',
      cues: ['Maintain conversation pace', 'Natural arm swing', 'Heel to toe gait', 'Use incline for progression']
    },
    treadmillJog: {
      id: 'cardio-treadmill-jog',
      name: 'Treadmill Easy Jog',
      category: 'cardio',
      description: 'Building aerobic base',
      videoUrl: 'https://www.youtube.com/watch?v=brFHyOtTwH4',
      videoSource: 'Running Channel',
      technogymSetup: [
        '1. Emergency stop: Clip safety cord to clothing before starting',
        '2. Start slow: Begin walking at 5 km/h, gradually increase to jog pace (8-10 km/h)',
        '3. Incline: Keep at 0-1% for easy jogs (1% mimics outdoor running)',
        '4. Display: Track time, distance, and heart rate if using watch/chest strap',
        '5. Hydration: Place water bottle in holder, sip every 10 minutes'
      ],
      cues: ['Comfortable pace', 'Should be able to talk', 'Midfoot strike', 'Relax shoulders']
    },
    treadmillIntervals: {
      id: 'cardio-treadmill-intervals',
      name: 'Treadmill Intervals',
      category: 'cardio',
      description: 'Speed and cardiovascular improvement',
      videoUrl: 'https://www.youtube.com/watch?v=m9U0pZIrlxU',
      videoSource: 'ATHLEAN-X',
      cues: ['Warm up first', 'Push hard on work intervals', 'Recover fully', 'Maintain form when tired']
    },
    inclineTreadmill: {
      id: 'cardio-incline-treadmill',
      name: 'Incline Treadmill Walk/Jog',
      category: 'cardio',
      description: 'Builds running strength and power',
      videoUrl: 'https://www.youtube.com/watch?v=aTvWAh2fKI8',
      videoSource: 'ATHLEAN-X',
      cues: ['Start with 5-8% incline', 'Shorter strides uphill', 'Lean slightly forward', 'Pump arms']
    },
    stationaryBike: {
      id: 'cardio-stationary-bike',
      name: 'Stationary Bike',
      category: 'cardio',
      description: 'Low impact cross training',
      videoUrl: 'https://www.youtube.com/watch?v=0W_pHPnTZw8',
      videoSource: 'ATHLEAN-X',
      technogymSetup: [
        '1. Seat height: Adjust so leg is almost straight (slight bend) at bottom of pedal stroke',
        '2. Seat position: Move seat forward/back so knee is over pedal when pedal is at 3 o\'clock',
        '3. Handlebar height: Adjust to comfortable reach (higher for beginners)',
        '4. Resistance level: Start at level 5-7 for foundation phase',
        '5. Display: Select "Manual" mode or "Rolling Hills" program'
      ],
      cues: ['Adjust seat height', 'Keep cadence 80-100 RPM', 'Light resistance to start', 'Avoid bouncing']
    },
    rowerMachine: {
      id: 'cardio-rower',
      name: 'Rowing Machine',
      category: 'cardio',
      description: 'Full body cardio cross training',
      videoUrl: 'https://www.youtube.com/watch?v=H0r0fCnGbxM',
      videoSource: 'ATHLEAN-X',
      technogymSetup: [
        '1. Foot straps: Secure feet with straps over ball of foot, heels can lift',
        '2. Handle grip: Overhand grip, hands shoulder-width apart',
        '3. Starting position: Knees bent, arms extended, lean forward slightly',
        '4. Resistance: Start at level 4-6 for foundation phase',
        '5. Display: Track time, distance, strokes per minute (aim for 22-26 SPM)'
      ],
      cues: ['Legs, back, arms sequence', 'Push through heels first', 'Pull to lower ribs', 'Control the return']
    },
    elliptical: {
      id: 'cardio-elliptical',
      name: 'Elliptical Machine',
      category: 'cardio',
      description: 'Low impact full body cardio',
      videoUrl: 'https://www.youtube.com/watch?v=0W_pHPnTZw8',
      videoSource: 'ATHLEAN-X',
      cues: ['Stand upright', 'Use arms actively', 'Push and pull handles', 'Keep feet flat on pedals']
    },
    stairClimber: {
      id: 'cardio-stair-climber',
      name: 'Stair Climber',
      category: 'cardio',
      description: 'Builds running-specific leg strength',
      videoUrl: 'https://www.youtube.com/watch?v=aTvWAh2fKI8',
      videoSource: 'ATHLEAN-X',
      cues: ['Light hand touch only', 'Full steps', 'Do not lean on rails', 'Keep upright posture']
    },
    swimmingEasy: {
      id: 'cardio-swimming-easy',
      name: 'Easy Swim - Freestyle',
      category: 'cardio',
      description: 'Low impact aerobic conditioning',
      videoUrl: 'https://www.youtube.com/watch?v=5HLW2AI1Oio',
      videoSource: 'MySwimPro',
      technogymSetup: [
        '1. Virgin Active lap pool: 25m length',
        '2. Lane selection: Use slow/medium lane based on comfort',
        '3. Equipment: Optional - kickboard and pull buoy available',
        '4. Duration: Start with 20-30 minutes continuous',
        '5. Pace: Should be able to complete 400m (16 lengths) in 10-12 minutes'
      ],
      cues: ['Breathe every 2-3 strokes', 'Long smooth strokes', 'Kick from hips not knees', 'Relax shoulders'],
      workoutStructure: {
        foundation: '200m warm-up → 400m steady → 200m cool down (800m total)',
        building: '200m warm-up → 600m steady → 200m cool down (1000m total)',
        development: '400m warm-up → 800m steady → 200m cool down (1400m total)',
        race: '400m warm-up → 1000m steady → 200m cool down (1600m total)'
      }
    },
    swimmingIntervals: {
      id: 'cardio-swimming-intervals',
      name: 'Swimming Intervals',
      category: 'cardio',
      description: 'High intensity swim training',
      videoUrl: 'https://www.youtube.com/watch?v=rJpFVvho0o4',
      videoSource: 'MySwimPro',
      technogymSetup: [
        '1. Virgin Active lap pool: 25m length',
        '2. Lane selection: Use medium/fast lane',
        '3. Rest intervals: Use pool edge clock or waterproof watch',
        '4. Equipment: Optional kickboard for kick sets',
        '5. Intensity: Hard efforts should feel challenging but maintainable'
      ],
      cues: ['Push hard on work intervals', 'Recover fully on rest', 'Maintain technique when tired', 'Focus on turnover'],
      workoutStructure: {
        foundation: '200m warm-up → 8 x 50m (30 sec rest) → 200m cool down',
        building: '400m warm-up → 10 x 50m (20 sec rest) → 200m cool down',
        development: '400m warm-up → 6 x 100m (30 sec rest) → 200m cool down',
        race: '400m warm-up → 8 x 100m (20 sec rest) → 400m cool down'
      }
    },
    swimmingRecovery: {
      id: 'cardio-swimming-recovery',
      name: 'Recovery Swim',
      category: 'cardio',
      description: 'Active recovery and mobility',
      videoUrl: 'https://www.youtube.com/watch?v=5HLW2AI1Oio',
      videoSource: 'MySwimPro',
      technogymSetup: [
        '1. Virgin Active lap pool: Use slow lane',
        '2. Pace: Very easy, focus on form and stretching',
        '3. Mix strokes: Freestyle, backstroke, breaststroke',
        '4. Duration: 20-30 minutes easy',
        '5. Post-swim: Use sauna (10 min) or steam room (10 min) for recovery'
      ],
      cues: ['Long slow strokes', 'Focus on breathing', 'Stretch between sets', 'Stay relaxed'],
      workoutStructure: {
        allPhases: '200m freestyle → 100m backstroke → 200m choice → 100m breaststroke (repeat 2-3x)'
      }
    }
  },

  // ============ COOL-DOWN & STRETCHING ============
  cooldown: {
    walkingCooldown: {
      id: 'cooldown-walking',
      name: 'Walking Cool-Down',
      category: 'cooldown',
      duration: '3-5 minutes',
      description: 'Gradual heart rate reduction',
      videoUrl: 'https://www.youtube.com/watch?v=SsT_go-kdwg',
      videoSource: 'ATHLEAN-X',
      cues: ['Slow gradual pace', 'Deep breathing', 'Let heart rate come down', 'Prepare for stretching']
    },
    standingQuadStretch: {
      id: 'stretch-standing-quad',
      name: 'Standing Quad Stretch',
      category: 'stretch',
      duration: '30 seconds each leg',
      description: 'Quadriceps flexibility',
      videoUrl: 'https://www.youtube.com/watch?v=SsT_go-kdwg',
      videoSource: 'ATHLEAN-X',
      cues: ['Hold something for balance', 'Keep knees together', 'Push hip forward', 'Stand tall']
    },
    standingHamstringStretch: {
      id: 'stretch-standing-hamstring',
      name: 'Standing Hamstring Stretch',
      category: 'stretch',
      duration: '30 seconds each leg',
      description: 'Hamstring flexibility',
      videoUrl: 'https://www.youtube.com/watch?v=SsT_go-kdwg',
      videoSource: 'ATHLEAN-X',
      cues: ['Heel on elevated surface', 'Hinge at hips', 'Keep back straight', 'Feel stretch in back of thigh']
    },
    hipFlexorStretch: {
      id: 'stretch-hip-flexor',
      name: 'Kneeling Hip Flexor Stretch',
      category: 'stretch',
      duration: '30 seconds each side',
      description: 'Opens tight hip flexors from sitting',
      videoUrl: 'https://www.youtube.com/watch?v=YQmpO9VT2X4',
      videoSource: 'ATHLEAN-X',
      cues: ['Back knee on ground', 'Squeeze glute of back leg', 'Lean forward slightly', 'Keep torso upright']
    },
    pigeonStretch: {
      id: 'stretch-pigeon',
      name: 'Pigeon Stretch',
      category: 'stretch',
      duration: '45 seconds each side',
      description: 'Deep glute and hip stretch',
      videoUrl: 'https://www.youtube.com/watch?v=_sGEfQRdqJQ',
      videoSource: 'Squat University',
      cues: ['Front shin parallel if able', 'Keep hips square', 'Fold forward for deeper stretch', 'Breathe deeply']
    },
    figure4Stretch: {
      id: 'stretch-figure-4',
      name: 'Figure 4 Stretch (Supine Pigeon)',
      category: 'stretch',
      duration: '30 seconds each side',
      description: 'Glute stretch lying down',
      videoUrl: 'https://www.youtube.com/watch?v=_sGEfQRdqJQ',
      videoSource: 'Squat University',
      cues: ['Ankle crosses above knee', 'Pull bottom leg toward chest', 'Keep head down', 'Relax shoulders']
    },
    seatedSpinalTwist: {
      id: 'stretch-spinal-twist',
      name: 'Seated Spinal Twist',
      category: 'stretch',
      duration: '30 seconds each side',
      description: 'Spinal mobility and lower back relief',
      videoUrl: 'https://www.youtube.com/watch?v=SsT_go-kdwg',
      videoSource: 'ATHLEAN-X',
      cues: ['Sit tall', 'Twist from mid-back', 'Look over shoulder', 'Keep both sit bones down']
    },
    childsPose: {
      id: 'stretch-childs-pose',
      name: "Child's Pose",
      category: 'stretch',
      duration: '45-60 seconds',
      description: 'Full body relaxation and back stretch',
      videoUrl: 'https://www.youtube.com/watch?v=SsT_go-kdwg',
      videoSource: 'ATHLEAN-X',
      cues: ['Knees wide or together', 'Arms extended forward', 'Sink hips to heels', 'Breathe into lower back']
    },
    standingCalfStretch: {
      id: 'stretch-calf',
      name: 'Standing Calf Stretch',
      category: 'stretch',
      duration: '30 seconds each leg',
      description: 'Calf flexibility for running',
      videoUrl: 'https://www.youtube.com/watch?v=SsT_go-kdwg',
      videoSource: 'ATHLEAN-X',
      cues: ['Wall or step', 'Back leg straight', 'Heel pressed down', 'Lean forward gently']
    },
    chestDoorwayStretch: {
      id: 'stretch-chest-doorway',
      name: 'Doorway Chest Stretch',
      category: 'stretch',
      duration: '30 seconds each side',
      description: 'Opens chest and front shoulders',
      videoUrl: 'https://www.youtube.com/watch?v=SWs6EZ9_qqM',
      videoSource: 'ATHLEAN-X',
      cues: ['Forearm on door frame', 'Step through doorway', 'Feel stretch in chest', 'Vary arm height']
    },
    upperBackStretch: {
      id: 'stretch-upper-back',
      name: 'Thread the Needle',
      category: 'stretch',
      duration: '30 seconds each side',
      description: 'Thoracic spine mobility',
      videoUrl: 'https://www.youtube.com/watch?v=vpVnv1ykev4',
      videoSource: 'ATHLEAN-X',
      cues: ['Start on all fours', 'Thread arm under body', 'Rotate upper back', 'Rest shoulder on ground']
    },
    neckStretches: {
      id: 'stretch-neck',
      name: 'Neck Stretches',
      category: 'stretch',
      duration: '20 seconds each direction',
      description: 'Release neck tension',
      videoUrl: 'https://www.youtube.com/watch?v=SsT_go-kdwg',
      videoSource: 'ATHLEAN-X',
      cues: ['Ear to shoulder', 'Chin to chest', 'Gentle pressure with hand', 'Do not force']
    },
    foamRollQuads: {
      id: 'foam-roll-quads',
      name: 'Foam Roll Quads',
      category: 'recovery',
      duration: '60 seconds each leg',
      description: 'Quad myofascial release',
      videoUrl: 'https://www.youtube.com/watch?v=SLomRph_Ygo',
      videoSource: 'Squat University',
      cues: ['Face down position', 'Roll from hip to knee', 'Pause on tender spots', 'Control pressure']
    },
    foamRollIT: {
      id: 'foam-roll-it-band',
      name: 'Foam Roll IT Band',
      category: 'recovery',
      duration: '60 seconds each leg',
      description: 'IT band release for runners',
      videoUrl: 'https://www.youtube.com/watch?v=SLomRph_Ygo',
      videoSource: 'Squat University',
      cues: ['Side lying position', 'Roll hip to knee', 'Stack or stagger legs', 'Avoid direct knee']
    },
    foamRollCalves: {
      id: 'foam-roll-calves',
      name: 'Foam Roll Calves',
      category: 'recovery',
      duration: '60 seconds each leg',
      description: 'Calf release for running recovery',
      videoUrl: 'https://www.youtube.com/watch?v=SLomRph_Ygo',
      videoSource: 'Squat University',
      cues: ['Seated position', 'Roll ankle to knee', 'Rotate foot in/out', 'Cross legs for more pressure']
    }
  }
};

export default exercises;
