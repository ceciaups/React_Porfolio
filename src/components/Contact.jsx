export default function Contact() {

  // Contact Form Function
  function sendMail() {
  }

  return (
    <section id="sec-contact" className="reveal">
      <h2>Contact <span className="highlight-text">Me</span></h2>
      <form action="#" onSubmit={sendMail} id="contact-form" name="contact-form">
        <div className="form-input">
          <input type="text" id="form-name" className="form-content" name="fname" placeholder="Name"></input>
          <span className="tooltip">Please input your name here.</span>
        </div>
        <div className="form-input">
          <input type="email" id="form-email" className="form-content" name="femail" placeholder="Email"></input>
          <span className="tooltip">Please input your email here.</span>
        </div>
        <div className="form-input">
          <textarea id="form-message" className="form-content" name="fmessage" placeholder="Message"></textarea>
          <span className="tooltip">Please input your message here.</span>
        </div>
        <button type="submit" id="form-submit" className="button">Send Message</button>
      </form>
    </section>
  )
}