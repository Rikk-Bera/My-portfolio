import useScrollReveal from '../../hooks/useScrollReveal'
import './About.css'

const SKILLS = [
  { label: 'ML / Deep Learning', tags: ['PyTorch','TensorFlow','Keras','scikit-learn','YOLOv8','ResNet9','ViT','OpenCV','Roboflow','CNN'] },
  { label: 'Backend & APIs',     tags: ['Python','Flask','Node.js','Express.js','REST API','JWT','MongoDB','SQL'] },
  { label: 'Frontend',           tags: ['React','Vite','JavaScript','HTML5','CSS3','MERN Stack'] },
  { label: 'Data & Tools',       tags: ['NumPy','Pandas','Matplotlib','Seaborn','GitHub','Firebase','VS Code'] },
]

export default function About() {
  const titleRef = useScrollReveal()
  const leftRef  = useScrollReveal(0.1)
  const rightRef = useScrollReveal(0.1)

  return (
    <section id="about" className="about">
      <div className="section-wrap">
        <div className="section-label">01 // About</div>
        <h2 ref={titleRef} className="section-title reveal">Who I <em>Am</em></h2>

        <div className="about__grid">
          <div ref={leftRef} className="about__left reveal">
            <p>
              I'm <strong>Rikk Bera</strong>, an AI/ML engineering student from Kolkata, India,
              in my final year at Future Institute of Technology (MAKAUT). I sit at the intersection
              of <strong>machine intelligence and software engineering</strong> — training neural
              networks by day, shipping full-stack web apps by night.
            </p>
            <p>
              My toolkit spans computer vision (YOLOv8, ResNet9, MobileNet SSD), deep learning
              pipelines, and production MERN applications. I don't just prototype — I build
              <strong> complete, deployed systems</strong> with real-world utility, like a 38-class
              plant disease classifier that cuts diagnosis from hours to 3 seconds.
            </p>
            <p>
              Outside of code: drawing, leadership, and anything that challenges the status quo.
              I believe in learning fast, building faster, and making things that actually matter.
            </p>

            <div className="about__highlights">
              {[
                'B.Tech CSE (AI & ML) — FIT, MAKAUT · Sep 2022 – Aug 2026',
                'Runner-Up, Smart India Hackathon 2024',
                '4-Star Python & 3-Star C on HackerRank',
                'Coding Coordinator — College Technical Club',
              ].map(h => (
                <div key={h} className="about__highlight">
                  <span className="about__highlight-arrow">▸</span>
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="about__right reveal" style={{ transitionDelay: '0.15s' }}>
            {SKILLS.map(s => (
              <div key={s.label} className="about__skill-card">
                <div className="about__skill-label">{s.label}</div>
                <div className="about__skill-tags">
                  {s.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
