import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = e => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    let raf
    const animate = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      if (dot.current)  { dot.current.style.transform  = `translate(${mx}px, ${my}px) translate(-50%,-50%)` }
      if (ring.current) { ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)` }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const grow = () => {
      dot.current?.classList.add('cursor--big')
      ring.current?.classList.add('cursor-ring--big')
    }
    const shrink = () => {
      dot.current?.classList.remove('cursor--big')
      ring.current?.classList.remove('cursor-ring--big')
    }
    document.querySelectorAll('a, button, .project-card, .cert-card, .skill-tag').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
