import Reveal from './Reveal'
import { aboutCards } from '../data'

export default function About() {
  return (
    <section id="about">
      <Reveal><div className="eyebrow">About Me</div><h2>Engineer who ships reliable software</h2></Reveal>
      <div className="about">
        <Reveal delay={0.1}>
          <p>I design scalable backend services, implement FHIR-based integrations and improve application stability through debugging, unit testing and performance optimization.</p>
          <p>From IPTV media streaming to healthcare platforms, I work with Agile teams, microservices architecture and PostgreSQL, and recently picked up Flutter for front-end work.</p>
          <a href="#contact" className="btn p" style={{ marginTop: 8 }}>Let's Talk</a>
        </Reveal>
        <div className="cards">
          {aboutCards.map(([icon, title, text], i) => (
            <Reveal key={title} delay={0.15 + i * 0.1} className="card">
              <i>{icon}</i><h4>{title}</h4><p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
