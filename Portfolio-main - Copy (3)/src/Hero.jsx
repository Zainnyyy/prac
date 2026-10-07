import Contours from '../Contours/Contours'

const Hero = () => (
  <section id="top" className="sec hero">
    <Contours color="#dfe5e9" lineW={1.2} />
    <p className="did rise" style={{ '--i': 0 }}>developer_001</p>
    <h1 className="d rise" style={{ '--i': 1 }}>Your Name</h1>
    <ul className="meta rise" style={{ '--i': 2 }}>
      <li>✦ Frontend developer</li>
      <li>✦ Based in Cebu, PH</li>
      <li>✦ Open for projects 2026</li>
    </ul>
    <div className="pn rise" style={{ '--i': 3 }}>
      <i /><i /><i /><i />
      <p className="eb">Career stats</p>
      <dl className="stats">
        <div><dt>Years</dt><dd>3</dd></div>
        <div><dt>Projects</dt><dd>24</dd></div>
        <div><dt>Clients</dt><dd>11</dd></div>
      </dl>
    </div>
    <a className="cta rise" style={{ '--i': 4 }} href="#work"><span>View my work →</span></a>
  </section>
)

export default Hero
