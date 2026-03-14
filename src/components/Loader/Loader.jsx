import { useEffect, useState } from 'react'
import './Loader.css'

export default function Loader({ done }) {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPct(p => {
        const next = p + Math.random() * 15
        if (next >= 100) { clearInterval(interval); return 100 }
        return next
      })
    }, 90)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`loader ${done ? 'loader--done' : ''}`}>
      <div className="loader__inner">
        <div className="loader__logo">
          <span className="loader__bracket">[</span>
          <span className="loader__initials">RB</span>
          <span className="loader__bracket">]</span>
        </div>
        <div className="loader__text">Initializing Portfolio</div>
        <div className="loader__bar-wrap">
          <div className="loader__bar" style={{ width: `${pct}%` }} />
        </div>
        <div className="loader__pct">{Math.floor(pct)}%</div>
      </div>
    </div>
  )
}
