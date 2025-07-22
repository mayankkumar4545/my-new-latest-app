import React, { useState, useEffect } from "react";
import "./courses.css";

// --- Mock Data ---
// In a real app, you would fetch this data from an API.
// Using placeholder images. Replace with your actual SVG or image imports.
const allCourses = {
  new: [
    {
      id: "n1",
      category: "Marketing",
      title: "Creative Writing for Beginners",
      image: "/assets/full-stack-developer.webp",
      bgColor: "#f3eefc",
      categoryBg: "#e0d4f5",
    },
    {
      id: "n2",
      category: "Psychology",
      title: "Public Speaking and Leadership",
      image: "/assets/full-stack-developer.webp",
      bgColor: "#f3eefc",
      categoryBg: "#fdecc8",
    },
    {
      id: "n3",
      category: "Computer Science",
      title: "Data Visualization Techniques",
      image: "/assets/full-stack-developer.webp",
      bgColor: "#f3eefc",
      categoryBg: "#e0e0e0",
      border: "1px solid #eee",
    },
    {
      id: "n4",
      category: "Computer Science",
      title: "Data Visualization Techniques",
      image: "/assets/full-stack-developer.webp",
      bgColor: "#f3eefc",
      categoryBg: "#e0e0e0",
      border: "1px solid #eee",
    },
  ],
  recommended: [
    {
      id: "r1",
      category: "Business",
      title: "Fundamentals of Project Management",
      image: "/assets/full-stack-developer.webp",
      bgColor: "#f3eefc",
      categoryBg: "#cce5ff",
    },
    {
      id: "r2",
      category: "Design",
      title: "UI/UX Design Principles for Beginners",
      image: "/assets/full-stack-developer.webp",
      bgColor: "#f3eefc",
      categoryBg: "#d4edda",
    },
    {
      id: "r3",
      category: "Finance",
      title: "Personal Finance and Investment Strategies",
      image: "/assets/full-stack-developer.webp",
      bgColor: "#f3eefc",
      categoryBg: "#fff3cd",
    },
    {
      id: "r4",
      category: "Health",
      title: "Introduction to Nutrition and Wellness",
      image: "/assets/full-stack-developer.webp",
      bgColor: "#f3eefc",
      categoryBg: "#f8d7da",
    },
  ],
  popular: [
    {
      id: "p1",
      category: "Development",
      title: "Full-Stack Web Development Bootcamp",
      image: "/assets/full-stack-developer.webp",
      textColor: "black",
      bgColor: "#f3eefc",
      btnColor: "#17a2b8",
    },
    {
      id: "p2",
      category: "Data Science",
      title: "Machine Learning A-Z: Hands-On Python",
      image: "/assets/full-stack-developer.webp",
      bgColor: "#f3eefc",
      categoryBg: "#b8e6f2",
    },
    {
      id: "p3",
      category: "Marketing",
      title: "The Complete Digital Marketing Course",
      image: "/assets/full-stack-developer.webp",
      bgColor: "#f3eefc",
      categoryBg: "#ffdec7",
    },
    {
      id: "p4",
      category: "Photography",
      title: "Mastering Photography: A Comprehensive Guide",
      image: "/assets/full-stack-developer.webp",
      bgColor: "#f3eefc",
      categoryBg: "#c8e6c9",
    },
  ],
};

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState("new");
  const [displayedCourses, setDisplayedCourses] = useState(allCourses.new);

  useEffect(() => {
    // This effect runs when the activeFilter changes
    setDisplayedCourses(allCourses[activeFilter]);
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="courses-page-wrapper">
      <div className="container py-5">
        {/* Top Header Section */}
        <div className="row mb-5 align-items-end">
          <div className="col-lg-7 col-md-12">
            <h1 className="main-heading">
              Take your <span className="highlight-text">knowledge</span>
              <br />a degree further
            </h1>
          </div>
          <div className="col-lg-5 col-md-12 text-lg-end mt-4 mt-lg-0">
            <div className="header-meta-info">
              <div className="d-flex align-items-center justify-content-lg-end mb-3">
                <p className="sub-heading mb-0">
                  Make education work for you with flexible online courses from
                  leading schools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons Section */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          <button
            onClick={() => handleFilterClick("new")}
            className={`btn filter-btn btn-outline-dark ${
              activeFilter === "new" ? "active" : ""
            }`}
          >
            New courses
          </button>
          <button
            onClick={() => handleFilterClick("recommended")}
            className={`btn filter-btn btn-outline-dark ${
              activeFilter === "recommended" ? "active" : ""
            }`}
          >
            Recommended
          </button>
          <button
            onClick={() => handleFilterClick("popular")}
            className={`btn filter-btn btn-outline-dark ${
              activeFilter === "popular" ? "active" : ""
            }`}
          >
            Most popular
          </button>
        </div>

        {/* Course Cards Section */}
        <div className="row g-4">
          {displayedCourses.map((course) => (
            <div key={course.id} className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="course-card h-100"
                style={{
                  backgroundColor: course.bgColor,
                  color: course.textColor || "#212529",
                  border: course.border || "none",
                }}
              >
                <div className="card-body d-flex flex-column p-4">
                  <div className="mb-4">
                    <span
                      className="card-category"
                      style={{
                        backgroundColor: course.categoryBg,
                        color: course.categoryColor || "#212529",
                      }}
                    >
                      {course.category}
                    </span>
                  </div>
                  <div className="card-image-wrapper my-auto">
                    <img
                      src={course.image}
                      alt={`${course.title} illustration`}
                      className="card-img-top"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/200x120/ccc/FFF?text=Error";
                      }}
                    />
                  </div>
                  <div className="mt-auto pt-4">
                    <h5 className="card-title">{course.title}</h5>
                    <button className="btn btn-details w-100 btn-outline-secondary text-dark">
                      More details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
