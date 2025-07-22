import React, { useState } from "react";
// Make sure to create and link this CSS file.
import "./informationCourses.css";

// Data for the different course subjects. This makes the component easy to update.
const subjectsData = [
  {
    id: "psychology",
    name: "Psychology & Mental Health",
    description:
      "Whether tackling trauma, mastering mindfulness or gearing up for a career as a psychologist, our expert-led courses and credentials will help you achieve career success and satisfaction.",
  },
  {
    id: "healthcare",
    name: "Healthcare & Medicine",
    description:
      "Discover the world of healthcare, from patient care to medical research. Our courses provide the foundation for a rewarding career in this vital sector.",
  },
  {
    id: "it",
    name: "IT & Computer Science",
    description:
      "From coding and software development to cybersecurity and data science, our IT courses are designed to equip you with the latest in-demand tech skills.",
  },
  {
    id: "copywriting",
    name: "Copywriting & Marketing",
    description:
      "Learn the art of persuasive writing and digital marketing strategies. These courses will help you craft compelling messages that convert and engage audiences.",
  },
  {
    id: "business",
    name: "Business & Management",
    description:
      "Lead teams, manage projects, and drive business growth with our comprehensive courses in management, finance, and entrepreneurship.",
  },
];

// A self-contained SVG component for the illustration to ensure it scales correctly.
// Added classNames to groups for animation.
const ConversationGraphic = () => (
  <svg viewBox="0 0 300 200" className="conversation-svg">
    <g className="svg-person-1">
      <circle cx="155" cy="80" r="55" fill="#212121" />
      <path
        d="M155,135 C 120,135 110,180 140,195 L 170,195 C 200,180 190,135 155,135 Z"
        fill="#212121"
      />
      <path
        d="M135 70 Q 140 60, 145 70"
        stroke="white"
        fill="none"
        strokeWidth="2"
      />
      <circle cx="165" cy="75" r="2" fill="white" />
      <path
        d="M150 95 Q 155 105, 160 95"
        stroke="white"
        fill="none"
        strokeWidth="2"
      />
    </g>
    <g className="svg-speech-bubble">
      <path
        d="M130,120 C 50,120 40,40 130,50 C 220,60 230,130 130,120 Z"
        fill="var(--color-secondary)"
      />
      <path
        d="M 230 140 C 220 130, 200 125, 180 125"
        fill="none"
        stroke="var(--color-dark)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
    <g className="svg-person-2">
      <path
        d="M220,198 L220,160 C220,140 240,130 250,130 C270,130 290,145 290,165 L290,198 Z"
        fill="#212121"
      />
      <circle
        cx="255"
        cy="125"
        r="25"
        fill="white"
        stroke="#212121"
        strokeWidth="3"
      />
      <path
        d="M245 120 Q 250 115, 255 120"
        stroke="#212121"
        fill="none"
        strokeWidth="2"
      />
      <circle cx="262" cy="123" r="1.5" fill="#212121" />
      <path
        d="M250 132 Q 255 137, 260 132"
        stroke="#212121"
        fill="none"
        strokeWidth="2"
      />
      <path
        d="M250,132 C 250,142 260,142 260,132 Q 255 137 250 132"
        fill="#212121"
      />
    </g>
  </svg>
);

const InformationCourses = () => {
  const [activeSubject, setActiveSubject] = useState(subjectsData[0].id);

  const activeSubjectData = subjectsData.find(
    (subject) => subject.id === activeSubject
  );

  return (
    <div className="info-courses-wrapper py-5 px-3 mt-3 mb-3">
      <div className="container position-relative">
        <div className="background-lines"></div>

        <div className="row mb-5">
          <div className="col">
            <h1 className="info-courses-heading">
              Explore <br />
              top <span className="text-highlight">subjects</span>
            </h1>
          </div>
        </div>

        <div className="row align-items-center ">
          {/* Left Column: Content */}
          <div className="col-lg-7">
            <div className="subject-buttons-container mb-4">
              {subjectsData.map((subject) => (
                <button
                  key={subject.id}
                  className={`btn btn-outline-secondary btn-subject ${
                    activeSubject === subject.id ? "active" : ""
                  }`}
                  onClick={() => setActiveSubject(subject.id)}
                >
                  {subject.name}
                </button>
              ))}
            </div>

            {/* Added a key to re-trigger animation on change */}
            <p key={activeSubjectData.id} className="subject-description my-4">
              {activeSubjectData.description}
            </p>

            <div className="d-flex align-items-center flex-wrap gap-4 mt-5 action-links">
              <button className="btn btn-explore btn-outline-success">
                Explore courses
              </button>
              <a href="#all-subjects" className="view-all-link ">
                View all subjects &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-5 mt-5 mt-lg-0 d-flex justify-content-center">
            {/* Added a key to re-trigger animation on change */}
            <ConversationGraphic key={activeSubjectData.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCourses;
