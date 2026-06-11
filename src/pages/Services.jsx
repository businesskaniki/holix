import React from "react";
import img1 from "../assets/images/service-1.png"
import img2 from "../assets/images/service-2.png"
import img3 from "../assets/images/service-3.png"
import img4 from "../assets/images/service-4.png"


const Services = () => {
  return (
    <section className="section service" id="services" aria-label="service">
      <div className="container">
        <p className="section-subtitle text-center">-What We Offer-</p>

        <h2 className="h2 section-title text-center">
          Our Professional Services
        </h2>

        <p className="section-text text-center">
          We provide fast, reliable and secure assistance for business
          registration, government services, immigration processing and personal
          documentation.
        </p>

        <ul className="grid-list">
          {/* 1. BUSINESS & GOVERNMENT */}
          <li>
            <div className="service-card has-after">
              <figure className="card-icon">
                <img
                  src={img1}
                  width="140"
                  height="140"
                  loading="lazy"
                  alt="Company & Government Services"
                  className="img"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">
                  Business & Government Services
                </h3>

                <p className="card-text">
                  <strong>BRS Services</strong>
                  <br />
                  Business registration & company setup
                  <br />
                  CR12, annual returns & director changes
                  <br />
                  <br />
                  <strong>KRA Services</strong>
                  <br />
                  KRA PIN, returns filing (VAT, PAYE, NIL)
                  <br />
                  Tax compliance certificates
                </p>

                <a href="#" className="btn-link read-more-btn">
                  <span className="span">Read More</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>

                <div className="more-content">
                  <p>
                    <strong>NTSA Services</strong>
                    <br />
                    Driving licence application & renewal
                    <br />
                    Vehicle ownership transfer & logbook services
                    <br />
                    <br />
                    We handle complete NTSA services including smart DL,
                    duplicate licences, vehicle inspection, logbook transfer,
                    PSV licensing and more. KRA services include tax filings,
                    compliance, payment plans and business registrations.
                  </p>
                </div>
              </div>
            </div>
          </li>

          {/* 2. PASSPORT & CERTIFICATION */}
          <li>
            <div className="service-card has-after">
              <figure className="card-icon">
                <img
                  src={img2}
                  width="140"
                  height="140"
                  loading="lazy"
                  alt="Passport Services"
                  className="img"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">Passport & Certification</h3>

                <p className="card-text">
                  Passport application & renewal
                  <br />
                  Lost passport processing
                  <br />
                  <br />
                  Good conduct certificate
                  <br />
                  Birth & death certificates
                  <br />
                  <br />
                  Yellow fever card
                  <br />
                  TSC & marriage certificates
                </p>

                <a href="#" className="btn-link read-more-btn">
                  <span className="span">Read More</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>

                <div className="more-content">
                  <p>
                    We assist with new, renewal and lost passport applications
                    including documentation guidance. Civil registration
                    services include birth certificates (child/adult/lost) and
                    other legal documents.
                  </p>
                </div>
              </div>
            </div>
          </li>

          {/* 3. IMMIGRATION */}
          <li>
            <div className="service-card has-after">
              <figure className="card-icon">
                <img
                  src={img3}
                  width="140"
                  height="140"
                  loading="lazy"
                  alt="Immigration Services"
                  className="img"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">Immigration Services</h3>

                <p className="card-text">
                  Visa applications (USA, Canada, Schengen, etc.)
                  <br />
                  ETA & visa extensions
                  <br />
                  <br />
                  Work permits & student visas
                  <br />
                  Dependant & special passes
                  <br />
                  <br />
                  Permanent residence
                  <br />
                  KRA PIN for foreigners
                </p>

                <a href="#" className="btn-link read-more-btn">
                  <span className="span">Read More</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>

                <div className="more-content">
                  <p>
                    We provide full immigration support including visa
                    processing, permit applications, foreigner tax registration
                    and consultation to ensure smooth approval processes.
                  </p>
                </div>
              </div>
            </div>
          </li>

          {/* 4. ONLINE & SUPPORT */}
          <li>
            <div className="service-card has-after">
              <figure className="card-icon">
                <img
                  src={img4}
                  width="140"
                  height="140"
                  loading="lazy"
                  alt="Online Services"
                  className="img"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">Online & Support Services</h3>

                <p className="card-text">
                  NSSF & SHA registration
                  <br />
                  CRB reports & clearance
                  <br />
                  <br />
                  Boma Yangu & Ardhi Sasa
                  <br />
                  AGPO & IFMIS registration
                  <br />
                  <br />
                  Secure consultation & support
                </p>

                <a href="#" className="btn-link read-more-btn">
                  <span className="span">Read More</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>

                <div className="more-content">
                  <p>
                    We provide additional online government services including
                    society registration, EACC applications, and end-to-end
                    assistance to ensure fast and secure processing.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <a
          href="https://wa.me/2547XXXXXXXX?text=Hi%20EagleCore%2C%20I%20am%20interested%20in%20your%20services"
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Services;
