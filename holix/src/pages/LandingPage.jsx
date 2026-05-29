import React from "react";
import AboutPage from "./AboutPage";
import Services from "./Services";
import { Form } from "react-router-dom";
import FeaturesPage from "./FeaturesPage";
import FAQ from "../components/FAQ";
import heroB from "../assets/images/hero-banner.png"
import pattern from "../assets/images/hero-pattern.svg"
const LandingPage = () => {
  return (
    <>
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle has-before">
            One Stop Online Services Solution
          </p>

          <h1 className="h1 hero-title">We Make It Easy for You</h1>

          <p className="hero-text">
            Handling government services doesn’t have to be complicated. At
            Eaglecore Consultants Limited, we take care of your KRA, NTSA,
            business registration, Passport application and for our foreign
            clients we help with visa immigration needs — so you can focus on
            what matters most.
            <br />
            Get it done right the first time.
          </p>

          <div className="btn-group">
            <a href="#services" className="btn btn-primary">
              Discover More
            </a>

            <button className="flex-btn" id="howItWorksBtn">
              <div className="btn-icon">
                <ion-icon name="play" aria-hidden="true"></ion-icon>
              </div>

              <span className="span">How it works</span>
            </button>
          </div>

          <div className="how-it-works-content" id="howItWorksContent">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <figure
          className="hero-banner has-before img-holder"
          style={{ "--width": 650, "--height": 650 }}
        >
          <img
            src={heroB}
            width="650"
            height="650"
            alt="hero banner"
            className="img-cover"
          />
        </figure>
      </div>
    </section>
    <AboutPage />
    <Services />
    <FeaturesPage />
    <FAQ />
    </>
  );
};

export default LandingPage;