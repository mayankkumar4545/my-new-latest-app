import React, { useState } from "react";
import "./courses.css";

const courseTabs = {
  "New courses": [
    {
      title: "Java Full Stack Development for Beginners",
      category: "Full Stack",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Public Speaking and Leadership",
      category: "Psychology",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Data Visualization Techniques",
      category: "Computer Science",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Digital Illustration with Adobe Illustrator",
      category: "Computer Science",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Digital Illustration with Adobe Illustrator",
      category: "Computer Science",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Digital Illustration with Adobe Illustrator",
      category: "Computer Science",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Digital Illustration with Adobe Illustrator",
      category: "Computer Science",
      imageClass: "/assets/full-stack-developer.webp",
    },
  ],
  Recommended: [
    {
      title: "Storytelling for Impact",
      category: "Marketing",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Behavioral Psychology",
      category: "Psychology",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Storytelling for Impact",
      category: "Marketing",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Behavioral Psychology",
      category: "Psychology",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Behavioral Psychology",
      category: "Psychology",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Behavioral Psychology",
      category: "Psychology",
      imageClass: "/assets/full-stack-developer.webp",
    },
  ],
  "Most popular": [
    {
      title: "Advanced Data Science",
      category: "Computer Science",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "UX/UI Design Basics",
      category: "Design",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Advanced Data Science",
      category: "Computer Science",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "UX/UI Design Basics",
      category: "Design",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "Advanced Data Science",
      category: "Computer Science",
      imageClass: "/assets/full-stack-developer.webp",
    },
    {
      title: "UX/UI Design Basics",
      category: "Design",
      imageClass: "/assets/full-stack-developer.webp",
    },
  ],
};

export default function Courses() {
  const [activeTab, setActiveTab] = useState("New courses");

  return (
    <div className="courses-container container-fluid y-6 mb-4">
      <div className="row align-items-start justify-content-between mb-3 ms-2 flex-wrap px-3 px-md-5">
        <div className="col-md-6 text-md-start text-center">
          <h1 className="courses-heading mt-3">
            Take your <span className="highlight">knowledge</span> a degree
            further
          </h1>
          <div className="d-flex flex-wrap gap-2 mt-4 mb-1 justify-content-md-start justify-content-center">
            {Object.keys(courseTabs).map((tab, index) => (
              <button
                key={index}
                className={`filter-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab} ({courseTabs[tab].length})
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="row justify-content-center gap-3 flex-wrap">
        {courseTabs[activeTab].map((course, idx) => (
          <div className="course-card col-md-2 col-sm-5" key={idx}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${course.imageClass})` }}
            ></div>
            <div className="card-label">{course.category}</div>
            <div className="card-title">{course.title}</div>
            <button className="more-btn">More details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
