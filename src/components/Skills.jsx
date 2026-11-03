import Reveal from './Reveal'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills">
      <Reveal><div className="eyebrow">Technical Skills</div><h2>Tools I work with</h2></Reveal>
      <div className="skills">
        {skills.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className="sk">
            <h4>{s.icon} {s.title}</h4>
            <div className="chips">
              {s.items.map((it) => (
                <span key={it} className={`chip ${it === s.hot ? 'w' : ''}`}>{it}</span>
              ))}
            </div>
            <div className="bar"><span style={{ '--w': `${s.level}%` }} /></div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
