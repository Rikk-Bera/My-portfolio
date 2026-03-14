import { useEffect, useRef, useState } from 'react'
import rikkPhoto from '../../assets/rikk.jpg'
import './Hero.css'

const PHRASES = [
  'Building AI Systems.',
  'Computer Vision Engineer.',
  'Full-Stack Developer.',
  'Deep Learning Enthusiast.',
  'Open Source Contributor.',
]

const STATS = [
  { value: 3,  suffix: '',  label: 'Live Projects' },
  { value: 2,  suffix: '',  label: 'Internships' },
  { value: 86, suffix: '%', label: 'CNN Accuracy' },
  { value: 38, suffix: '+', label: 'Disease Classes' },
]

function useTyping(phrases) {
  const [text, setText] = useState('')
  const [phaseIdx, setPhaseIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phaseIdx]
    const speed = deleting ? 38 : 75
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), 1600)
      } else {
        const next = text.slice(0, -1)
        setText(next)
        if (next === '') { setDeleting(false); setPhaseIdx(i => (i + 1) % phrases.length) }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, phaseIdx, phrases])

  return text
}

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let cur = 0
        const step = value / 45
        const t = setInterval(() => {
          cur = Math.min(cur + step, value)
          setCount(Math.floor(cur))
          if (cur >= value) clearInterval(t)
        }, 28)
      }
    }, { threshold: 0.5 })
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Hero() {
  const typed = useTyping(PHRASES)
  const [imgError, setImgError] = useState(false)

  return (
    <section id="hero" className="hero">
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__inner">
        {/* LEFT */}
        <div className="hero__content">
          <div className="hero__tag">
            <span className="hero__tag-dot" />
            AI / ML Engineer &amp; Software Developer
          </div>

          <h1 className="hero__name">
            <span className="hero__name-line1">Rikk</span>
            <span className="hero__name-line2">Bera.</span>
          </h1>

          <div className="hero__typing">
            <span className="hero__prompt">&gt;&nbsp;</span>
            <span className="hero__typed">{typed}</span>
            <span className="hero__cursor-blink">|</span>
          </div>

          <p className="hero__desc">
            Final-year B.Tech Computer Science (AI &amp; ML) student specializing in{' '}
            <strong>deep learning, computer vision &amp; full-stack AI development</strong>.
            Building intelligent systems that solve real problems — from 38-class disease
            classifiers to real-time multi-object tracking pipelines.
          </p>

          <div className="hero__btns">
            <a href="#projects" className="btn-primary">View Projects ↓</a>
            <a href="#contact"  className="btn-outline">Get In Touch</a>
          </div>

          <div className="hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="hero__stat">
                <div className="hero__stat-value">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — PHOTO */}
        <div className="hero__photo-wrap">
          <div className="hero__photo-glow" />
          <div className="hero__photo-frame">
            <div className="hero__corner hero__corner--tl" />
            <div className="hero__corner hero__corner--tr" />
            <div className="hero__corner hero__corner--bl" />
            <div className="hero__corner hero__corner--br" />

            {imgError ? (
              <div className="hero__photo-fallback">
                <div className="hero__photo-fallback-label">[ PHOTO ]</div>
                <div className="hero__photo-fallback-initials">RB</div>
              </div>
            ) : (
              <img
                src={rikkPhoto}
                alt="Rikk Bera"
                className="hero__photo-img"
                onError={() => setImgError(true)}
              />
            )}

            <div className="hero__photo-overlay" />
          </div>

          <div className="hero__badge">
            <div className="hero__badge-dot" />
            <div>
              <div className="hero__badge-title">Available for Work</div>
              <div className="hero__badge-sub">Open to AI/ML Roles</div>
            </div>
          </div>

          {/* Floating tech pills */}
          <div className="hero__pill hero__pill--1">PyTorch</div>
          <div className="hero__pill hero__pill--2">YOLOv8</div>
          <div className="hero__pill hero__pill--3">React</div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
