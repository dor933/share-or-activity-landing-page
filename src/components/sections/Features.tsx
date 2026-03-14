import FadeIn from '../ui/FadeIn'

const features = [
  {
    icon: '💬',
    color: 'pink',
    title: 'שיתוף רגשות',
    description: 'קלפים שמעודדים את הילדים (וגם ההורים!) לשתף מה הם מרגישים בצורה בטוחה ומהנה'
  },
  {
    icon: '🎡',
    color: 'blue',
    title: 'גלגל פעילויות',
    description: 'גלגל מסתובב צבעוני עם מגוון פעילויות — שיתוף, משחק מחשבות, נשימות ועוד'
  },
  {
    icon: '🧠',
    color: 'yellow',
    title: 'פיתוח אינטליגנציה רגשית',
    description: 'המשחק מלמד ילדים לזהות, להבין ולנהל רגשות — מיומנות חיים חיונית'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    color: 'orange',
    title: 'חיזוק הקשר המשפחתי',
    description: 'זמן איכות אמיתי יחד, עם שיחות משמעותיות שמחזקות את הקשר בין כולם'
  },
  {
    icon: '🌈',
    color: 'green',
    title: 'עיצוב מקסים',
    description: 'איורים חמודים וצבעים שמחים שמזמינים את הילדים להצטרף למשחק'
  },
  {
    icon: '✨',
    color: 'purple',
    title: 'פותח בליווי מומחים',
    description: 'פותח על ידי מרכז טובה נר — מומחים בתקשורת משפחתית וטיפול רגשי'
  }
]

export default function Features() {
  return (
    <section className="features" id="features">
      <FadeIn>
        <div className="section-header">
          <span className="section-tag">למה כולם אוהבים את המשחק</span>
          <h2 className="section-title">לא סתם עוד משחק — כלי חינוכי מהנה</h2>
          <p className="section-subtitle">
            משחק שמשלב הנאה עם למידה רגשית, ויוצר רגעים בלתי נשכחים למשפחה
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
