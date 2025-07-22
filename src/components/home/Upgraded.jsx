import React from "react";
// Make sure to create and link this CSS file with the specified name.
import "./upgraded.css";

/**
 * A self-contained SVG component for the puzzle graphic to ensure
 * it scales correctly and has no external dependencies.
 */
const PuzzleGraphic = () => (
  <svg
    viewBox="0 0 200 180"
    xmlns="http://www.w3.org/2000/svg"
    className="puzzle-svg"
  >
    {/* White hands holding the puzzle pieces */}
    <path
      d="M 55 180 C 40 170 30 145 40 125 L 70 75 L 85 85 L 55 135 C 50 150 60 165 75 170 L 100 175 Z"
      fill="white"
      stroke="#212121"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M 145 180 C 160 170 170 145 160 125 L 130 75 L 115 85 L 145 135 C 150 150 140 165 125 170 L 100 175 Z"
      fill="white"
      stroke="#212121"
      strokeWidth="3"
      strokeLinejoin="round"
    />

    {/* The four puzzle pieces, grouped and rotated slightly for a dynamic look */}
    <g transform="rotate(-12, 100, 70)">
      {/* Top-left puzzle piece (Red) */}
      <path
        d="M50 70 V 20 H 100 V 70 H 90 C 90 75 85 80 80 80 C 75 80 75 90 80 90 C 85 90 90 85 90 80 H 100"
        fill="#ea4335"
        stroke="#212121"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Top-right puzzle piece (Yellow-Orange from image) */}
      <path
        d="M100 20 H 150 V 70 H 100 V 60 C 105 60 110 55 110 50 C 110 45 120 45 120 50 C 120 55 115 60 110 60 V 70"
        fill="#fbbc05"
        stroke="#212121"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Bottom-right puzzle piece (Black) */}
      <path
        d="M150 70 V 120 H 100 V 70 H 110 C 110 65 115 60 120 60 C 125 60 125 50 120 50 C 115 50 110 55 110 50 H 100"
        fill="#212121"
        stroke="#212121"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Bottom-left puzzle piece (Purple) */}
      <path
        d="M50 120 H 100 V 110 C 100 105 95 100 90 100 C 85 100 85 90 90 90 C 95 90 100 95 100 100 V 70 H 50 V 120"
        fill="#a050d7"
        stroke="#212121"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const Upgraded = () => {
  return (
    // A wrapper to provide padding and a background color for the page
    <div className="upgrade-component-wrapper py-5 px-3">
      <div className="container">
        {/* The main card with the yellow background and rounded corners */}
        <div className="upgrade-card shadow-sm p-4 p-md-5">
          <div className="row align-items-center">
            {/* Text Content Column */}
            <div className="col-lg-7 col-md-12 text-center text-lg-start">
              <h1 className="upgrade-heading">
                Upgrade your skills
                <br />
                with <strong>FREE</strong> online courses
              </h1>
              <p className="upgrade-subheading my-4 ms-0">
                Ready to gain in-demand skills to kickstart your career? The
                Learnify Click Start programm offers 29 FREE online courses to
                help you get your first experience in your chosen profession.
              </p>
              <button className="btn btn-start-now">Start now</button>
            </div>

            {/* Image/Graphic Column */}
            <div className="col-lg-5 col-md-12 mt-5 mt-lg-0 d-flex justify-content-center align-items-center">
              <PuzzleGraphic />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgraded;
