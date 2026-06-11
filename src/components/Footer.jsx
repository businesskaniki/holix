import React from "react";

const Icon = ({ path }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d={path} />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              EagleCore
            </a>

            <p className="footer-text">
              EagleCore is a trusted partner for Kenyan and international
              clients, delivering fast visa, immigration and business support
              with clear guidance and reliable follow-up.
            </p>

            <form
              className="newsletter-form"
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                name="email_address"
                placeholder="Enter your email"
                required
                className="email-field"
              />

              <button type="submit" className="form-btn" aria-label="Subscribe">
                <Icon path="M2 21l21-9L2 3v7l15 2-15 2z" />
              </button>
            </form>

            <div className="footer-socials" aria-hidden="false">
              <a
                href="#"
                className="social-link facebook"
                aria-label="Facebook"
              >
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a
                href="#"
                className="social-link instagram"
                aria-label="Instagram"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="#" className="social-link tiktok" aria-label="TikTok">
                <ion-icon name="logo-tiktok"></ion-icon>
              </a>
            </div>
          </div>

          <nav className="footer-nav">
            <p className="footer-list-title">Our Services</p>
            <ul>
              <li>
                <a className="footer-link">Visa Applications</a>
              </li>
              <li>
                <a className="footer-link">Immigration Support</a>
              </li>
              <li>
                <a className="footer-link">Business Registration</a>
              </li>
            </ul>
          </nav>

          <nav className="footer-nav">
            <p className="footer-list-title">Company</p>
            <ul>
              <li>
                <a className="footer-link">About Company</a>
              </li>
              <li>
                <a className="footer-link">Our Services</a>
              </li>
              <li>
                <a className="footer-link">Contact Us</a>
              </li>
            </ul>
          </nav>

          <div className="footer-contact">
            <p className="footer-list-title">Contact Us</p>
            <address className="contact-block">
              <p className="contact-line">Pioneer Building, Koinange Street</p>
              <p className="contact-line">1st floor, Room 216</p>
            </address>

            <p className="contact-item">
              <ion-icon name="call-outline"></ion-icon>
              <a href="tel:+254713628062" className="contact-link">
                +254 713 628 062
              </a>
            </p>

            <p className="contact-item">
              <ion-icon name="mail-outline"></ion-icon>
              <a href="mailto:kiptumpeter@gmail.com" className="contact-link">
                kiptumpeter@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2026 EagleCore | All Rights Reserved
          </p>

          <ul className="footer-bottom-list">
            
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
