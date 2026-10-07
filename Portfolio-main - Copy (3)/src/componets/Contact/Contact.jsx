const Contact = () => (
  <section id="contact" className="sec contact">
    <h2 className="d">Let’s<br />talk<span style={{ color: 'var(--acc)' }}>.</span></h2>
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Name<input name="name" type="text" required /></label>
      <label>Email<input name="email" type="email" required /></label>
      <label>Message<textarea name="message" rows="4" required /></label>
      <button className="cta" type="submit"><span>Send message →</span></button>
    </form>
  </section>
)

export default Contact
