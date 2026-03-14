import FadeIn from '../ui/FadeIn'

const steps = [
  {
    num: '1',
    title: 'סובבו את הגלגל',
    desc: 'כל שחקן בתורו סובב את הגלגל הצבעוני וממתין לראות על איזה משבצת הוא נוחת'
  },
  {
    num: '2',
    title: 'הרימו קלף',
    desc: 'בהתאם לצבע שעליו נחתתם — הרימו קלף שיתוף או קלף פעילות מתאים'
  },
  {
    num: '3',
    title: 'שתפו ושחקו!',
    desc: 'קראו את הקלף בקול, שתפו את המשפחה וצחקו, התרגשו והתחברו יחד!'
  }
]

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <FadeIn>
        <div className="section-header">
          <span className="section-tag">פשוט וכיף</span>
          <h2 className="section-title">איך משחקים?</h2>
          <p className="section-subtitle">
            שלושה צעדים פשוטים וכל המשפחה נהנית
          </p>
        </div>
      </FadeIn>

      <div className="steps-container">
        {steps.map((s, i) => (
          <FadeIn key={s.num} delay={i * 150} className="slide-right">
            <div className="step">
              <div className="step-number">{s.num}</div>
              <div className="step-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
