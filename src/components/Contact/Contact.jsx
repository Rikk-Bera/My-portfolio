import { useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Contact.css'

const LINKS = [
  { icon: '✉', label: 'rikkbera@gmail.com',                          href: 'mailto:rikkbera@gmail.com' },
  { icon: 'in', label: 'linkedin.com/in/rikk-bera-07b023253',        href: 'https://www.linkedin.com/in/rikk-bera-07b023253' },
  { icon: 'gh', label: 'github.com/Rikk-Bera',                       href: 'https://github.com/Rikk-Bera' },
  { icon: '⬡',  label: 'rikk-bera.github.io/My-portfolio',           href: 'https://rikk-bera.github.io/My-portfolio/' },
  { icon: 'HR', label: 'hackerrank.com/rikkbera',                     href: 'https://www.hackerrank.com/profile/rikkbera' },
]

export default function Contact() {
  const titleRef  = useScrollReveal()
  const leftRef   = useScrollReveal(0.1)
  const rightRef  = useScrollReveal(0.1)

  const [status, setStatus] = useState('idle') // idle | sent

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('sent')
    setTimeout(() => { setStatus('idle'); e.target.reset() }, 3500)
  }

  return (
    <section id="contact" className="contact">
      <div className="section-wrap">
        <div className="section-label">05 // Contact</div>
        <h2 ref={titleRef} className="section-title reveal">Let's <em>Connect</em></h2>

        <div className="contact__grid">
          {/* LEFT */}
          <div ref={leftRef} className="contact__left reveal">
            <p className="contact__intro">
              I'm actively looking for <strong>AI/ML Engineer</strong> and{' '}
              <strong>Software Developer</strong> opportunities.
              Whether you have a role, a project, or just want to talk tech — my inbox is always open.
            </p>

            <div className="contact__links">
              {LINKS.map(l => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="contact__link">
                  <span className="contact__link-icon">[{l.icon}]</span>
                  <span className="contact__link-label">{l.label}</span>
                  <span className="contact__link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div ref={rightRef} className="contact__right reveal" style={{ transitionDelay: '0.15s' }}>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label className="contact__label">Your Name</label>
                <input className="contact__input" type="text" placeholder="John Doe" required />
              </div>
              <div className="contact__field">
                <label className="contact__label">Email Address</label>
                <input className="contact__input" type="email" placeholder="john@company.com" required />
              </div>
              <div className="contact__field">
                <label className="contact__label">Subject</label>
                <input className="contact__input" type="text" placeholder="Job Opportunity / Collaboration" />
              </div>
              <div className="contact__field">
                <label className="contact__label">Message</label>
                <textarea className="contact__textarea" placeholder="Hey Rikk, I'd love to discuss..." required />
              </div>
              <button type="submit" className={`contact__submit ${status === 'sent' ? 'contact__submit--sent' : ''}`}>
                {status === 'sent' ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
