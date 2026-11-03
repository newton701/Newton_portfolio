import Reveal from './Reveal'
import { jobs } from '../data'

export default function Experience() {
  return (
    <section id="experience">
      <Reveal><div className="eyebrow">Experience</div><h2>Where I've worked</h2></Reveal>
      <div className="tl">
        {jobs.map((j, i) => (
          <Reveal key={j.title + j.date} delay={i * 0.15} className="job">
            <div className="top">
              <div>
                <h3>{j.title}</h3>
                <div className="co">{j.company}</div>
              </div>
              <span className={`date ${j.now ? 'now' : ''}`}>{j.date}</span>
            </div>
            <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
