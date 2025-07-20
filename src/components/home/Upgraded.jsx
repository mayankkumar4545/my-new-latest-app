import React from "react";
import "./upgraded.css";

export default function Upgraded() {
  return (
    <div className="upgraded-container container-fluid py-5 px-4 px-md-5">
      <div className="row align-items-center upgraded-box mx-auto">
        <div className="col-md-7 text-md-start text-center">
          <h2 className="upgraded-heading">
            Upgrade your <span className="highlight">skills</span> with{" "}
            <span className="highlight-free">FREE</span> online courses
          </h2>
          <p className="upgraded-description mt-3">
            Ready to gain in-demand skills to kickstart your career? The
            Learnify Click Start program offers 25 FREE online courses to help
            you get your first experience in your chosen profession
          </p>
          <button className="start-btn mt-3">Start now</button>
        </div>
        <div className="col-md-5 text-center mt-4 mt-md-0">
          <img
            src="/assets/puzzle-hands.png"
            alt="puzzle hands"
            className="img-fluid upgraded-image"
          />
        </div>
      </div>
    </div>
  );
}
