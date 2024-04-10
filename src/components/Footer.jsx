import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-head">
        <div className="brand-img-container">
          <img src="/finkeep_white.png" alt="brand img" className="brand-img" />
        </div>
        <div className="social-media-icon-container">
          <img src="/x_icon.png" alt="x" className="footer-icon" />
          <img src="/insta_icon.png" alt="instagram" className="footer-icon" />
          <img
            src="/linkedin_icon.png"
            alt="linkedin"
            className="footer-icon"
          />
        </div>
      </div>
      <div className="footer-body">
        <div className="footer-nav-container">
          <div className="footer-nav" style={{ marginBottom: "10px" }}>
            <div className="footer-nav-title">Company</div>
            <div className="footer-nav-whiteline"></div>
          </div>
          <div className="footer-nav-item">Home</div>
          <div className="footer-nav-item">Contact Us</div>
          <div className="footer-nav-item">About Us</div>
          <div className="footer-nav-item">Log In</div>
        </div>
        <div className="footer-nav-container">
          <div className="footer-nav" style={{ marginBottom: "10px" }}>
            <div className="footer-nav-title">Offerings</div>
            <div className="footer-nav-whiteline"></div>
          </div>
          <div className="footer-nav-item">Annual Accounting</div>
          <div className="footer-nav-item">Periodical Accounting</div>
          <div className="footer-nav-item">Clean Up Accounting</div>
          <div className="footer-nav-item">Integration & Mis Report</div>
        </div>
        <div className="footer-nav-container">
          <div className="footer-nav" style={{ marginBottom: "10px" }}>
            <div className="footer-nav-title">Discover</div>
            <div className="footer-nav-whiteline"></div>
          </div>
          <div className="footer-nav-item">About Us</div>
          <div className="footer-nav-item">Contact Us</div>
        </div>
        <div className="footer-nav-container">
          <div className="footer-nav" style={{ marginBottom: "10px" }}>
            <div className="footer-nav-title">Contact Us</div>
            <div className="footer-nav-whiteline"></div>
          </div>
          <div className="footer-input-field">
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                color: "black",
                width: "100%",
                padding: "8px",
                marginBottom: "8px",
                borderRadius: "4px",
                outline: "none",
              }}
            />
          </div>
          <div className="footer-btn">
            <button
              style={{
                width: "100%",
                padding: "8px 16px",
                borderRadius: "4px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="footer-foot">
        <div>Copyright © 2024 Finkeep All rights reserved</div>
        <div>Privacy policy, Terms & condition</div>
      </div>
    </div>
  );
};

export default Footer;
