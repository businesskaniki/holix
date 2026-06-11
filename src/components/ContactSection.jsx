import React from "react";

const ContactSection = () => {
  return (
    <section className="section contact" id="contact" aria-label="contact">
      <div className="container contact-grid">
        <div className="contact-card">
          <p className="section-subtitle">Contact Us</p>
          <h2 className="h2 contact-title">Get help with your application</h2>
          <p className="section-text">
            Reach out for quick support with visas, immigration, business
            registration, and document services. Our team is ready to help you
            take the next step.
          </p>

          <ul className="contact-details">
            <li>
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
              <a href="tel:+254713628062" className="contact-link">
                +254 713 628 062
              </a>
            </li>
            <li>
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              <a href="mailto:kiptumpeter@gmail.com" className="contact-link">
                kiptumpeter@gmail.com
              </a>
            </li>
            <li>
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
              <p className="contact-link address">
                Pioneer Building, Koinange Street, opposite Smoking Zone, 1st
                floor, Room 216
              </p>
            </li>
          </ul>
        </div>

        <form className="contact-form" action="#" method="post">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" name="name" placeholder="Your name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" placeholder="you@example.com" required />
          </div>

          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" name="subject" placeholder="How can we help?" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell us more about your request" required />
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
