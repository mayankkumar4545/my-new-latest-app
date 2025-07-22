import React from "react";
import "./footer.css"; // Your existing CSS file

const Footer = () => {
  // This function handles the scroll-to-top logic
  const handleScrollToTop = (event) => {
    // Prevents the default link behavior (which adds '#' to the URL)
    event.preventDefault();

    // Scrolls the window to the top with a smooth animation
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="closetnow-footer">
      <div className="container pt-5 pb-4">
        <div className="row gy-4">
          {/* Column 1: Logo and Brand Name */}
          <div className="col-lg-4 col-md-12 col-12 text-center text-lg-start">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start h-100">
              <div className="logo-grid me-lg-4 mb-3 mb-lg-0">
                <div className="logo-diamond-wrapper">
                  <div className="logo-diamond"></div>
                </div>
                <div className="logo-square"></div>
                <div className="logo-diamond-wrapper">
                  <div className="logo-diamond"></div>
                </div>
                <div className="logo-square"></div>
                <div></div>
                <div className="logo-square"></div>
                <div className="logo-diamond-wrapper">
                  <div className="logo-diamond"></div>
                </div>
                <div className="logo-square"></div>
                <div className="logo-diamond-wrapper">
                  <div className="logo-diamond"></div>
                </div>
              </div>
              <span className="brand-name">My New App</span>
            </div>
          </div>

          {/* Column 2: About Us */}
          <div className="col-lg-2 col-md-4 col-6">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Mission</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col-lg-3 col-md-4 col-6">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">FAQ's</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="col-lg-3 col-md-4 col-12">
            <h5>Social</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-3">
            <div className="text-center text-sm-start mb-2 mb-sm-0">
              <span className="copyright-text">
                Copyright &copy; My New App
              </span>
              <a href="#" className="terms-link">
                Terms of Service
              </a>
            </div>
            <div className="back-to-top-wrapper">
              {/* The onClick event is added here to trigger the scroll function */}
              <a
                href="#top"
                onClick={handleScrollToTop}
                className="back-to-top-link"
              >
                Back to top <span className="arrow-box">↑</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
