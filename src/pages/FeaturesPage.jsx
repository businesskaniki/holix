import React from "react";

const FeaturesPage = () => {
  return (
    <section class="section features" id="features" aria-label="features">
      <div class="container">
        <p class="section-subtitle text-center">-Why Choose Us-</p>

        <h2 class="h2 section-title text-center">Reasons to Choose Us</h2>

        <p class="section-text text-center">
          EagleCore Enterprises makes company, passport and immigration services
          fast, reliable and simple. We handle filings, documents and
          applications so you can focus on your business or travel plans.
        </p>

        <ul class="grid-list">
          <li>
            <div class="features-card">
              <data class="card-number" value="01">
                01
              </data>

              <h3 class="h3 card-title">Expert Government Filing</h3>

              <p class="card-text">
                Accurate company registration, KRA compliance, NTSA and eCitizen
                support.
              </p>
            </div>
          </li>

          <li>
            <div class="features-card">
              <data class="card-number" value="02">
                02
              </data>

              <h3 class="h3 card-title">Passport & Certificate Help</h3>

              <p class="card-text">
                Passport applications, certificates, renewal documents and TSC
                registration.
              </p>
            </div>
          </li>

          <li>
            <div class="features-card">
              <data class="card-number" value="03">
                03
              </data>

              <h3 class="h3 card-title">Immigration Experience</h3>

              <p class="card-text">
                Visa extension, work permit, student visa, special pass and
                residence applications.
              </p>
            </div>
          </li>

          <li>
            <div class="features-card">
              <data class="card-number" value="04">
                04
              </data>

              <h3 class="h3 card-title">Secure Online Service</h3>

              <p class="card-text">
                Safe digital processing, clear updates and confidential handling
                of your documents.
              </p>
            </div>
          </li>

          <li>
            <div class="features-card">
              <data class="card-number" value="05">
                05
              </data>

              <h3 class="h3 card-title">Dedicated Support</h3>

              <p class="card-text">
                Personal guidance from experienced consultants through every
                application step.
              </p>
            </div>
          </li>

          <li>
            <div class="features-card">
              <data class="card-number" value="06">
                06
              </data>

              <h3 class="h3 card-title">Affordable Convenience</h3>

              <p class="card-text">
                Transparent pricing, fast turnarounds and end-to-end support for
                your peace of mind.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturesPage;
