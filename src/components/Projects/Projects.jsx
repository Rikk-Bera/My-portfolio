import { useEffect, useRef } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Projects.css'

const PROJECTS = [
  {
    num:   '01',
    name:  'AgriCare Pro',
    sub:   'AI Plant Disease Detection & Weather Forecast',
    desc:  'End-to-end precision agriculture platform with 86% accuracy across 38+ plant disease classes. Combines ResNet9 CNN diagnosis with live 7-day weather forecasting into one farmer decision-support dashboard.',
    stack: ['PyTorch','ResNet9 CNN','Flask','React-Vite','MongoDB','REST API','JWT','OpenWeather API'],
    link:  'https://github.com/Rikk-Bera/Plant-Disease-Detection-and-weather-analysis',
    accent:'cyan',
  },
  {
    num:   '02',
    name:  'Smart Camera',
    sub:   'Real-Time Object Detection & Face Tracking',
    desc:  'Real-time CV system performing simultaneous multi-class object detection (MobileNet SSD) and face tracking (Haar Cascades). Supports IP camera streaming and hands-free voice command operation.',
    stack: ['OpenCV','MobileNet SSD','Haar Cascades','SpeechRecognition','Pyttsx3','IP Camera'],
    link:  'https://github.com/Rikk-Bera/Smart-Camera',
    accent:'green',
  },
  {
    num:   '03',
    name:  'Soccer Player Re-ID',
    sub:   'YOLOv8 & Roboflow Multi-Object Tracking',
    desc:  'YOLOv8 player re-identification pipeline trained on a custom Roboflow-annotated soccer dataset. Maintains consistent player IDs across occlusions and rapid camera cuts — full ML lifecycle ownership.',
    stack: ['YOLOv8','Roboflow','OpenCV','Python','Custom Dataset','Multi-Object Tracking'],
    link:  'https://github.com/Rikk-Bera/Soccer-Player-Re-identification',
    accent:'purple',
  },
]

function ProjectCard({ project, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('project-card--visible'); obs.unobserve(el) }
    }, { threshold: 0.12 })
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`project-card project-card--${project.accent}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="project-card__top-bar" />
      <div className="project-card__num">{`Project_${project.num}`}</div>
      <div className="project-card__name">{project.name}</div>
      <div className="project-card__sub">{project.sub}</div>
      <p className="project-card__desc">{project.desc}</p>
      <div className="project-card__stack">
        {project.stack.map(t => <span key={t} className="project-card__tag">{t}</span>)}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__link"
      >
        View on GitHub <span className="project-card__arrow">→</span>
      </a>
      <div className="project-card__glow" />
    </div>
  )
}

export default function Projects() {
  const titleRef = useScrollReveal()
  return (
    <section id="projects" className="projects">
      <div className="section-wrap">
        <div className="section-label">03 // Projects</div>
        <h2 ref={titleRef} className="section-title reveal">Featured <em>Work</em></h2>
        <div className="projects__grid">
          {PROJECTS.map((p, i) => <ProjectCard key={p.num} project={p} delay={i * 0.12} />)}
        </div>
      </div>
    </section>
  )
}
