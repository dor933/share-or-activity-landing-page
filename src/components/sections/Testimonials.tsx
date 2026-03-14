import FadeIn from '../ui/FadeIn'

const testimonials = [
  {
    stars: 5,
    text: 'המשחק הזה שינה לנו את ערבי שישי! הילדים פותחים את הלב ומשתפים דברים שלא חשבתי שאשמע מהם. ממליצה בחום!',
    name: 'מיכל כ.',
    role: 'אמא ל-3 ילדים',
    avatar: 'av-1',
    emoji: '👩'
  },
  {
    stars: 5,
    text: 'כמטפלת משפחתית, אני משתמשת במשחק בפגישות. הוא פותח דלתות לשיחות עמוקות בצורה טבעית ומהנה.',
    name: 'ד"ר שרה ל.',
    role: 'פסיכולוגית ילדים',
    avatar: 'av-2',
    emoji: '👩‍⚕️'
  },
  {
    stars: 5,
    text: 'הבן שלי בן 5 מבקש לשחק כל יום! העיצוב יפהפה והקלפים מותאמים מעולה. רואים שפותח עם הרבה מחשבה.',
    name: 'אורי ד.',
    role: 'אבא לילד אחד',
    avatar: 'av-3',
    emoji: '👨'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <FadeIn>
        <div className="section-header">
          <span className="section-tag">מה אומרים עלינו</span>
          <h2 className="section-title">משפחות שכבר משחקות</h2>
          <p className="section-subtitle">
            הצטרפו למאות משפחות שכבר מרגישות את השינוי
          </p>
        </div>
      </FadeIn>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 150}>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {'★'.repeat(t.stars)}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className={`testimonial-avatar ${t.avatar}`}>
                  {t.emoji}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
