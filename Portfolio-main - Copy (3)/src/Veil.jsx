import { useEffect, useState } from 'react'

const Veil = () => {
  const [phase, setPhase] = useState('load') // load -> out -> gone

  useEffect(() => {
    window.scrollTo(0, 0)
    const timers = []
    document.fonts.ready.then(() => {
      timers.push(setTimeout(() => {
        setPhase('out')
        document.body.classList.add('ready')
        timers.push(setTimeout(() => setPhase('gone'), 600))
      }, 900))
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  if (phase === 'gone') return null
  return (
    <div className={`veil ${phase === 'out' ? 'out' : ''}`} role="status" aria-label="Loading">
      <p className="d">Your Name</p>
      <div className="bar"><b /></div>
    </div>
  )
}

export default Veil
