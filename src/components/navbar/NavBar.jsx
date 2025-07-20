import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand logo-text" href="#">
          <span className="logo-highlight">New</span>App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Subjects
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Degrees
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                For business
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light signup-btn">
                Sign up
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary login-btn">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
