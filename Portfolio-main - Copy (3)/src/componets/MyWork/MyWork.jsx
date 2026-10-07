const work = [
  ['2026', 'Project one', 'Short description of what you built and the result.'],
  ['2025', 'Project two', 'Short description of what you built and the result.'],
  ['2024', 'Project three', 'Short description of what you built and the result.'],
]

const MyWork = () => (
  <section id="work" className="sec light">
    <h2 className="hd d" style={{ color: 'var(--fg)' }}>My<br />work<i style={{ color: 'var(--acc)' }}>.</i></h2>
    <div className="grid">
      {work.map(([y, t, p]) => (
        <article className="card" key={t}>
          <p className="yr">{y}</p>
          <h3 style={{ color: 'var(--fg)' }}>{t}</h3>
          <p>{p}</p>
        </article>
      ))}
    </div>
  </section>
)

export default MyWork
