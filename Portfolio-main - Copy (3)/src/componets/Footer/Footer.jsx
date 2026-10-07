import Contours from '../Contours/Contours'

const Footer = () => (
  <footer className="foot">
    <div className="foot-in">
      <Contours color="rgb(255 255 255 / 0.1)" />
      <h2 className="d">Keep pushing<br />forward<i>.</i></h2>
      <nav className="foot-nav d" aria-label="Footer">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="foot-bar">
        <p>© 2026 Your Name. All rights reserved.</p>
        <span>
          <a href="https://instagram.com">inst</a>
          <a href="https://x.com">x</a>
          <a href="https://github.com">github</a>
        </span>
      </div>
    </div>
  </footer>
)

export default Footer
