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
        <div className="container">
          {/* BRAND */}
          <div className="footer-brand">
            <a href="#" className="logo">
              EagleCore
            </a>

            <p className="footer-text">
              EagleCore is a trusted partner for Kenyan and international
              clients, delivering fast visa, immigration and business support
              with clear guidance and reliable follow-up.
            </p>

            <form className="newsletter-form">
              <input
                type="email"
                name="email_address"
                placeholder="Enter your email"
                required
                className="email-field"
              />

              <button type="submit" className="form-btn">
                <Icon path="M2 21l21-9L2 3v7l15 2-15 2z" />
              </button>
            </form>
          </div>

          {/* SERVICES */}
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Our Services</p>
            </li>
            <li><a className="footer-link">Visa Applications</a></li>
            <li><a className="footer-link">Immigration Support</a></li>
            <li><a className="footer-link">Business Registration</a></li>
            <li><a className="footer-link">Passport Services</a></li>
            <li><a className="footer-link">Civil Registration</a></li>
          </ul>

          {/* COMPANY */}
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li><a className="footer-link">About Company</a></li>
            <li><a className="footer-link">Our Services</a></li>
            <li><a className="footer-link">Contact Us</a></li>
          </ul>

          {/* CONTACT INFO */}
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Us</p>
            </li>

            <li className="footer-item">
              <Icon path="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              <address className="contact-link address">
                Pioneer Building, Koinange Street, opposite Smoking Zone, 1st
                floor, Room 216
              </address>
            </li>

            <li className="footer-item">
              <Icon path="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2z" />
              <a href="tel:+254713628062" className="contact-link">
                +254 713 628 062
              </a>
            </li>

            <li className="footer-item">
              <Icon path="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
              <a href="mailto:kiptumpeter@gmail.com" className="contact-link">
                kiptumpeter@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2026 EagleCore | All Rights Reserved
          </p>

          <ul className="footer-bottom-list">
            <li><a className="footer-bottom-link">Privacy Policy</a></li>
            <li><a className="footer-bottom-link">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;