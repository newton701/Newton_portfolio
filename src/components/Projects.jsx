import Reveal from './Reveal'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects">
      <Reveal><div className="eyebrow">Projects</div><h2>Featured work</h2></Reveal>
      <div className="proj">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.12} className={`pj ${p.tone}`}>
            <div className="img">{p.icon}</div>
            <div className="b">
              <h4>{p.name}</h4>
              <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              <div className="chips">
                {p.tech.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
