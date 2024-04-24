import { useState } from 'react';

export default function Contact() {

  // Contact Form Function

  const sendMail = (event) => {
    const contactForm = document.getElementById("contact-form");
    let formData = new FormData();
    formData.append("fname", contactForm.fname.value);
    formData.append("femail", contactForm.femail.value);
    formData.append("fmessage", contactForm.fmessage.value);

    fetch("https://ceciaups.vercel.app/api/send", {
      method: "post",
      mode: 'cors',
      body: formData
    })
      .then(res => {
        if (res.status === 200)
          console.log("Email sent!");
        else if (res.status === 500)
          console.log("Failed to send email!");
      })
      .catch(error => {
        console.log("Failed to call server!");
      });

    return false;
  };

  return (
    <section id="sec-contact" className="reveal">
      <h2>Contact <span className="highlight-text">Me</span></h2>
      <form onSubmit={sendMail} id="contact-form" name="contact-form">
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