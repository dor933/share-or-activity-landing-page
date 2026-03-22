import FadeIn from '../ui/FadeIn'

const features = [
  {
    icon: '🧠',
    color: 'pink',
    title: 'וויסות רגשי באופן חוויתי',
    description: 'קלפי הפעילות מלמדים את הילד מיומנויות לוויסות רגשי בצורה חוויתית ומשחקית — לא בחדר הטיפולים, אלא בבית עם המשפחה'
  },
  {
    icon: '🛡️',
    color: 'blue',
    title: 'ארגז כלים להרגעה עצמית',
    description: 'המשחק מעניק לילדים כלים מעשיים להרגעה עצמית — איך אני יכול להרגיע את עצמי, ועכשיו במיוחד בזמן מלחמה'
  },
  {
    icon: '♾️',
    color: 'yellow',
    title: 'כלים שנשארים לכל החיים',
    description: 'המיומנויות שהילדים רוכשים דרך המשחק הן כלים שנשארים איתם לכל החיים — לא רק למשחק אחד'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    color: 'orange',
    title: 'הטמעה עם המשפחה',
    description: 'מיומנויות לוויסות רגשי אפשר להטמיע כבר עם המשפחה ולא רק בחדר הטיפולים — תקשורת והפנמת כלים בסביבה הביתית'
  },
  {
    icon: '🎡',
    color: 'green',
    title: 'גלגל פעילויות',
    description: 'גלגל מסתובב צבעוני עם מגוון פעילויות — שיתוף, משחק מחשבות, נשימות ועוד'
  },
  {
    icon: '✨',
    color: 'purple',
    title: 'פותח בליווי מומחים',
    description: 'פותח על ידי מרכז טובה נר — מומחים בתקשורת משפחתית והפנמת כלים לוויסות רגשי'
  }
]

export default function Features() {
  return (
    <section className="features" id="features">
      <FadeIn>
        <div className="section-header">
          <span className="section-tag">למה כולם אוהבים את המשחק</span>
          <h2 className="section-title">לא סתם עוד משחק — ארגז כלים לוויסות רגשי</h2>
          <p className="section-subtitle">
            תקשורת והפנמת כלים למיומנויות לוויסות רגשי — אפשר להטמיע כבר עם המשפחה ולא רק בחדר הטיפולים
          </p>
        </div>
      </FadeIn>

      <div className="features-grid">
        {features.map((f, i) => (
          <FadeIn key={f.title} delay={i * 100}>
            <div className="feature-card">
              <div className={`feature-icon ${f.color}`}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
