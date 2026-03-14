import FadeIn from '../ui/FadeIn'

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-content">
        <FadeIn>
          <h2>מוכנים לרגעים משפחתיים בלתי נשכחים?</h2>
          <p>
            הזמינו את "שיתוף או פעילות" עכשיו ותתחילו ליצור חיבור אמיתי
            עם הילדים — כבר מהמשחק הראשון!
          </p>
          <a href="#" className="btn-cta">
            🎁 הזמינו עכשיו
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
