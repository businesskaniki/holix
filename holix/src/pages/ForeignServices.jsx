import React, { useEffect, useRef, useState } from "react";
import service1 from "../assets/images/service-1.png";
import service2 from "../assets/images/service-2.png";
import service3 from "../assets/images/service-3.png";
import service4 from "../assets/images/service-4.png";
import heroBanner from "../assets/images/hero-banner.png";
import aboutBanner from "../assets/images/about-banner.png";

const ForeignServices = () => {
  const foreignServiceSlides = [
    {
      id: "work-permits",

      title: "Work Permits",

      shortDescription:
        "Kenya work permit classes for employment, business, NGOs, digital nomads and professional activities.",

      description:
        "Processing and support for Kenya work permits issued to foreign nationals engaging in employment, investment, consultancy, missionary work and residence.",

      image: service3,

      sections: [
        {
          heading: "Permit Classes",

          items: [
            "Class A - Prospecting and mining activities",
            "Class B - Agriculture and animal husbandry",
            "Class C - Prescribed profession practice",
            "Class D - Specific employment by approved employer",
            "Class F - Specific manufacturing in Kenya",
            "Class G - Trade, consultancy and business operations",
            "Class I - Religious and missionary activities",
            "Class K - Ordinary residents with assured income",
            "Class M - Refugees seeking employment",
            "Class N - Digital nomad permits",
            "Class P - UN, diplomatic and NGO staff",
            "Class Q - Religious and charitable organizations",
            "Class R - East African Community nationals",
            "Exemption permits and special exemptions",
          ],
        },
      ],
    },

    {
      id: "kenya-passes",

      title: "Passes",

      shortDescription:
        "Special passes, dependant passes, student passes and internship authorization for foreigners in Kenya.",

      description:
        "Support for temporary entry permissions, dependant processing, foreign student documentation and internship approvals.",

      image: aboutBanner,

      sections: [
        {
          heading: "Pass Categories",

          items: [
            "Special Pass for temporary business visits",
            "Dependant Pass for spouses and dependants",
            "Student Pass for foreign students",
            "Internship Pass processing",
            "Research Pass applications",
            "Pass renewals and extensions",
            "Document preparation and immigration support",
          ],
        },
      ],
    },

    {
      id: "eta-services",

      title: "ETA Applications",

      shortDescription:
        "Kenya Electronic Travel Authorization applications for tourists, transit visitors and business travellers.",

      description:
        "Application assistance for Kenya ETA approvals including transit, standard and multiple-entry authorizations.",

      image: service4,

      sections: [
        {
          heading: "ETA Services",

          items: [
            "Transit ETA application",
            "Standard ETA processing",
            "One-year multiple entry ETA",
            "Five-year ETA for US nationals",
            "Expedited ETA processing",
            "Travel document verification",
            "International travel guidance",
          ],
        },
      ],
    },

    {
      id: "visa-support",

      title: "Visa Support",

      shortDescription:
        "International visa processing support for global destinations and embassy documentation assistance.",

      description:
        "Visa consultation and application support for tourism, business travel, studies and international relocation.",

      image: heroBanner,

      sections: [
        {
          heading: "Countries Supported",

          items: [
            "USA Visa Applications",
            "Canada Visa Applications",
            "Schengen Visa Applications",
            "Australia Visa Applications",
            "Mexico Visa Applications",
            "Document preparation support",
            "Embassy appointment guidance",
            "Travel history and interview preparation",
          ],
        },
      ],
    },
  ];

  const [activeSlide, setActiveSlide] = useState(
    foreignServiceSlides[0],
  );

  const foreignSliderRef = useRef(null);
  const [isForeignSliderPaused, setIsForeignSliderPaused] = useState(false);

  const getForeignScrollDistance = () => {
    const cardWidth = 260;
    const gapWidth = 20;
    if (typeof window === "undefined") return cardWidth + gapWidth;
    return window.innerWidth >= 1024
      ? 3 * (cardWidth + gapWidth)
      : cardWidth + gapWidth;
  };

  useEffect(() => {
    const slider = foreignSliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      if (isForeignSliderPaused) return;

      const distance = getForeignScrollDistance();

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: distance, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isForeignSliderPaused]);

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
        aria-label="International services"
        style={{
          minHeight: "100vh",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundImage: "url(\"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80\")",
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
                  International Visa & Immigration Support
                </p>
                <h1 className="h1 hero-title">
                  Global Visa Applications and Immigration Services
                </h1>
                <p className="hero-text">
                  EagleCore supports visa applications, work permits,
                  ETA processing, foreign passes and immigration documents.
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
                  Work Permit & Residency Guidance
                </p>
                <h1 className="h1 hero-title">
                  Smooth legal entry and stay for employees and families
                </h1>
                <p className="hero-text">
                  We help prepare applications, track approvals and keep
                  your international travel plans on schedule.
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
                  Visa Processing for Multiple Destinations
                </p>
                <h1 className="h1 hero-title">
                  USA, Canada, Schengen, UAE and global visas made easier
                </h1>
                <p className="hero-text">
                  Our team manages submission requirements, embassy
                  appointments and follow up for your chosen destination.
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
                  Fast Immigration Document Support
                </p>
                <h1 className="h1 hero-title">
                  From application to approval with personal follow-up
                </h1>
                <p className="hero-text">
                  Count on us for clear guidance, document checks and
                  reliable communication at every step.
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

      {/* SERVICES SECTION */}
      <section
        id="services-section"
        style={{
          paddingBlock: "var(--section-padding)",
          background: "var(--mint-cream)",
        }}
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div
            style={{
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            <p className="section-subtitle">
              - International Services -
            </p>

            <h2 className="h2 section-title">
              Explore Immigration & Travel Services
            </h2>

            <p
              style={{
                maxWidth: "700px",
                margin: "15px auto 0",
                color: "var(--granite-gray)",
              }}
            >
              Browse our international immigration, permit,
              visa and travel support services for foreign
              nationals and global travellers.
            </p>
          </div>

          {/* SLIDER */}
          <div
            style={{
              position: "relative",
              marginBottom: "40px",
            }}
          >
            {/* LEFT ARROW */}
            <button
              onClick={() => {
                const slider = foreignSliderRef.current;
                if (!slider) return;
                slider.scrollBy({
                  left: -getForeignScrollDistance(),
                  behavior: "smooth",
                });
              }}
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
                color: "var(--go-green)",
                fontSize: "24px",
                border: "none",
                cursor: "pointer",
              }}
            >
              ←
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={() => {
                const slider = foreignSliderRef.current;
                if (!slider) return;
                slider.scrollBy({
                  left: getForeignScrollDistance(),
                  behavior: "smooth",
                });
              }}
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
                color: "var(--go-green)",
                fontSize: "24px",
                border: "none",
                cursor: "pointer",
              }}
            >
              →
            </button>

            {/* TOP SLIDER */}
            <div
              id="foreign-slider"
              ref={foreignSliderRef}
              onMouseEnter={() => setIsForeignSliderPaused(true)}
              onMouseLeave={() => setIsForeignSliderPaused(false)}
              style={{
                display: "flex",
                gap: "20px",
                overflowX: "auto",
                paddingBottom: "10px",
                scrollbarWidth: "none",
                scrollBehavior: "smooth",
              }}
            >
              {foreignServiceSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="slider-card"
                  onClick={() => setActiveSlide(slide)}
                  style={{
                    minWidth: "260px",
                    height: "300px",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    flexShrink: 0,
                    borderRadius: "var(--radius-5)",
                    transition: "var(--transition-2)",

                    border:
                      activeSlide.id === slide.id
                        ? "3px solid var(--go-green)"
                        : "2px solid transparent",

                    transform:
                      activeSlide.id === slide.id
                        ? "translateY(-8px)"
                        : "translateY(0px)",

                    boxShadow:
                      activeSlide.id === slide.id
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

                  {/* OVERLAY */}
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
                    {/* TITLE */}
                    <div
                      style={{
                        background: "var(--go-green)",
                        color: "var(--white)",
                        padding: "8px 14px",
                        borderRadius: "var(--radius-5)",
                        width: "fit-content",
                        fontSize: "14px",
                        fontWeight: "700",
                        marginBottom: "12px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {slide.title}
                    </div>

                    {/* DESCRIPTION */}
                    <p
                      style={{
                        color: "var(--white)",
                        fontSize: "13px",
                        lineHeight: "1.7",
                        margin: 0,
                      }}
                    >
                      {slide.shortDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BIG DISPLAY */}
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
              {/* TEXT */}
              <div>
                <p
                  style={{
                    color: "var(--go-green)",
                    fontWeight: "var(--fw-600)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "15px",
                    fontSize: "var(--fs-12)",
                  }}
                >
                  - International Services -
                </p>

                <h2
                  style={{
                    color: "var(--rich-black-fogra-29-1)",
                    fontFamily: "var(--ff-cuprum)",
                    fontSize: "var(--fs-2)",
                    lineHeight: "1.1",
                    marginBottom: "20px",
                  }}
                >
                  {activeSlide.title}
                </h2>

                <p
                  style={{
                    color: "var(--granite-gray)",
                    fontSize: "var(--fs-10)",
                    lineHeight: "1.8",
                    marginBottom: "30px",
                  }}
                >
                  {activeSlide.description}
                </p>

                <a
                  href={`#${activeSlide.id}`}
                  className="btn btn-primary"
                >
                  Explore Service
                </a>
              </div>

              {/* IMAGE */}
              <div
                style={{
                  width: "100%",
                  height: "260px",
                  overflow: "hidden",
                  borderRadius: "var(--radius-5)",
                }}
              >
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          {/* FULL DETAILS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "25px",
            }}
          >
            {activeSlide.sections.map((section, index) => (
              <div
                key={index}
                style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-5)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-1)",
                  borderTop: "5px solid var(--go-green)",
                  transition: "var(--transition-2)",
                }}
              >
                {/* CARD HEADER */}
                <div
                  style={{
                    background: "var(--go-green_8)",
                    padding: "20px 25px",
                    borderBottom: "1px solid var(--cultured)",
                  }}
                >
                  <h3
                    style={{
                      color: "var(--go-green)",
                      fontFamily: "var(--ff-cuprum)",
                      fontSize: "var(--fs-7)",
                      lineHeight: "1.3",
                      margin: 0,
                    }}
                  >
                    {section.heading}
                  </h3>
                </div>

                {/* CARD BODY */}
                <div
                  style={{
                    padding: "25px",
                  }}
                >
                  <ul
                    style={{
                      display: "grid",
                      gap: "14px",
                      paddingLeft: "0",
                      margin: 0,
                      listStyle: "none",
                    }}
                  >
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          color: "var(--rich-black-fogra-29-1)",
                          fontSize: "var(--fs-10)",
                          lineHeight: "1.8",
                          paddingBottom: "12px",
                          borderBottom:
                            itemIndex !==
                            section.items.length - 1
                              ? "1px solid var(--cultured)"
                              : "none",
                        }}
                      >
                        {/* ARROW */}
                        <span
                          style={{
                            color: "var(--go-green)",
                            fontWeight: "bold",
                            fontSize: "18px",
                            lineHeight: "1.5",
                            flexShrink: 0,
                          }}
                        >
                          →
                        </span>

                        {/* TEXT */}
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

export default ForeignServices;