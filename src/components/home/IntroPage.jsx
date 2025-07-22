import React from "react";
import "./intro.css";
import "bootstrap/dist/css/bootstrap.min.css";

const IntroPage = () => {
  // Animated stars
  const animatedStars = (
    <>
      <div className="star" style={{ top: "50px", left: "20%" }}></div>
      <div className="star" style={{ top: "150px", left: "40%" }}></div>
      <div className="star" style={{ top: "300px", left: "70%" }}></div>
      <div className="star" style={{ top: "90px", left: "85%" }}></div>
      <div className="star" style={{ top: "220px", left: "10%" }}></div>
    </>
  );

  // Animated cloud layers
  const cloudLayers = (
    <>
      <div className="cloud one"></div>
      <div className="cloud two"></div>
      <div className="cloud three"></div>
    </>
  );

  return (
    <div className="intro-page container-fluid mb-2">
      {cloudLayers}
      {animatedStars}
      <div className="row align-items-center px-4 px-md-5">
        {/* Left Column */}
        <div className="col-lg-7 mb-5 mb-lg-0">
          <h1 className="headline">
            Find the right <span className="highlight">course</span> for you
          </h1>
          <p className="description">
            See your personalised recommendations based on your interests and
            goals
          </p>
          <div className="button-group d-flex align-items-center gap-3 mt-4 flex-wrap">
            <button className="btn btn-orange">Find course</button>
            <a href="#" className="blog-link">
              View our blog <span className="arrow">↗</span>
            </a>
          </div>

          <div className="stats-wrapper d-flex flex-wrap gap-3 mt-5">
            <div className="stat-box stat-education">
              <div className="tag">Education</div>
              <div className="stat-value">+40</div>
              <div className="stat-label">subjects</div>
            </div>
            <div className="stat-box stat-online">
              <div className="tag">Online</div>
              <div className="stat-value">+120</div>
              <div className="stat-label">courses</div>
            </div>
            <div className="stat-box stat-reviews">
              <div className="tag rating-stars">
                ★★★★★ <span className="rating">5.0</span>
              </div>
              <div className="stat-value">+180k</div>
              <div className="stat-label">learner reviews</div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-4 text-center position-relative">
          <img
            src="/assets/img-girl.png"
            alt="illustration"
            className="main-illustration img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
