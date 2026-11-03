import { useEffect } from 'react'

export default function Loader({ onDone }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      document.body.style.overflow = ''
      onDone()
    }, 3200)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [onDone])

  return (
    <div id="loader">
      <div className="lcurt l1" />
      <div className="lcurt l2" />
      <div className="lcore">
        <div className="lbox">
          <div className="lring" />
          <div className="lN">N</div>
        </div>
        <div className="lname">NEWTON DAKUA</div>
        <div className="lbar"><span /></div>
        <div className="lsub">Loading portfolio…</div>
      </div>
    </div>
  )
}
