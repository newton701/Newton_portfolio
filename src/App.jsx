import { useCallback, useState } from 'react'
import Loader from './components/Loader'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)
  const done = useCallback(() => setLoading(false), [])

  return (
    <>
      {loading && <Loader onDone={done} />}
      <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} Newton Dakua · Built with React</footer>
    </>
  )
}
