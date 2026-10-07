const services = [
  ['Web design', 'Layouts and visual systems that look sharp and read clearly on every screen.'],
  ['Development', 'React and Vite builds that load quickly and stay easy to maintain.'],
  ['Branding', 'Logos, type and colour that give your project a recognisable identity.'],
]

const Services = () => (
  <section id="services" className="sec dark">
    <h2 className="hd d">My<br />services<i>.</i></h2>
    <div className="grid">
      {services.map(([t, p]) => (
        <article className="card" key={t}>
          <p className="eb">Service</p>
          <h3>{t}</h3>
          <p>{p}</p>
        </article>
      ))}
    </div>
  </section>
)

export default Services
