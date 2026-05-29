import React, { useState } from "react";

const ForeignServices = () => {
  const foreignServiceSlides = [
    {
      id: "work-permits",

      title: "Work Permits",

      shortDescription:
        "Kenya work permit classes for employment, business, NGOs, digital nomads and professional activities.",

      description:
        "Processing and support for Kenya work permits issued to foreign nationals engaging in employment, investment, consultancy, missionary work and residence.",

      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",

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

      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",

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

      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",

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

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfOniAc2jQDVcQaY7jv67nf2ebmVUdFdVOg&s",

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

  return (
    <>
      {/* HERO */}
      <section
        className="section hero"
        aria-label="International services"
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle has-before">
              International Visa & Immigration Support
            </p>

            <h1 className="h1 hero-title">
              Global Visa Applications and Immigration Services
            </h1>

            <p className="hero-text">
              EagleCore supports visa applications, work permits,
              ETA processing, foreign passes and international
              immigration documentation for individuals and businesses.
            </p>

            <div className="btn-group">
              <a
                href="https://wa.me/2547XXXXXXXX?text=Hi%20EagleCore%2C%20I%20need%20international%20services"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </div>
          </div>

          <figure
            className="hero-banner has-before img-holder"
            style={{ "--width": 600, "--height": 600 }}
          >
            <img
              src="./assets/images/hero-banner.png"
              width="600"
              height="600"
              alt="international visa services"
              className="img-cover"
            />
          </figure>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
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
                document
                  .getElementById("foreign-slider")
                  .scrollBy({
                    left: -260,
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
                document
                  .getElementById("foreign-slider")
                  .scrollBy({
                    left: 260,
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