// Pre and Post Workout Nutrition Guidelines - Darmin Reddy
// Optimized for 25-year-old male athlete training for half marathon
// South African options from Pick n Pay, Woolworths, Checkers

export const nutritionGuidelines = {
  general: {
    hydration: {
      title: 'Daily Hydration',
      recommendation: '2-3 liters of water daily',
      tips: [
        'Start each day with a glass of water',
        'Keep a water bottle at your workstation',
        'Drink before you feel thirsty',
        'Monitor urine color - aim for pale yellow'
      ]
    },
    timing: {
      preWorkout: 'Eat 1-2 hours before training',
      postWorkout: 'Eat within 30-60 minutes after training',
      note: 'Adjust based on what feels good - some people train better fasted'
    }
  },

  preWorkout: {
    title: 'Pre-Workout Nutrition',
    timing: '1-2 hours before exercise',
    goals: [
      'Provide energy for the workout',
      'Prevent hunger during training',
      'Avoid stomach discomfort'
    ],
    macroFocus: 'Carbohydrates + Moderate Protein + Low Fat',

    quickOptions: {
      title: 'Quick Options (15-30 min prep)',
      meals: [
        {
          name: 'Banana with Almond Butter',
          description: '1 banana + 1 tbsp almond butter',
          timing: '30-60 min before',
          calories: '~200',
          macros: 'Carbs: 30g, Protein: 4g, Fat: 8g',
          why: 'Quick energy, easy to digest'
        },
        {
          name: 'Greek Yogurt & Berries',
          description: '150g Greek yogurt + handful of berries + drizzle of honey',
          timing: '1 hour before',
          calories: '~200',
          macros: 'Carbs: 25g, Protein: 15g, Fat: 3g',
          why: 'Protein + carbs, probiotics for gut health'
        },
        {
          name: 'Oatmeal with Banana',
          description: '40g oats + 1 banana + splash of milk',
          timing: '1.5-2 hours before',
          calories: '~300',
          macros: 'Carbs: 55g, Protein: 8g, Fat: 5g',
          why: 'Sustained energy release'
        },
        {
          name: 'Toast with Egg',
          description: '2 slices whole grain toast + 1 scrambled egg',
          timing: '1.5-2 hours before',
          calories: '~280',
          macros: 'Carbs: 35g, Protein: 12g, Fat: 8g',
          why: 'Balanced energy, keeps you full'
        },
        {
          name: 'Smoothie',
          description: '1 banana + 1 scoop protein powder + milk + handful spinach',
          timing: '1 hour before',
          calories: '~300',
          macros: 'Carbs: 40g, Protein: 25g, Fat: 4g',
          why: 'Easy to digest, hydrating'
        },
        {
          name: 'Rice Cakes with Nut Butter',
          description: '2 rice cakes + 1 tbsp peanut butter + banana slices',
          timing: '45-60 min before',
          calories: '~250',
          macros: 'Carbs: 35g, Protein: 6g, Fat: 9g',
          why: 'Light, easy on stomach'
        }
      ]
    },

    mealPrepOptions: {
      title: 'Meal Prep Options (make ahead)',
      meals: [
        {
          name: 'Overnight Oats',
          description: '50g oats + Greek yogurt + milk + berries (prep night before)',
          timing: '1.5-2 hours before',
          calories: '~350',
          macros: 'Carbs: 50g, Protein: 18g, Fat: 8g',
          why: 'Ready to eat, no morning prep'
        },
        {
          name: 'Energy Balls',
          description: 'Oats + dates + nut butter + dark chocolate chips (batch make)',
          timing: '45-60 min before',
          calories: '~150 per ball',
          macros: 'Carbs: 20g, Protein: 4g, Fat: 6g',
          why: 'Portable, lasts all week'
        }
      ]
    },

    onCallOptions: {
      title: 'When On Call / Limited Time',
      meals: [
        {
          name: 'Quick Banana',
          description: 'Just a banana - simple but effective',
          timing: '20-30 min before',
          why: 'Better than nothing, easy to grab'
        },
        {
          name: 'Handful of Dates',
          description: '4-5 dates for quick energy',
          timing: '20-30 min before',
          why: 'Natural sugars, no prep'
        },
        {
          name: 'Small Handful of Trail Mix',
          description: 'Keep a bag in your locker/bag',
          timing: '30-45 min before',
          why: 'Portable, balanced energy'
        }
      ]
    },

    whatToAvoid: [
      'High fat meals (slow digestion)',
      'High fiber foods (may cause GI distress)',
      'Spicy foods',
      'New foods on workout days',
      'Large portions close to exercise'
    ]
  },

  postWorkout: {
    title: 'Post-Workout Nutrition',
    timing: 'Within 30-60 minutes after exercise',
    goals: [
      'Replenish glycogen stores',
      'Support muscle recovery',
      'Rehydrate',
      'Reduce muscle soreness'
    ],
    macroFocus: 'Protein + Carbohydrates + Fluids',

    quickOptions: {
      title: 'Quick Options (15-30 min prep)',
      meals: [
        {
          name: 'Protein Shake & Banana',
          description: '1 scoop whey/plant protein + milk + 1 banana',
          timing: 'Immediately after',
          calories: '~350',
          macros: 'Carbs: 40g, Protein: 30g, Fat: 5g',
          why: 'Fast absorbing, convenient'
        },
        {
          name: 'Greek Yogurt Bowl',
          description: '200g Greek yogurt + granola + honey + berries',
          timing: 'Within 30 min',
          calories: '~400',
          macros: 'Carbs: 45g, Protein: 25g, Fat: 10g',
          why: 'High protein, satisfying'
        },
        {
          name: 'Chocolate Milk',
          description: '500ml chocolate milk (surprisingly effective!)',
          timing: 'Immediately after',
          calories: '~350',
          macros: 'Carbs: 50g, Protein: 16g, Fat: 10g',
          why: 'Ideal carb:protein ratio, rehydrating'
        },
        {
          name: 'Eggs on Toast',
          description: '2-3 eggs + 2 slices whole grain toast + avocado',
          timing: 'Within 45 min',
          calories: '~450',
          macros: 'Carbs: 35g, Protein: 22g, Fat: 22g',
          why: 'Whole food, satisfying'
        },
        {
          name: 'Tuna Wrap',
          description: 'Whole wheat wrap + tinned tuna + light mayo + salad',
          timing: 'Within 45 min',
          calories: '~380',
          macros: 'Carbs: 35g, Protein: 30g, Fat: 12g',
          why: 'High protein, portable'
        },
        {
          name: 'Cottage Cheese & Fruit',
          description: '200g cottage cheese + pineapple or peach',
          timing: 'Within 30 min',
          calories: '~250',
          macros: 'Carbs: 20g, Protein: 28g, Fat: 5g',
          why: 'Casein protein for sustained recovery'
        }
      ]
    },

    mealPrepOptions: {
      title: 'Meal Prep Options',
      meals: [
        {
          name: 'Chicken & Rice Bowl',
          description: 'Grilled chicken + rice + roasted vegetables (batch cook)',
          timing: 'Within 1 hour',
          calories: '~500',
          macros: 'Carbs: 50g, Protein: 40g, Fat: 12g',
          why: 'Complete meal, reheats well'
        },
        {
          name: 'Salmon & Sweet Potato',
          description: 'Baked salmon + sweet potato + greens',
          timing: 'Within 1 hour',
          calories: '~550',
          macros: 'Carbs: 45g, Protein: 35g, Fat: 20g',
          why: 'Anti-inflammatory omega-3s'
        },
        {
          name: 'Turkey Meatballs & Pasta',
          description: 'Lean turkey meatballs + whole wheat pasta + tomato sauce',
          timing: 'Within 1 hour',
          calories: '~500',
          macros: 'Carbs: 55g, Protein: 35g, Fat: 14g',
          why: 'Batch cook meatballs on weekend'
        },
        {
          name: 'Bean & Quinoa Salad',
          description: 'Mixed beans + quinoa + vegetables + olive oil dressing',
          timing: 'Within 1 hour',
          calories: '~450',
          macros: 'Carbs: 55g, Protein: 20g, Fat: 15g',
          why: 'Plant-based option, make ahead'
        }
      ]
    },

    onCallOptions: {
      title: 'When On Call / Hospital Setting',
      meals: [
        {
          name: 'Protein Bar',
          description: 'Keep quality protein bars in your locker (20g+ protein)',
          why: 'Always available, no refrigeration'
        },
        {
          name: 'Milk + Banana',
          description: 'Available in most hospital cafeterias',
          why: 'Simple but effective recovery'
        },
        {
          name: 'Nuts + Dried Fruit',
          description: 'Pre-portioned bags in your bag',
          why: 'Shelf stable, satisfying'
        },
        {
          name: 'Pre-made Sandwich',
          description: 'Chicken/turkey sandwich from cafeteria',
          why: 'Balanced meal, readily available'
        }
      ]
    },

    hydration: {
      title: 'Post-Workout Hydration',
      recommendations: [
        'Drink 500ml water immediately after',
        'Add electrolytes if sweating heavily',
        'Continue drinking throughout the day',
        'Monitor urine color'
      ],
      electrolyteSources: [
        'Coconut water',
        'Electrolyte tablets (Nuun, etc.)',
        'Pinch of salt in water with lemon',
        'Sports drinks (in moderation)'
      ]
    }
  },

  // Weekly meal prep suggestions
  weeklyPrepTips: {
    title: 'Weekend Meal Prep (1-2 hours)',
    sunday: [
      'Cook a batch of chicken breasts or thighs',
      'Prepare rice or quinoa for the week',
      'Roast a tray of vegetables',
      'Make overnight oats portions for 3-4 days',
      'Prepare energy balls',
      'Portion out trail mix/nuts',
      'Hard boil eggs for quick snacks'
    ],
    storageTips: [
      'Invest in good meal prep containers',
      'Portion post-workout meals into individual containers',
      'Keep portable snacks in your work bag',
      'Stock protein bars/shakes in your locker'
    ]
  },

  // Special considerations
  specialConsiderations: {
    nightShifts: {
      title: 'Eating Around Night Shifts',
      tips: [
        'Eat your main meal before shift starts',
        'Have smaller snacks during shift',
        'Avoid heavy meals after 2am if possible',
        'Light protein snack before sleeping',
        'Stay hydrated through the shift'
      ]
    },
    postCall: {
      title: 'Training After Being On Call',
      tips: [
        'Prioritize sleep over training if exhausted',
        'If training, keep it light',
        'Extra carbs for energy',
        'Stay extra hydrated',
        'Consider it an "easy" workout day'
      ]
    }
  }
};

export default nutritionGuidelines;
