import Reveal from './Reveal'
import { education, certifications } from '../data'

const List = ({ rows }) =>
  rows.map(([a, b]) => (
    <div className="row" key={a}><b>{a}</b>{b}</div>
  ))

export default function Education() {
  return (
    <section id="education">
      <Reveal><div className="eyebrow">Education & Certifications</div><h2>Learning journey</h2></Reveal>
      <div className="edu">
        <Reveal delay={0.1} className="card"><h4>🎓 Education</h4><List rows={education} /></Reveal>
        <Reveal delay={0.2} className="card"><h4>🏅 Certifications</h4><List rows={certifications} /></Reveal>
      </div>
    </section>
  )
}
