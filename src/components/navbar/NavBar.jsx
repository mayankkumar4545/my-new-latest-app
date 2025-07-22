import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  // State to control navbar visibility
  const [isVisible, setIsVisible] = useState(true);
  // Ref to hold the timeout ID
  const scrollTimeout = useRef(null);

  const handleScroll = () => {
    // Hide the navbar as soon as scrolling starts
    setIsVisible(false);

    // Clear the previous timeout if it exists
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Set a new timeout to show the navbar after scrolling has stopped
    // The navbar will reappear 250ms after the last scroll event.
    scrollTimeout.current = setTimeout(() => {
      setIsVisible(true);
    }, 250);
  };

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the listener and clear any pending timeout
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    // Conditionally add the 'navbar--hidden' class based on the isVisible state
    <nav
      className={`navbar navbar-expand-lg learnify-navbar learnify-nav-container ${
        !isVisible ? "navbar--hidden" : ""
      }`}
    >
      <div className="container">
        {/* Brand Name */}
        <Link className="navbar-brand" to="/">
          My New<span className="brand-text-orange">App</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {/* Subjects Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="subjectsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Subjects
              </a>
              <ul className="dropdown-menu" aria-labelledby="subjectsDropdown">
                <li>
                  <Link className="dropdown-item" to="/subjects/tech">
                    Tech Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/subjects/non-tech">
                    Non-tech Courses
                  </Link>
                </li>
              </ul>
            </li>

            {/* Courses Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="coursesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                <li>
                  <Link className="dropdown-item" to="/courses/new">
                    New courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/courses/recommended">
                    Recommended
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/courses/popular">
                    Most popular
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/degrees">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="d-flex align-items-center">
            <Link to="/signup" className="btn btn-signup me-2">
              Sign up
            </Link>
            <Link to="/login" className="btn btn-login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
