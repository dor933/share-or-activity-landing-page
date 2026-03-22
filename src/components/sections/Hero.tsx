export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            חדש! משחק משפחתי מיוחד
          </div>
          <h1 className="hero-title">
            <span className="highlight">שיתוף</span> או{' '}
            <span className="highlight">פעילות</span>
          </h1>
          <p className="hero-subtitle">כלים לכל החיים — כבר מהמשחק הראשון 💛</p>
          <p className="hero-description">
            קלפי הפעילות מלמדים את הילד באופן חוויתי מיומנויות לוויסות רגשי,
            ומעניקים ארגז כלים להטמעה חוויתית — איך אני יכול להרגיע את עצמי,
            ועכשיו במיוחד בזמן מלחמה. כלים שנשארים לכל החיים!
          </p>
          <div className="hero-buttons">
            <a href="https://private.invoice4u.co.il/newsite/he/clearing/public/i4u-clearing?ProductGuid=3eee5fd4-0be7-4ed8-8a84-81a219eb3d8d" target="_blank" rel="noopener noreferrer" className="btn-primary">
              🛒 להזמנה עכשיו
            </a>
            <a href="#how-it-works" className="btn-secondary">
              ▶ איך זה עובד?
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-glow"></div>
          <img src="/game-hero.jpeg" alt="משחק שיתוף או פעילות" className="hero-image" />

          <div className="hero-floating-card card-1">
            <span className="card-emoji">🎯</span>
            <span>מתאים לגילאי 4+</span>
          </div>
          <div className="hero-floating-card card-2">
            <span className="card-emoji">👨‍👩‍👧‍👦</span>
            <span>2-6 שחקנים</span>
          </div>
        </div>
      </div>
    </section>
  )
}
