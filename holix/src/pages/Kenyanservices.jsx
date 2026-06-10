import React, { useState } from "react";
import service1 from "../assets/images/service-1.png";
import service2 from "../assets/images/service-2.png";
import service3 from "../assets/images/service-3.png";
import service4 from "../assets/images/service-4.png";
import heroBanner from "../assets/images/hero-banner.png";
import aboutBanner from "../assets/images/about-banner.png";

const Kenyanservices = () => {
  const eaglecoreKenyaSlides = [
    {
      id: "ntsa-services",
      title: "NTSA Services",
      description:
        "Driving licence, PSV, logbook transfer and motor vehicle processing services.",
      image: service1,
      sections: [
        {
          heading: "Driving Licence Services",
          items: [
            "Apply for a Smart Driving Licence",
            "Renewal of Driving Licence",
            "Duplicate Driving Licence (lost/damaged)",
            "Conversion of Foreign Driving Licence",
            "Interim Driving Licence application",
            "Driving Licence Test Booking (Theory & Practical)",
          ],
        },
        {
          heading: "Motor Vehicle Services",
          items: [
            "Motor Vehicle Registration (new vehicle)",
            "Transfer of Vehicle Ownership (buyer/seller process)",
            "Duplicate Logbook application",
            "Change of Vehicle Particulars (color, engine, etc.)",
            "Reflect Joint Ownership",
            "Deregistration of Vehicle",
            "Vehicle Inspection Booking",
            "Reflect Hire Purchase",
            "Special Plate / Personalized Plate application",
            "Temporary Permit application",
            "Forced Logbook Transfer",
          ],
        },
        {
          heading: "PSV Services",
          items: [
            "PSV Badge application",
            "PSV Badge renewal",
            "Duplicate PSV Badge",
            "PSV Licence application",
          ],
        },
        {
          heading: "Driving School & Instructor Services",
          items: [
            "Driving School Registration",
            "Driving Instructor Registration",
            "Renewal of Driving School Licence",
            "Renewal of Instructor Licence",
          ],
        },
      ],
    },

    {
      id: "kra-services",
      title: "KRA Services",
      description:
        "KRA PIN registration, tax filing, VAT, PAYE and compliance certificate services.",
      image: service2,
      sections: [
        {
          heading: "Registration and Filing Returns Services",
          items: [
            "Apply for a KRA PIN, Amendment and Reprint (Individual & Non-Individual)",
            "Tax Obligation Registration (VAT, PAYE, Income Tax, etc.)",
            "File Individual Income Tax Returns",
            "File Company Income Tax Returns",
            "Nil Returns, VAT Returns, PAYE Returns, Excise Duty Returns, Withholding Tax Returns and Turnover Tax Returns",
          ],
        },
        {
          heading: "Payments",
          items: [
            "Generate Payment Slip",
            "Pay Taxes Online (via banks/mobile money)",
            "Installment Payment Plan Application",
            "Penalty & Interest Payments",
          ],
        },
        {
          heading: "Compliance & Certificates",
          items: [
            "Apply for Tax Compliance Certificate (TCC)",
            "Verify Tax Compliance Certificate",
            "Withholding VAT Certificate Application",
            "Tax Exemption Certificate Application",
          ],
        },
        {
          heading: "Motor Vehicle & Customs Services",
          items: [
            "Logbook Search via iTax PIN validation",
            "Customs Declaration (Import/Export)",
            "Cargo Tracking (via linked customs systems)",
            "Apply for Duty Remission (eligible categories)",
          ],
        },
        {
          heading: "Business-Related Services",
          items: [
            "Company Tax Registration",
            "Partnership Registration",
            "Change of Business Details",
            "Rental Income Tax Registration",
            "Digital Service Tax Registration",
            "Turnover Tax Registration",
          ],
        },
      ],
    },

    {
      id: "brs-services",
      title: "BRS  services",
      description:
        "Company setup, CR12 processing, annual returns and LLP registration services.",
      image: service3,
      sections: [
        {
          heading: "Company Registration Services",
          items: [
            "Business Name Search & Reservation",
            "Business Name Registration",
            "Change of Business Particulars (address, activity, etc.)",
            "Cessation (Closure) of Business Name",
            "Reprint of Business Registration Certificate",
            "Business Name to Limited Company",
            "Private Limited Company Registration",
            "Public Limited Company Registration",
            "Company Limited by Guarantee Registration",
            "Foreign Company Registration (branch in Kenya)",
            "Company Name Search & Reservation",
            "Re-registration (e.g., conversion from one type to another)",
          ],
        },
        {
          heading: "Company Post-Registration Services",
          items: [
            "Filing Annual Returns",
            "Change of Company Directors",
            "Appointment/Resignation of Director",
            "Allotment / Transfer of Shares",
            "Change of Company Name",
            "Filing of Beneficial Ownership Information",
            "Download Company CR12 (List of Directors & Shareholders)",
          ],
        },
        {
          heading: "Partnership & LLP Services",
          items: [
            "Limited Liability Partnership (LLP) Registration",
            "Registration of Limited Partnership",
            "Change of LLP/Partnership Details",
            "Filing Annual Returns for LLP",
            "Dissolution of LLP",
          ],
        },
        {
          heading: "Other Services",
          items: [
            "NCA Registration",
            "AGPO Registration",
            "Tax Compliance",
            "IFMIS Registration",
            "Company Profile",
            "Business Cards",
          ],
        },
      ],
    },

    {
      id: "passport-services",
      title: "Passport Application",
      description:
        "Passport application, renewal and replacement processing services.",
      image: service4,
      sections: [
        {
          heading: "New Application Requirements",
          items: [
            "Applicant National ID",
            "Applicant Birth Certificate",
            "Both copies of Parent’s IDs",
            "3 passport photos white background",
            "Government fee for 66 pages is 12,550 Kshs",
          ],
        },
        {
          heading: "Renewal Requirements",
          items: [
            "National ID",
            "3 passport photos white background",
            "Previous passport",
            "Government fee for 66 pages is 12,550 Kshs",
          ],
        },
        {
          heading: "Lost Passport Requirements",
          items: [
            "National ID",
            "Police Abstract",
            "Affidavit",
            "Letter explaining how you lost your passport",
            "Government fee for 66 pages is 20,050 Kshs",
          ],
        },
      ],
    },

    {
      id: "visa-services",
      title: "VISA APPLICATION",
      description:
        "International visa processing support for global destinations.",
      image: heroBanner,
      sections: [
        {
          heading: "Countries Supported",
          items: [
            "USA",
            "CANADA",
            "SCHENGEN COUNTRIES",
            "AUSTRALIA",
            "MEXICO",
            "Plus other global destinations",
          ],
        },
      ],
    },

    {
      id: "civil-services",
      title: "Civil Registration Services",
      description:
        "Birth certificates, marriage registration and government online services.",
      image: aboutBanner,
      sections: [
        {
          heading: "Child Birth Certificate Requirements",
          items: [
            "Child Birth Notification",
            "Both parents ID copies",
            "250 Kshs Government fee",
          ],
        },
        {
          heading: "Adult Birth Certificate Requirements",
          items: [
            "Applicant ID Copy",
            "Both Parents ID Copies",
            "Secondary School Leaving Certificate and KCSE Certificate",
            "550 Kshs Government fee",
          ],
        },
        {
          heading: "Lost Birth Certificate Requirements",
          items: [
            "Previous birth certificate",
            "Both parents ID copies",
            "250 Kshs Government fee",
          ],
        },
        {
          heading: "Other Online Services",
          items: [
            "Marriage certificate application",
            "Boma Yangu Application",
            "Arthi Sasa Application",
            "Registration of Societies",
            "NSSF Application",
            "SHA Application",
            "Online EACC Application",
            "CRB Report and Certificate Application",
            "TSC Application",
            "Yellow Fever Application",
            "Good Conduct Application",
          ],
        },
      ],
    },
  ];

  const [activeKenyaSlide, setActiveKenyaSlide] = useState(
    eaglecoreKenyaSlides[0],
  );

  const scrollToServices = () => {
    const services = document.getElementById('services-section');
    if (!services) return;
    const top = services.getBoundingClientRect().top + window.pageYOffset - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO */}
      <section
        className="section hero hero-bg"
        id="home"
        aria-label="Kenyan services"
        style={{
          minHeight: "100vh",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundImage: "url(\"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80\")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="hero-content">
            <div className="hero-slide-wrapper" aria-live="polite">
              <article
                className="hero-slide-card"
                role="button"
                tabIndex={0}
                onClick={scrollToServices}
                onKeyDown={(e) => { if (e.key === 'Enter') scrollToServices(); }}
              >
                <p className="hero-subtitle has-before">
                  Kenyan Government & Business Services
                </p>
                <h1 className="h1 hero-title">
                  Local NTSA, KRA, BRS and Passport Support
                </h1>
                <p className="hero-text">
                  EagleCore helps Kenyan individuals and businesses with fast,
                  reliable government services.
                </p>
              </article>

              <article
                className="hero-slide-card"
                role="button"
                tabIndex={0}
                onClick={scrollToServices}
                onKeyDown={(e) => { if (e.key === 'Enter') scrollToServices(); }}
              >
                <p className="hero-subtitle has-before">
                  Fast Government Filing for Kenyan Businesses
                </p>
                <h1 className="h1 hero-title">
                  Company registration, compliance, and document renewal
                </h1>
                <p className="hero-text">
                  We handle KRA PINs, business registration, and government
                  approvals so you can stay focused on growth.
                </p>
              </article>

              <article
                className="hero-slide-card"
                role="button"
                tabIndex={0}
                onClick={scrollToServices}
                onKeyDown={(e) => { if (e.key === 'Enter') scrollToServices(); }}
              >
                <p className="hero-subtitle has-before">
                  Passport & Civil Certificate Support
                </p>
                <h1 className="h1 hero-title">
                  Passport renewal, certificates, and identity services
                </h1>
                <p className="hero-text">
                  Complete passport, birth, marriage and good-conduct support for
                  individuals and families.
                </p>
              </article>

              <article
                className="hero-slide-card"
                role="button"
                tabIndex={0}
                onClick={scrollToServices}
                onKeyDown={(e) => { if (e.key === 'Enter') scrollToServices(); }}
              >
                <p className="hero-subtitle has-before">
                  Trusted Local Service Delivery
                </p>
                <h1 className="h1 hero-title">
                  On-time government approvals with personal service
                </h1>
                <p className="hero-text">
                  We provide fast turnarounds, expert guidance and clear next
                  steps for every Kenyan service request.
                </p>
              </article>
            </div>

            <div className="btn-group">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); scrollToServices(); }}
                className="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services-section"
        style={{
          paddingBlock: "var(--section-padding)",
          background: "var(--mint-cream)",
        }}
      >
        <div className="container">
          {/* SLIDER TITLE (OPTIONAL CONSISTENCY) */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p className="section-subtitle">- Kenyan Services -</p>
            <h2 className="h2 section-title">Explore Government Services</h2>
          </div>

          {/* SLIDER (FIXED TO MATCH FOREIGN STYLE) */}
          <div style={{ position: "relative", marginBottom: "40px" }}>
            {/* LEFT ARROW */}
            <button
              onClick={() =>
                document
                  .getElementById("kenya-slider")
                  .scrollBy({ left: -260, behavior: "smooth" })
              }
              style={{
                position: "absolute",
                left: "-15px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 5,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "var(--white)",
                boxShadow: "var(--shadow-2)",
                border: "none",
                cursor: "pointer",
                fontSize: "22px",
                color: "var(--go-green)",
              }}
            >
              ←
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={() =>
                document
                  .getElementById("kenya-slider")
                  .scrollBy({ left: 260, behavior: "smooth" })
              }
              style={{
                position: "absolute",
                right: "-15px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 5,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "var(--white)",
                boxShadow: "var(--shadow-2)",
                border: "none",
                cursor: "pointer",
                fontSize: "22px",
                color: "var(--go-green)",
              }}
            >
              →
            </button>

            {/* SLIDER TRACK (FIXED SIZE CARDS) */}
            <div
              id="kenya-slider"
              style={{
                display: "flex",
                gap: "20px",
                overflowX: "auto",
                scrollBehavior: "smooth",
                paddingBottom: "10px",
                scrollbarWidth: "none",
              }}
            >
              {eaglecoreKenyaSlides.map((slide) => (
                <div
                  key={slide.id}
                  onClick={() => setActiveKenyaSlide(slide)}
                  style={{
                    minWidth: "260px", // ✅ FIXED (Foreign style)
                    height: "300px", // ✅ FIXED (Foreign style)
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    flexShrink: 0,
                    borderRadius: "var(--radius-5)",
                    transition: "0.3s ease",

                    border:
                      activeKenyaSlide.id === slide.id
                        ? "3px solid var(--go-green)"
                        : "2px solid transparent",

                    transform:
                      activeKenyaSlide.id === slide.id
                        ? "translateY(-8px)"
                        : "translateY(0)",

                    boxShadow:
                      activeKenyaSlide.id === slide.id
                        ? "var(--shadow-2)"
                        : "var(--shadow-1)",
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* OVERLAY (MATCH FOREIGN STYLE) */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, hsla(215,31%,14%,0.95), hsla(215,31%,14%,0.25))",
                      padding: "18px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        background: "var(--go-green)",
                        color: "var(--white)",
                        padding: "8px 14px",
                        borderRadius: "var(--radius-5)",
                        fontSize: "14px",
                        fontWeight: "700",
                        marginBottom: "12px",
                        width: "fit-content",
                        textTransform: "uppercase",
                      }}
                    >
                      {slide.title}
                    </div>

                    <p
                      style={{
                        color: "var(--white)",
                        fontSize: "13px",
                        lineHeight: "1.7",
                        margin: 0,
                      }}
                    >
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BIG DISPLAY (UNCHANGED LOGIC) */}
          <div
            style={{
              marginBottom: "35px",
              background: "var(--white)",
              borderRadius: "var(--radius-5)",
              overflow: "hidden",
              boxShadow: "var(--shadow-2)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "30px",
                alignItems: "center",
                padding: "35px",
              }}
            >
              <div>
                <h2 className="h2 section-title">{activeKenyaSlide.title}</h2>

                <p style={{ marginTop: "15px" }}>
                  {activeKenyaSlide.description}
                </p>
              </div>

              <img
                src={activeKenyaSlide.image}
                alt=""
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "var(--radius-5)",
                }}
              />
            </div>
          </div>

          {/* FULL DETAILS (UNCHANGED) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "25px",
            }}
          >
            {activeKenyaSlide.sections.map((section, index) => (
              <div
                key={index}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-5)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-1)",
                  borderTop: "5px solid var(--go-green)",
                }}
              >
                <div
                  style={{
                    background: "var(--go-green_8)",
                    padding: "20px 25px",
                  }}
                >
                  <h3 style={{ margin: 0 }}>{section.heading}</h3>
                </div>

                <div style={{ padding: "25px" }}>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: "12px",
                          paddingBottom: "12px",
                          borderBottom:
                            i !== section.items.length - 1
                              ? "1px solid var(--cultured)"
                              : "none",
                        }}
                      >
                        <span style={{ color: "var(--go-green)" }}>→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Kenyanservices;
