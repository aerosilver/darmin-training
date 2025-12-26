# Half Marathon Training App - Darmin's Program

A 6-month structured half marathon training program designed for Darmin Reddy, a 25-year-old training at Virgin Active Umhlanga, South Africa.

## About This Program

This program is specifically designed for you:
- Build a structured training foundation from the ground up
- Train at Virgin Active Umhlanga (Technogym equipment)
- Access to lap pool, sauna, and steam room facilities
- Detailed video instructions for every exercise
- Is preparing for a half marathon

## Features

- **Rolling Schedule**: 3 strength + 2-3 cardio workouts per week, not tied to specific days
- **Flexible Programming**: Works around your schedule - skip days as needed
- **Technogym Equipment**: Detailed setup instructions for all Virgin Active machines
- **Video Guides**: Every exercise has how-to video links from trusted sources (ATHLEAN-X, Squat University, Jack Hanrahan, MegSquats, Mind Pump TV)
- **Swimming Workouts**: Lap pool workouts included as cardio alternatives
- **Recovery Facilities**: Guidance on using sauna and steam room for recovery
- **Progress Tracking**: Track completed workouts, streaks, and stats with local storage
- **Smart Watch Integration**: Optional fields to log calories, duration, and heart rate data
- **Pre/Post Workout Nutrition**: Meal ideas optimized for a 25-year-old male athlete
- **4 Training Phases**:
  - Weeks 1-6: Foundation (build proper movement patterns, establish running base)
  - Weeks 7-12: Building (increased volume, extended running, free weight introduction)
  - Weeks 13-18: Development (peak strength, continuous running, speed work)
  - Weeks 19-24: Race Preparation (maintain strength, peak running, taper)
- **Mobile-First Design**: Optimized for smartphone with dark mode support
- **Shareable App**: Deploy and access from any device

## Training Philosophy

### Building From Foundation
This program starts with a solid foundation phase to:
- Establish proper strength training movement patterns
- Build running-specific conditioning systematically
- Prevent injury through progressive overload
- Create a sustainable training routine

### Managing Your Schedule
- Keep 1-2 full rest days per week minimum
- Mix running and swimming for cardio variety
- Use sauna/steam room after workouts for recovery (10-15 minutes)
- Listen to your body - rest is part of the program

## Virgin Active Umhlanga Facilities

All exercises include specific Technogym machine settings and setup instructions. Virgin Active Umhlanga offers:
- **Strength Equipment**: Technogym Leg Press, Leg Curl, Leg Extension, Chest Press, Lat Machine, Shoulder Press
- **Cable Machines**: Full cable station for functional movements
- **Cardio Equipment**: Technogym treadmills, bikes, rowers, ellipticals
- **Lap Pool**: 25m pool for swimming workouts
- **Recovery**: Sauna and steam room facilities
- **Video Guides**: Every exercise links to professional instruction videos

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) on your phone or browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy - done!

You can access it via the Vercel URL on any device.

### Option 2: Netlify (Also Free)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Deploy - done!

### Option 3: GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run `npm run deploy`

## Adding to Phone Home Screen

For the best experience, add the app to your home screen:

1. Open the app URL in your mobile browser
2. Tap the Share/Menu button
3. Select "Add to Home Screen"
4. Name it "HM Training" and add

The app will work offline and feel like a native app.

## Data Storage

All progress data is stored locally in the browser's localStorage. To transfer data to a new device:

1. Go to Settings (gear icon)
2. Export your data
3. On the new device, import the exported JSON

## Workout Structure

Each workout follows this pattern:

1. **Warm-up** (8-10 min) - Dynamic stretches and activation
2. **Main Workout** (35-45 min) - Strength or cardio
3. **Stability/Balance** (for strength days) - Running-specific core work
4. **Cool-down** (8-10 min) - Static stretches and foam rolling

## Tech Stack

- React 19
- Vite
- date-fns for date handling
- Lucide React for icons
- Local Storage for persistence

## South African Context

- All nutrition suggestions include options available at local grocery stores (Pick n Pay, Woolworths, Checkers)
- Training accounts for Durban's climate (warm/humid)
- Virgin Active Umhlanga-specific equipment references

## License

Personal use only. Built with love for training preparation.
# darmin-training
