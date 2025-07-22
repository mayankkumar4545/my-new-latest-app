import React from "react";
import "./aboutPage.css";

// You can replace this with your actual image import
const aboutImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <div className="container pt-0">
        <div className="row g-5 align-items-center">
          {/* Left Column: Text Content */}
          <div className="col-lg-6">
            <div className="text-content-wrapper">
              <p className="tagline mb-3">How It Started</p>
              <h1 className="main-heading">
                Our Dream is Global Learning Transformation
              </h1>
              <p className="description">
                Kawruh was founded by Robert Anderson, a passionate lifelong
                learner, and Maria Sanchez, a visionary educator. Their shared
                dream was to create a digital haven of knowledge accessible to
                all. United by their belief in the transformational power of
                education, they embarked on a journey to build 'Kawruh.' With
                relentless dedication, they gathered a team of experts and
                launched this innovative platform, creating a global community
                of eager learners, all connected by the desire to explore,
                learn, and grow.
              </p>
            </div>
          </div>

          {/* Right Column: Image and Stats */}
          <div className="col-lg-6">
            <div className="image-and-stats-wrapper">
              {/* Image */}
              <div className="image-container mb-4 mt-4">
                <img
                  src={aboutImage}
                  alt="Team collaborating"
                  className="img-fluid"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/e0e0e0/FFF?text=Image+Not+Found";
                  }}
                />
              </div>

              {/* Stats Grid */}
              <div className="row g-4">
                <div className="col-6">
                  <div className="stat-box">
                    <p className="stat-number">3.5</p>
                    <p className="stat-label">Years Experience</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-box">
                    <p className="stat-number">23</p>
                    <p className="stat-label">Project Challenge</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-box">
                    <p className="stat-number">830+</p>
                    <p className="stat-label">Positive Reviews</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-box">
                    <p className="stat-number">100K</p>
                    <p className="stat-label">Trusted Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
