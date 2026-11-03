import { useState } from 'react'
import Reveal from './Reveal'
import { profile } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      const t = document.createElement('textarea')
      t.value = profile.email
      document.body.appendChild(t)
      t.select()
      document.execCommand('copy')
      document.body.removeChild(t)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="contact">
      <Reveal className="cbox">
        <div className="eyebrow">Contact</div>
        <h2>Let's build something together</h2>
        <p>Open to backend and full-stack roles. Send me a message and I'll get back to you.</p>
        <div className="cbtns">
          <a className="btn g" href={profile.gmailCompose} target="_blank" rel="noreferrer">✉ {profile.email}</a>
          <button className="btn s" onClick={copyEmail}>{copied ? '✔ Copied!' : '⧉ Copy Email'}</button>
          <a className="btn s" href={profile.linkedin} target="_blank" rel="noreferrer">in LinkedIn</a>
          <a className="btn s" href={profile.github} target="_blank" rel="noreferrer">GH GitHub</a>
        </div>
        <div className="cinfo">
          {profile.phones.map((p) => (
            <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>📞 {p}</a>
          ))}
          <span>📍 {profile.location}</span>
        </div>
      </Reveal>
    </section>
  )
}
