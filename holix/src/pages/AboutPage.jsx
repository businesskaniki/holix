import React from "react";
import aboutimg from '../assets/images/about-banner.png'

const AboutPage = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <img
            src={aboutimg}
            width="802"
            height="654"
            loading="lazy"
            alt="about banner"
            className="w-100"
          />
        </figure>

        <div className="about-content">
          <h2 className="h2-sm section-title">
            <strong>Your Trusted Service Shortcut</strong>
          </h2>

          <p className="section-text">
            Eaglecore Consultants Limited makes KRA, NTSA, company registration
            and immigration services simple and fast. We handle the paperwork so
            your applications are done right the first time.
          </p>

          <p className="section-text">
            From local government filings to visas and work permits, our support
            is reliable, efficient and built on professionalism.
          </p>

          <ul className="about-list">
            <li className="has-before">
              Company name search, registration and KRA/eTIMS support
            </li>

            <li className="has-before">
              Passport applications, certificates, renewals and TSC processing
            </li>

            <li className="has-before">
              Visa, work permit, student visa and foreign immigration
              consultation
            </li>
          </ul>

          <div className="btn-group">
            <a href="#" className="btn btn-primary">
              Know More
            </a>

            <button className="flex-btn">
              <div className="btn-icon">
                <ion-icon name="medal-outline" aria-hidden="true"></ion-icon>
              </div>

              <span className="span">10+ Years Experience</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;