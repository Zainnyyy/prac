const links = ['About', 'Services', 'Work', 'Contact']

const Navbar = () => (
  <header className="nav">
    <a href="#top" className="logo">PORTFOLIO</a>
    <nav aria-label="Primary">
      <ul>
        {links.map((l) => (
          <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
        ))}
      </ul>
    </nav>
    <a href="#contact" style={{ fontWeight: 700 }}>[ Hire me → ]</a>
  </header>
)

export default Navbar
