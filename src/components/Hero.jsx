import { profile } from '../data'
import { useTyping } from '../hooks'

export default function Hero() {
  const typed = useTyping(profile.roles)
  const base = import.meta.env.BASE_URL

  return (
    <section id="home" className="hero">
      <div>
        <span className="tag rise" style={{ '--d': 0 }}>
          <span className="dot" /> Available for new opportunities
        </span>

        <h1 className="rise" style={{ '--d': 1 }}>
          <span className="hi">Hi, I'm</span>{' '}
          <em className="nm">
            {profile.firstName.split('').map((ch, i) => (
              <span key={i} style={{ '--i': i }}>{ch}</span>
            ))}
          </em>
        </h1>

        <div className="role rise" style={{ '--d': 2 }}>
          I build <b>{typed}</b><span className="cursor" />
        </div>

        <p className="lead rise" style={{ '--d': 3 }}>{profile.intro}</p>

        <div className="cta rise" style={{ '--d': 4 }}>
          <a href="#projects" className="btn p">View My Work →</a>
          <a href={`${base}${profile.resume}`} download className="btn s">Download Resume ⬇</a>
        </div>

        <div className="socials rise" style={{ '--d': 5 }}>
          <a className="soc" href={profile.linkedin} target="_blank" rel="noreferrer"><i>in</i> LinkedIn</a>
          <a className="soc" href={profile.github} target="_blank" rel="noreferrer"><i>GH</i> GitHub · {profile.githubName}</a>
          <a className="soc" href={profile.gmailCompose} target="_blank" rel="noreferrer"><i>✉</i> Email</a>
        </div>
      </div>

      <div className="photo-wrap pop" style={{ '--d': 2 }}>
        <div className="ring" />
        <img className="photo" src={`${base}photo.png`} alt="Newton Dakua" />
        <div className="float f1"><b>3+ yrs</b>Experience</div>
        <div className="float f2"><b>FHIR</b>Healthcare APIs</div>
        <div className="float f3">☕ Java 17 · 🍃 Spring Boot</div>
      </div>
    </section>
  )
}
