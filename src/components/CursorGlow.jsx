import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const move = (e) => {
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return <div id="glow" ref={ref} />
}
