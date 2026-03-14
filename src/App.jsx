import { useEffect, useState } from 'react'
import Loader     from './components/Loader/Loader.jsx'
import Cursor     from './components/Cursor/Cursor.jsx'
import Navbar     from './components/Navbar/Navbar.jsx'
import Hero       from './components/Hero/Hero.jsx'
import About      from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Projects   from './components/Projects/Projects.jsx'
import Certs      from './components/Certs/Certs.jsx'
import Contact    from './components/Contact/Contact.jsx'
import Footer     from './components/Footer/Footer.jsx'
import './styles/global.css'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader done={loaded} />
      <Cursor />
      <div className={`app ${loaded ? 'app--visible' : ''}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certs />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
