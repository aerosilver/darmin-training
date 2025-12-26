import { Play, Target, Calendar, Heart, Sparkles, MapPin, Clock } from 'lucide-react';

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-bg-pattern"></div>

      <div className="welcome-content">
        <div className="welcome-badge">
          <Sparkles size={14} />
          <span>Personalised Training</span>
        </div>

        <div className="welcome-header">
          <div className="brand-logo">
            <span className="logo-icon">🏃‍♂️</span>
          </div>
          <h1>Half Marathon</h1>
          <p className="subtitle">Training Program</p>
        </div>

        <div className="personalised-for">
          <span className="label">Designed for</span>
          <span className="name">Darmin Reddy</span>
        </div>

        <div className="program-card">
          <div className="program-header">
            <h2>6-Month Program</h2>
            <span className="program-badge">Foundation to Race Day</span>
          </div>

          <div className="program-features">
            <div className="feature">
              <div className="feature-icon">
                <Target size={20} />
              </div>
              <div className="feature-text">
                <span className="feature-title">Balanced Training</span>
                <span className="feature-desc">3 Strength + 2-3 Cardio weekly</span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <Calendar size={20} />
              </div>
              <div className="feature-text">
                <span className="feature-title">Rolling Schedule</span>
                <span className="feature-desc">Flexible for busy schedules</span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <Heart size={20} />
              </div>
              <div className="feature-text">
                <span className="feature-title">Flexible Schedule</span>
                <span className="feature-desc">Skip & resume anytime</span>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <Clock size={20} />
              </div>
              <div className="feature-text">
                <span className="feature-title">60-Min Sessions</span>
                <span className="feature-desc">Complete guided workouts</span>
              </div>
            </div>
          </div>
        </div>

        <div className="journey-section">
          <h3>Your Journey</h3>
          <div className="phase-timeline">
            <div className="phase-item">
              <div className="phase-number">1</div>
              <div className="phase-info">
                <span className="phase-name">Foundation</span>
                <span className="phase-weeks">Weeks 1-6</span>
              </div>
            </div>
            <div className="phase-connector"></div>
            <div className="phase-item">
              <div className="phase-number">2</div>
              <div className="phase-info">
                <span className="phase-name">Building</span>
                <span className="phase-weeks">Weeks 7-12</span>
              </div>
            </div>
            <div className="phase-connector"></div>
            <div className="phase-item">
              <div className="phase-number">3</div>
              <div className="phase-info">
                <span className="phase-name">Development</span>
                <span className="phase-weeks">Weeks 13-18</span>
              </div>
            </div>
            <div className="phase-connector"></div>
            <div className="phase-item highlight">
              <div className="phase-number">4</div>
              <div className="phase-info">
                <span className="phase-name">Race Prep</span>
                <span className="phase-weeks">Weeks 19-24</span>
              </div>
            </div>
          </div>
        </div>

        <div className="goal-card">
          <div className="goal-header">
            <MapPin size={20} />
            <span>Training Location</span>
          </div>
          <h3 className="goal-race">Virgin Active Umhlanga</h3>
          <p className="goal-location">Durban, South Africa</p>
          <p className="goal-year">Technogym Equipment + Lap Pool</p>
        </div>

        <button className="start-btn" onClick={onStart}>
          <span>Begin Your Journey</span>
          <Play size={20} />
        </button>

        <p className="disclaimer">
          All exercises include video guides & Technogym setup instructions.
          <br />Swimming, running & strength training for complete preparation.
        </p>
      </div>
    </div>
  );
}

export default WelcomeScreen;
