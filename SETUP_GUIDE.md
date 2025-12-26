# Darmin's Half Marathon Training App - Setup Guide

## What's Been Created

A complete 6-month half marathon training web app customized for **Darmin Reddy** with:

### ✅ Features Included
- **Personalized Training Plan**: 3 strength + 2-3 cardio workouts per week
- **Technogym Equipment Instructions**: Detailed setup for every Virgin Active machine
- **Video Links**: Every exercise has professional instruction videos (ATHLEAN-X, Squat University, etc.)
- **Swimming Workouts**: 3 different swim programs for Virgin Active's 25m lap pool
- **Recovery Guidance**: Sauna and steam room usage recommendations
- **Progress Tracking**: Track workouts, streaks, and stats
- **Nutrition Guide**: Pre/post workout meals with South African options
- **Mobile-Optimized**: Works perfectly on phone, can be added to home screen

### 🏊 Swimming Options Added
1. **Easy Swim** - Low impact aerobic conditioning (800m-1600m)
2. **Swimming Intervals** - High intensity training
3. **Recovery Swim** - Active recovery with multiple strokes

### 💪 All Exercises Include
- Detailed Technogym setup instructions (seat height, weight selection, etc.)
- Professional video instruction links
- Form cues and safety tips
- Virgin Active-specific equipment notes

## How to Share the App with Darmin

### Option 1: Deploy to Vercel (Recommended - Easiest)

1. **Create GitHub Repository**
   ```bash
   cd /Users/sandrasen/Downloads/nephew-half-marathon
   git init
   git add .
   git commit -m "Initial commit - Darmin's training app"
   ```

2. **Push to GitHub**
   - Go to github.com and create a new repository
   - Follow the instructions to push your local repository

3. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub account
   - Select the repository
   - Click "Deploy"
   - Done! You'll get a URL like: `darmin-training.vercel.app`

4. **Share with Darmin**
   - Send him the Vercel URL
   - He can open it on his phone
   - Tell him to "Add to Home Screen" for app-like experience

### Option 2: Deploy to Netlify (Also Free & Easy)

1. Same GitHub steps as above
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect GitHub and select repository
5. Click "Deploy site"
6. Share the Netlify URL with Darmin

### Option 3: Run Locally First (To Test)

```bash
cd /Users/sandrasen/Downloads/nephew-half-marathon
npm run dev
```

- Open browser to `http://localhost:5173`
- Test the app before deploying
- Press Ctrl+C to stop

## Adding to Phone Home Screen

Once deployed, tell Darmin to:

### iPhone:
1. Open the app URL in Safari
2. Tap the Share button (square with arrow)
3. Scroll down, tap "Add to Home Screen"
4. Name it "HM Training"
5. Tap "Add"

### Android:
1. Open the app URL in Chrome
2. Tap the three dots menu
3. Tap "Add to Home Screen"
4. Name it "HM Training"
5. Tap "Add"

The app will work offline and feel like a native app!

## Virgin Active Umhlanga Facilities Included

The app is customized for Virgin Active with:
- Technogym machine setup (Leg Press, Chest Press, Lat Pulldown, etc.)
- 25m lap pool workouts
- Sauna & steam room recovery protocols
- Cardio equipment (treadmills, bikes, rowers)

## Training Structure

### 4 Phases (6 months total):
1. **Foundation (Weeks 1-6)**: Build base, learn movements
2. **Building (Weeks 7-12)**: Increase volume, extend runs
3. **Development (Weeks 13-18)**: Peak strength, continuous running
4. **Race Prep (Weeks 19-24)**: Maintain + taper

### Rolling Schedule:
- Strength A (Lower Body)
- Cardio 1 (Easy Run/Swim)
- Strength B (Upper Body)
- Cardio 2 (Intervals)
- Strength C (Full Body)
- Cardio 3 (Optional - Swimming/Cross-training)

## Key Features for Darmin

- **Video Instructions**: Click any exercise to watch how-to videos
- **Technogym Setup**: Step-by-step machine adjustments
- **Track Progress**: Mark workouts complete, see streaks
- **Nutrition Tips**: Quick meal ideas (SA grocery stores)
- **Swimming Programs**: Progressive lap pool workouts
- **Recovery**: Sauna/steam room guidance

## Customizations Made

✅ Removed soccer references (seasonal)
✅ Added 3 swimming workout types
✅ Personalized for Darmin Reddy
✅ Virgin Active Umhlanga-specific
✅ All exercises have video links
✅ Technogym equipment instructions
✅ South African nutrition options
✅ Sauna & steam room protocols

## Next Steps

1. **Test locally** (optional): `npm run dev`
2. **Deploy to Vercel/Netlify** (recommended)
3. **Share URL with Darmin**
4. **Show him how to add to home screen**
5. **He's ready to train!**

## Support

The app includes:
- Progress tracking (automatically saves to phone)
- Export/import data (to switch devices)
- Dark mode support
- Works offline after first load

---

Built with ❤️ for Darmin Reddy's half marathon journey!
