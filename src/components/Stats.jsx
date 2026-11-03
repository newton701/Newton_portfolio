import { stats } from '../data'
import { useCountUp, useInView } from '../hooks'

function Stat({ end, suffix, label, delay }) {
  const [ref, inView] = useInView(0.4)
  const value = useCountUp(end, inView)
  return (
    <div ref={ref} className={`stat reveal ${inView ? 'in' : ''}`} style={{ '--d': `${delay}s` }}>
      <b>{value}{suffix}</b>
      <p>{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats-sec">
      <div className="stats">
        {stats.map((s, i) => <Stat key={s.label} {...s} delay={i * 0.1} />)}
      </div>
    </section>
  )
}
