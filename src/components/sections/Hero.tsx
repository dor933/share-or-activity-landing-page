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
          <p className="hero-subtitle">המשחק שמחבר אתכם יחד 💛</p>
          <p className="hero-description">
            משחק קלפים וגלגל מסתובב שעוזר למשפחות לשתף רגשות, לחזק קשרים ולבנות
            תקשורת בריאה — בצורה כיפית ומשחקית שכולם אוהבים!
          </p>
          <div className="hero-buttons">
            <a href="#cta" className="btn-primary">
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
