import React from "react";
import "./contactUs.css";

// You can replace this with your actual image import
const contactImage =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop";

const CheckmarkIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="#34D399" />
    <path
      d="M8.5 12.5L11 15L15.5 10"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactUs = () => {
  return (
    // Add 'theme-light' or 'theme-blue' class here to switch themes
    <div className="contact-us-page">
      <div className="contact-us-container">
        <div className="container-fluid">
          <div className="row g-0">
            {/* Left Column */}
            <div className="col-lg-6 p-4 p-md-5">
              <div className="contact-info-left">
                <h1 className="main-heading">Tell us about your project</h1>
                <ul className="list-unstyled checklist my-4">
                  <li className="d-flex align-items-center mb-2">
                    <CheckmarkIcon />
                    <span className="ms-3">
                      We will respond to you within 12 hours
                    </span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <CheckmarkIcon />
                    <span className="ms-3">We'll sign an NDA if requested</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckmarkIcon />
                    <span className="ms-3">
                      Access to dedicated consultant specialists
                    </span>
                  </li>
                </ul>
              </div>

              <div className="contact-box">
                <p className="contact-email">
                  <a href="mailto:hello@asiaagency.gmail.com">
                    hello@asiaagency.gmail.com
                  </a>
                </p>
                <p className="contact-prompt">
                  Always busy and want to book an exact time to call?
                </p>
                <a href="#" className="btn btn-book-call">
                  Book a free call
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center p-4">
              <div className="image-wrapper">
                <img
                  src={contactImage}
                  alt="Business professionals collaborating"
                  className="img-fluid"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x800/111827/4B5563?text=Our+Team";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
