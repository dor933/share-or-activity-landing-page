import FadeIn from '../ui/FadeIn'

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-content">
        <FadeIn>
          <h2>מוכנים להטמיע כלים לוויסות רגשי עם המשפחה?</h2>
          <p>
            הזמינו את "שיתוף או פעילות" עכשיו — ארגז כלים חוויתי
            שנשאר לכל החיים, להרגעה עצמית ותקשורת משפחתית אמיתית!
          </p>
          <a href="https://private.invoice4u.co.il/newsite/he/clearing/public/i4u-clearing?ProductGuid=3eee5fd4-0be7-4ed8-8a84-81a219eb3d8d" target="_blank" rel="noopener noreferrer" className="btn-cta">
            🎁 הזמינו עכשיו
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
