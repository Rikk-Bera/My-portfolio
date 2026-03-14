import { useEffect, useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Experience.css'

const JOBS = [
  {
    period:  'Nov 2024 – Feb 2025',
    role:    'Full-Stack AI Developer Intern',
    company: 'Euphoria GenX',
    sub:     'Cloud-Based MERN Stack & AI Integration · West Bengal, India',
    color:   'cyan',
    points: [
      { bold: 'Architected and deployed AgriCare Pro', rest: ' as sole developer — an end-to-end AI platform integrating PyTorch ResNet9 CNN with React-Vite frontend and MongoDB, delivered in 4 months.' },
      { bold: 'Reduced disease diagnosis time from hours to under 3 seconds', rest: ' by engineering a 38-class image classification REST API with Flask + JWT Authentication.' },
      { bold: 'Shipped a 7-day precision weather forecast module', rest: ' (OpenWeather API) alongside AI predictions into one unified farmer decision-support dashboard.' },
    ],
  },
  {
    period:  'Aug 2024 – Sep 2024',
    role:    'AI/ML Engineer Intern',
    company: 'Coincent.ai (Microsoft-Coincent)',
    sub:     'Artificial Intelligence Using Python · West Bengal, India',
    color:   'purple',
    points: [
      { bold: 'Designed, trained and evaluated supervised ML models', rest: ' using scikit-learn on real-world datasets under a Microsoft-affiliated AI program, selected from a competitive state-level pool.' },
      { bold: 'Built an end-to-end Vision Transformer (ViT) image classification pipeline', rest: ', covering data preprocessing, architecture design, training, validation and inference.' },
    ],
  },
]

function ExpItem({ job, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('exp__item--visible'); obs.unobserve(el) }
    }, { threshold: 0.15 })
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="exp__item" style={{ transitionDelay: `${delay}s` }}>
      <div className={`exp__dot exp__dot--${job.color}`} />
      <div className="exp__meta">{job.period}</div>
      <div className="exp__role">{job.role}</div>
      <div className="exp__company">{job.company}</div>
      <div className="exp__sub">{job.sub}</div>
      <ul className="exp__points">
        {job.points.map((p, i) => (
          <li key={i}>
            <strong>{p.bold}</strong>{p.rest}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  const titleRef = useScrollReveal()
  return (
    <section id="experience" className="experience">
      <div className="section-wrap">
        <div className="section-label">02 // Experience</div>
        <h2 ref={titleRef} className="section-title reveal">Work <em>Experience</em></h2>
        <div className="exp__timeline">
          {JOBS.map((j, i) => <ExpItem key={i} job={j} delay={i * 0.15} />)}
        </div>
      </div>
    </section>
  )
}
