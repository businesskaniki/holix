import React from "react";
import AboutPage from "./AboutPage";
import Services from "./Services";
import FeaturesPage from "./FeaturesPage";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    subtitle: "One Stop Online Services Solution",
    title: "We Make It Easy for You",
    text: "Handling government services doesn’t have to be complicated. At Eaglecore Consultants Limited, we take care of your KRA, NTSA, business registration, passport application and visa support.",
    buttonText: "Discover More",
    buttonUrl: "#services",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    subtitle: "Passport & Visa Support",
    title: "Travel Documentation Simplified",
    text: "Get fast, accurate passport and visa support with expert guidance and step-by-step service for both local and foreign clients.",
    buttonText: "Get Started",
    buttonUrl: "#contact",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    subtitle: "Business Registration",
    title: "Launch Your Company Quickly",
    text: "From business registration to compliance and KRA setup, we help you build a solid foundation for your new enterprise.",
    buttonText: "Learn More",
    buttonUrl: "#services",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    subtitle: "KRA & NTSA Services",
    title: "Complete Government Support",
    text: "Whether it’s tax registration or vehicle documentation, we handle the paperwork so you can focus on what matters most.",
    buttonText: "See Services",
    buttonUrl: "#services",
  },
];

const LandingPage = () => {
  return (
    <>
    <section className="section hero landing-hero" id="home" aria-label="hero">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-slide-content">
              <p className="hero-subtitle has-before">{slide.subtitle}</p>
              <h1 className="h1 hero-title">{slide.title}</h1>
              <p className="hero-text">{slide.text}</p>
              <div className="btn-group">
                <a href={slide.buttonUrl} className="btn btn-primary">
                  {slide.buttonText}
                </a>
                <button className="flex-btn" type="button">
                  <div className="btn-icon">
                    <ion-icon name="play" aria-hidden="true"></ion-icon>
                  </div>
                  <span className="span">How it works</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <AboutPage />
    <Services />
    <FeaturesPage />
    <FAQ />
    <ContactSection />
    </>
  );
};

export default LandingPage;