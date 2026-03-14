import { useEffect, useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Certs.css'

const CERTS = [
  {
    icon:   '🤖',
    name:   'Machine Learning — Fundamentals of Python ML',
    issuer: 'Udemy',
    color:  'cyan',
    link:   'https://www.udemy.com/certificate/UC-93b4a704-73da-4b24-9a57-12881a69ff47/',
  },
  {
    icon:   '🌐',
    name:   'Cloud-Based MERN Stack Development with AI Integration',
    issuer: 'Euphoria GenX (Industrial Training)',
    color:  'green',
    link:   'https://drive.google.com/file/d/1fl4UgsP94ZRrVbItgl-jg0J9YVO-5hWo/view?usp=drive_link',
  },
  {
    icon:   '🔬',
    name:   'Artificial Intelligence with Python',
    issuer: 'Coincent (Microsoft-Coincent)',
    color:  'purple',
    link:   'https://drive.google.com/file/d/1BF_UgBxdh67EMIa6ofUszkhcmNVmeHvi/view?usp=drive_link',
  },
  {
    icon:   '💻',
    name:   'CSS, Bootstrap, JavaScript & Python Stack Course',
    issuer: 'Udemy',
    color:  'cyan',
    link:   'https://www.udemy.com/certificate/UC-d402014e-5fcd-4bfb-b60b-58567d684078/',
  },
  {
    icon:   '🔒',
    name:   'Foundations of Cybersecurity',
    issuer: 'Coursera — Google',
    color:  'green',
    link:   null,
  },
  {
    icon:   '🏆',
    name:   'Runner-Up — Smart India Hackathon 2024',
    issuer: 'Internal · National Innovation Competition',
    color:  'purple',
    link:   null,
  },
]

function CertCard({ cert, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('cert-card--visible'); obs.unobserve(el) }
    }, { threshold: 0.12 })
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const inner = (
    <>
      <div className="cert-card__icon">{cert.icon}</div>
      <div className="cert-card__name">{cert.name}</div>
      <div className={`cert-card__issuer cert-card__issuer--${cert.color}`}>{cert.issuer}</div>
      {cert.link && <div className="cert-card__view">View Certificate →</div>}
    </>
  )

  return cert.link ? (
    <a
      ref={ref}
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`cert-card cert-card--${cert.color}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {inner}
    </a>
  ) : (
    <div
      ref={ref}
      className={`cert-card cert-card--${cert.color}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {inner}
    </div>
  )
}

export default function Certs() {
  const titleRef = useScrollReveal()
  return (
    <section id="certs" className="certs">
      <div className="section-wrap">
        <div className="section-label">04 // Credentials</div>
        <h2 ref={titleRef} className="section-title reveal"><em>Certifications</em> & Awards</h2>
        <div className="certs__grid">
          {CERTS.map((c, i) => <CertCard key={c.name} cert={c} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  )
}
