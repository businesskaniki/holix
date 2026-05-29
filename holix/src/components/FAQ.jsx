import React from "react";

const FAQ = () => {
  return (
    <section class="section faq" aria-label="frequently asked questions">
      <div class="container">
        <div class="title-wrapper">
          <h2 class="h2 section-title">Discover Frequently Asked Questions?</h2>

          <a href="#" class="btn btn-primary">
            Work Together
          </a>
        </div>

        <ul class="grid-list">
          <li>
            <div class="faq-card">
              <button class="card-action" data-accordion-action>
                <h3 class="h3 card-title">
                  01. What Kenyan services does EagleCore provide?
                </h3>

                <div class="action-icon">
                  <ion-icon
                    name="add-outline"
                    aria-hidden="true"
                    class="open"
                  ></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    aria-hidden="true"
                    class="close"
                  ></ion-icon>
                </div>
              </button>

              <div class="card-content">
                <p>
                  We handle NTSA filings, KRA PIN registration and tax returns,
                  BRS company and partnership registration, passport
                  applications, visa applications and civil registration
                  documents for Kenya. Our team also supports online government
                  services such as marriage certificates, NSSF, EACC and good
                  conduct applications.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div class="faq-card">
              <button class="card-action" data-accordion-action>
                <h3 class="h3 card-title">
                  02. How long does it take to process a passport or KRA PIN?
                </h3>

                <div class="action-icon">
                  <ion-icon
                    name="add-outline"
                    aria-hidden="true"
                    class="open"
                  ></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    aria-hidden="true"
                    class="close"
                  ></ion-icon>
                </div>
              </button>

              <div class="card-content">
                <p>
                  Passport applications typically take 7–21 working days
                  depending on availability and government processing. KRA PIN
                  registrations can often be completed in 1–3 business days,
                  while amendments and certificates may take slightly longer.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div class="faq-card">
              <button class="card-action" data-accordion-action>
                <h3 class="h3 card-title">
                  03. Can EagleCore help with international visas from Kenya?
                </h3>

                <div class="action-icon">
                  <ion-icon
                    name="add-outline"
                    aria-hidden="true"
                    class="open"
                  ></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    aria-hidden="true"
                    class="close"
                  ></ion-icon>
                </div>
              </button>

              <div class="card-content">
                <p>
                  Yes. We support visa applications for the USA, Canada,
                  Schengen countries, Australia, Mexico and other destinations.
                  Our services include document preparation, application review,
                  embassy submission guidance and follow-up until approval.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div class="faq-card">
              <button class="card-action" data-accordion-action>
                <h3 class="h3 card-title">
                  04. What documents do I need for a work permit or student
                  pass?
                </h3>

                <div class="action-icon">
                  <ion-icon
                    name="add-outline"
                    aria-hidden="true"
                    class="open"
                  ></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    aria-hidden="true"
                    class="close"
                  ></ion-icon>
                </div>
              </button>

              <div class="card-content">
                <p>
                  Most applications need a valid passport copy, passport photos,
                  supporting identification and a sponsor or admission letter.
                  Specific requirements vary by permit type, but we will guide
                  you through the exact checklist for your work permit, student
                  pass or special pass.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div class="faq-card">
              <button class="card-action" data-accordion-action>
                <h3 class="h3 card-title">
                  05. How do I start my service request with EagleCore?
                </h3>

                <div class="action-icon">
                  <ion-icon
                    name="add-outline"
                    aria-hidden="true"
                    class="open"
                  ></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    aria-hidden="true"
                    class="close"
                  ></ion-icon>
                </div>
              </button>

              <div class="card-content">
                <p>
                  Start by contacting us through the WhatsApp link or enquiry
                  form on the site. We will review your needs, confirm required
                  documents and recommend the fastest route for your Kenyan or
                  international application.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
