import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__logo">
            <span className="footer__logo-bracket">// </span>rikk.bera
          </span>
          <span className="footer__copy">
            © {year} Rikk Bera — Built with React &amp; ❤️ from Kolkata, India
          </span>
        </div>

        <div className="footer__links">
          <a href="https://github.com/Rikk-Bera"                         target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/rikk-bera-07b023253"      target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.hackerrank.com/profile/rikkbera"          target="_blank" rel="noopener noreferrer">HackerRank</a>
          <a href="mailto:rikkbera@gmail.com">Email</a>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="footer__line" />
    </footer>
  )
}
