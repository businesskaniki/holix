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
          heading: "Work Permit Classes",

          items: [
            "Class A: Prospecting and mining — This permit is issued to a person who intends to engage, whether alone or in partnership, in prospecting for minerals or mining in Kenya.",
            "Class B: Agriculture and Animal husbandry — This permit is issued to a person who intends to engage, whether alone or in partnership, in the business of agriculture or animal husbandry in Kenya.",
            "Class C: Prescribed profession — This permit is issued to a person who is a member of a prescribed profession and intends to practice that profession, whether alone or in partnership, in Kenya.",
            "Class D: Employment — This permit is issued to a person who is offered specific employment by a specific employer, the government of Kenya or any other person or authority under the control of the Government or an approved technical aid scheme under the United Nations Organization or some other approved agency, and who has skills or qualifications not available in Kenya.",
            "Class F: Specific manufacturing — This permit is issued to a person who intends to engage, whether alone or in partnership, in a specific manufacturing enterprise in Kenya.",
            "Class G: Specific trade, business or consultancy — This permit is issued to a person who intends to engage, whether alone or in partnership, in a specific trade, business, consultancy or profession other than a prescribed profession in Kenya.",
            "Class I: Approved religious activities (Non-EAC Nationals) — This permit is issued to a person who is a member of a registered institution engaged as a missionary and whose activities are directly involved in preaching or conduct of religious worship and rituals, and whose presence in Kenya is of benefit to the country.",
            "Class K: Ordinary residents — This permit is issued to a person who is not less than thirty-five years of age and has an assured annual income from sources other than employment, occupation, trade, business or profession covered by other classes.",
            "Class M: Refugees — This permit is issued to a person who has been granted refugee status in Kenya and any spouse of such a refugee who intends to take up employment or engage in a specific occupation, trade, business or profession.",
            "Class N: Digital Nomad — This permit is issued to a person who works remotely within Kenya for a company registered outside the country.",
            "Class P: Staff of UN, Diplomatic Missions, IGOs, and INGOs — This permit is issued to staff of the United Nations, diplomatic missions, inter-governmental organizations or international non-governmental organizations accredited to neighbouring hardship countries and staff based in hardship neighbouring countries.",
            "Class Q: Professionals working for religious or charitable organizations — This permit is issued to a prescribed professional working for religious or charitable organizations who is not involved in preaching or conduct of religious worship and rituals, and whose presence will benefit Kenya.",
            "Class R: East African Community (EAC) Nationals — This permit is issued to a citizen of a Member State of the East African Community who is not a prohibited immigrant and intends to reside, engage in employment, activity, business, trade or practice a prescribed profession in Kenya.",
            "Exemption: Cabinet secretary exempted persons — This permit is issued to any person or class of persons exempted by the cabinet secretary from obtaining a work permit by notice in the gazette under section 34(3)(g) of the Kenya Citizenship and Immigration Act, 2011.",
          ],
        },
      ],
    },

    {
      id: "passes",

      title: "Passes",

      shortDescription:
        "There are three (3) main types of passes issued in Kenya",

      description:
        "There are three (3) main types of passes issued in Kenya i.e special pass, dependant pass and Student/Research/Internship pass. These are specified under Section 26 of the Kenya Citizenship and Immigration Regulations, 2012.",

      image: service1,

      sections: [
        {
          heading: "Special Pass",

          items: [
            `Special Pass: This is a document issued to person(s) who wishes to enter or remain in Kenya — This is a document issued under Regulation 34 of the Kenya Citizenship and Immigration Regulations, 2012, to person(s) who wishes to enter or remain in Kenya for a limited period for purposes of temporarily conducting a business, trade or profession.
             NB: Documents in foreign languages should be translated into English by either the Embassy, Public Notary, or authorized /recognized institution
            Fee: Non-East Africans – 200 US Dollars per month upon approval
            East Africa Community Member States – Grati`,
          ],
        },
        {
          heading: "Dependant Pass",

          items: [
            `dependant pass: This is a document issued to a person whose spouse, parent or guardian is lawfully entitled to enter Kenya — Dependant's pass for spouse and children of a Kenyan citizen
              Issuance fee: Ksh 20,000

            • Dependant's pass for spouse and children of work permit and permanent resident holders
              Issuance fee: Ksh 10,000

            • East Africa Community States
              Gratis`,
          ],
        },
        {
          heading: "Student Pass",

          items: [
            `Student Pass: This is a document issued to applicants who wish to purse their education in Kenya —  This is a document issued to applicants (foreign students) (section 30(1) of the Kenya Citizenship and Immigration Regulations 2012, who wish to purse their education in Kenya's Education or Training Institutions where they have been accepted or admitted. The applicant (foreign student) must be accepted as a student by an approved Educational or Training Establishment.
             Fee: Non-East Africans – : 100 US Dollar per year
             East Africa Community Member States – Gratis `,
          ],
        },
        {
          heading: "Internship/Research Pass",

          items: [
            `Internship/Research Pass: Authorization issued to a person seeking to —   Authorization issued to a person seeking to enter and remain in Kenya for the purpose of undertaking internship or academic research within Kenya and should be accepted by institution.
            Fee: Non-East Africans –Kshs. 15,000 per year
            East Africa Community Member States – Gratis  `,
          ],
        },
      ],
    },

    {
      id: "eta-services",

      title: "ETA ",

      shortDescription:
        "Electronic Travel Authorization support for tourists, transit visitors and business travellers.",

      description: `Kenya eTA is a semi-automated system that determines the eligibility of visitors to travel to Kenya. An eTA offers permission to travel and is authorised by the Government of the Republic of Kenya. The possession of an eTA is not the final authority to enter the Republic of Kenya. Admissibility will be determined at the point of entry.
The eTA application collects biographic information and answers to eligibility questions from the traveller. eTA applications for Kenya are usually processed in 3 days and there is an urgent processing service, however, it is recommended applications be submitted at least 2 weeks prior to travel to ensure adequate time for processing. `,

      image: service4,

      sections: [
        {
          heading: "Electronic Travel Authorization (ETA)",

          items: [
            `Normal ETA: The first type of ETA —  Transit Application : For travellers who are on a transit flight through Kenya
Fee : $20
Standard Application : Allows entry into Kenya once
Fee : $30
One Year Application : Allows for multiple entries into the country for a period of one year
Fee : $300
Five Year Application : For American nationals visiting the country for multiple times for five years
Fee : $185
East African Tourist ETA : Allows entry into Kenya, Uganda, and Rwanda. Valid for 90 days after approval.
Fee : $100 `,
            `Expedited ETA: The Second type of ETA —   Transit Application : For travellers who are on a transit flight through Kenya
Fee : $120
Standard Application : Allows entry into Kenya once
Fee : $130
One Year Application : Allows for multiple entries into the country for a period of one year
Fee : $400
Five Year Application : For American nationals visiting the country for multiple times for five years
Fee : $285 `,
          ],
        },
      ],
    },

    {
      id: "fnm-extensions",

      title: "FNM",

      shortDescription:
        "Foreign national movement extension and endorsement processing for Kenya stays.",

      description:
        "Support for FNM extensions, endorsements and related immigration updates to keep your status valid.",

      image: service2,

      sections: [
        {
          heading: "Foreign Nationals Certificate (Alien Card)",

          items: [
            `Alien Card: Issuance of Foreign Nationals Certificate —  The law requires that all foreigners residing within Kenya for a period exceeding 90 days be registered. `,
            `Re-entry Pass processing and endorsement: Re-entry Pass processing and endorsement —   Re-entry passes are issued to holders of dependant passes. `,
            `Extension of Visitor’s Pass: Extension of Visitor’s Pass  —  Visitors passes are issued at the point of Entry/exit (POE) to foreigners visiting Kenya. A foreign national may extend a visitors pass to a maximum of 6 months upon application in the prescribed manner.
Fee : $50 `,
            `Endorsement of Permits and passes: Endorsement of Permits and passes —   This service entails stamping on the physical passport details of an issued residency document/status. This includes transfer of stamps from expired/cancelled passport to new passport.

Application and processing fee : Free Gratis`,
          ],
        },
      ],
    },

   {
      id: "citizenship-services",

      title: "Citizenship Services",

      shortDescription:
        "Assistance with Kenyan citizenship applications, naturalization, and dual citizenship matters.",

      description:
        "Guidance for foreign nationals and Kenyan citizens seeking citizenship registration, dual citizenship declaration, endorsements, renunciation, and other citizenship services.",

      image: heroBanner,

      sections: [
        {
          heading: "Regaining Citizenship – Form 1",

          items: [
            "Eligible for citizens of Kenya by birth who ceased to be citizens by acquiring another citizenship before the 2010 Constitution",
            "Application Fee: Ksh.20,000",
            "Issuance Fee: Ksh.50,000",
          ],
        },
        {
          heading: "Declaration of Dual Citizenship – Form 3",

          items: [
            "Kenyans who have acquired other citizenships must declare dual citizenship by law",
            "Application Fee: Ksh.20,000",
            "Issuance Fee: Kshs.10,000",
          ],
        },
        {
          heading: "Endorsement – Form 4",

          items: [
            "Application by a dual citizen for endorsement on a non-Kenyan passport",
            "Application Fee: Ksh.20,000",
            "Issuance Fee: Kshs.750,000",
          ],
        },
        {
          heading: "Renunciation – Form 6",

          items: [
            "For Kenya citizens voluntarily declaring renunciation of Kenyan citizenship",
            "Application Fee: Ksh.20,000",
            "Issuance Fee: Kshs.50,000",
          ],
        },
        {
          heading: "Citizenship by Marriage – Form 8",

          items: [
            "A foreigner married to a Kenyan citizen for at least 7 years is eligible for registration",
            "Application Fee: Ksh.20,000",
            "Issuance Fee for East Africans: Kshs.50,000",
            "Issuance Fee for Non-East Africans: Kshs.100,000",
          ],
        },
        {
          heading: "Widows and Widowers – Form 9",

          items: [
            "A foreign national married to a Kenyan citizen for over 7 years may register after the death of the Kenyan spouse",
            "Application Fee: Ksh.20,000",
            "Issuance Fee for East Africans: Kshs.20,000",
            "Issuance Fee for Non-East Africans: Kshs.50,000",
          ],
        },
        {
          heading: "Lawful Residents – Form 10",

          items: [
            "Foreign nationals who have been lawful residents in Kenya for at least 7 continuous years",
            "Application Fee: Ksh.20,000",
            "Issuance Fee: Kshs.1,000,000",
          ],
        },
        {
          heading: "Children and Dependants – Form 11",

          items: [
            "Children born before the parent acquired Kenyan citizenship or dependants of registered Kenyan citizens",
            "Children adopted by Kenyan citizens may be registered",
            "Application Fee: Ksh.20,000",
            "Issuance Fee: Kshs.100,000",
          ],
        },
        {
          heading: "Stateless Persons – Form 13",

          items: [
            "Persons without enforceable claim to any state citizenship who have lived lawfully in Kenya since 12 December 1963",
            "Application Fee: Ksh.20,000",
            "Issuance Fee: Kshs.10,000",
          ],
        },
        {
          heading: "Migrants – Form 14",

          items: [
            "Persons who migrated into Kenya before 12 December 1963 and have lived continuously in Kenya",
            "Application Fee: Ksh.20,000",
            "Issuance Fee: Kshs.10,000",
          ],
        },
        {
          heading: "Descendants of Stateless Persons and Migrants – Form 15",

          items: [
            "Persons aged 18+ whose parents were eligible stateless persons or migrants",
            "Application Fee: Ksh.20,000",
            "Issuance Fee: Kshs.10,000",
          ],
        },
      ],
    },

    {
      id: "permanent-residence",

      title: "Permanent Residence",

      shortDescription:
        "Permanent residence application support for foreign nationals seeking long-term stay in Kenya.",

      description:
        "Assistance with permanent residence applications, renewals and residency documentation.",

      image: aboutBanner,

      sections: [
        {
          heading: "Ex-Kenyan (Category A)",

          items: [
            "For Kenyan citizens by birth who renounced citizenship and whose domicile country denies dual citizenship",
            "Processing Fee: Ksh.50,000 (Non-refundable)",
            "Issuance Fee: Ksh.100,000",
          ],
        },
        {
          heading: "Lawful Residents (Category B)",

          items: [
            "For lawful residents with work permits for at least 7 years and 3 years continuous residence before application",
            "Processing Fee: Ksh.50,000 (Non-refundable)",
            "Requisite Fee: Kshs.750,000",
          ],
        },
        {
          heading: "Children of Kenya Citizens (Category C)",

          items: [
            "For children born to Kenyan parents holding another nationality that forbids dual citizenship or born before the parent acquired Kenyan citizenship",
            "Processing Fee: Ksh.20,000 (Non-refundable)",
            "Requisite Fee: Kshs.750,000",
          ],
        },
        {
          heading: "Spouse to Kenya Citizen (Category D)",

          items: [
            "For spouses married to Kenyan citizens for over 3 years in a bona fide marriage",
            "Processing Fee: Ksh.50,000 (Non-refundable)",
            "Requisite Fee: Kshs.150,000",
          ],
        },
        {
          heading: "Permanent Residence Services",

          items: [
            "Permanent residence application support",
            "Renewals and documentation",
            "Long-term stay compliance",
          ],
        },
      ],
    },
  ];

  const socialLinks = [
    {
      href: "https://www.tiktok.com/@eaglecoreconsultants26",
      label: "TikTok",
      icon: "logo-tiktok",
      className: "tiktok",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(foreignServiceSlides[0]);

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
    const services = document.getElementById("services-section");
    if (!services) return;
    const top = services.getBoundingClientRect().top + window.pageYOffset - 8;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const parseServiceItem = (item) => {
    const [titleSegment, bodySegment] = item
      .split(" — ")
      .map((text) => text.trim());
    const [heading, subheading] = titleSegment
      .split(": ")
      .map((text) => text.trim());

    return {
      heading: heading || titleSegment,
      subheading: subheading || "",
      body: bodySegment || (subheading ? "" : titleSegment),
    };
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
          backgroundImage:
            'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80")',
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") scrollToServices();
                }}
              >
                <p className="hero-subtitle has-before">
                  International Visa & Immigration Support
                </p>
                <h1 className="h1 hero-title">
                  Global Visa Applications and Immigration Services
                </h1>
                <p className="hero-text">
                  EagleCore supports visa applications, work permits, ETA
                  processing, foreign passes and immigration documents.
                </p>
              </article>

              <article
                className="hero-slide-card"
                role="button"
                tabIndex={0}
                onClick={scrollToServices}
                onKeyDown={(e) => {
                  if (e.key === "Enter") scrollToServices();
                }}
              >
                <p className="hero-subtitle has-before">
                  Work Permit & Residency Guidance
                </p>
                <h1 className="h1 hero-title">
                  Smooth legal entry and stay for employees and families
                </h1>
                <p className="hero-text">
                  We help prepare applications, track approvals and keep your
                  international travel plans on schedule.
                </p>
              </article>

              <article
                className="hero-slide-card"
                role="button"
                tabIndex={0}
                onClick={scrollToServices}
                onKeyDown={(e) => {
                  if (e.key === "Enter") scrollToServices();
                }}
              >
                <p className="hero-subtitle has-before">
                  Visa Processing for Multiple Destinations
                </p>
                <h1 className="h1 hero-title">
                  USA, Canada, Schengen, UAE and global visas made easier
                </h1>
                <p className="hero-text">
                  Our team manages submission requirements, embassy appointments
                  and follow up for your chosen destination.
                </p>
              </article>

              <article
                className="hero-slide-card"
                role="button"
                tabIndex={0}
                onClick={scrollToServices}
                onKeyDown={(e) => {
                  if (e.key === "Enter") scrollToServices();
                }}
              >
                <p className="hero-subtitle has-before">
                  Fast Immigration Document Support
                </p>
                <h1 className="h1 hero-title">
                  From application to approval with personal follow-up
                </h1>
                <p className="hero-text">
                  Count on us for clear guidance, document checks and reliable
                  communication at every step.
                </p>
              </article>
            </div>

            <div className="btn-group">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToServices();
                }}
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
            <p className="section-subtitle">- International Services -</p>

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
              Browse our international immigration, permit, visa and travel
              support services for foreign nationals and global travellers.
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

                <a href={`#${activeSlide.id}`} className="btn btn-primary">
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
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
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
                    background: "rgba(214, 253, 237, 0.9)",
                    padding: "24px 26px",
                    borderBottom: "1px solid var(--cultured)",
                  }}
                >
                  <h3
                    style={{
                      color: "var(--go-green)",
                      fontFamily: "var(--ff-cuprum)",
                      fontSize: "1.15rem",
                      lineHeight: "1.25",
                      margin: 0,
                    }}
                  >
                    {section.heading}
                  </h3>
                </div>

                {/* CARD BODY */}
                <div
                  style={{
                    padding: "26px",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gap: "18px",
                    }}
                  >
                    {section.items.map((item, itemIndex) => {
                      const { heading, subheading, body } =
                        parseServiceItem(item);
                      return (
                        <div
                          key={itemIndex}
                          style={{
                            display: "grid",
                            gap: "16px",
                            padding: "24px",
                            borderRadius: "var(--radius-5)",
                            border: "1px solid rgba(131, 198, 143, 0.25)",
                            background: "rgba(245, 255, 250, 0.95)",
                          }}
                        >
                          <div
                            style={{
                              display: "grid",
                              gap: "10px",
                              width: "100%",
                            }}
                          >
                            <div
                              style={{
                                display: "grid",
                                gap: "4px",
                              }}
                            >
                              <p
                                style={{
                                  margin: 0,
                                  color: "var(--rich-black-fogra-29-1)",
                                  fontSize: "1.15rem",
                                  fontWeight: 700,
                                }}
                              >
                                {heading}
                              </p>
                              {subheading ? (
                                <p
                                  style={{
                                    margin: 0,
                                    color: "var(--go-green)",
                                    fontSize: "1.05rem",
                                    fontWeight: 700,
                                  }}
                                >
                                  {subheading}
                                </p>
                              ) : null}
                            </div>

                            {body ? (
                              <p
                                style={{
                                  margin: 0,
                                  color: "var(--rich-black-fogra-29-1)",
                                  fontSize: "var(--fs-10)",
                                  lineHeight: "1.8",
                                }}
                              >
                                {body}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
