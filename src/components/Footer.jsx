import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleContactUs = (email) => {
    // Validate email format (you may need to improve this validation)
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Log data before sending to server
    console.log("Data sent to server:", { receiver_email: email });

    // Send email to backend
    fetch(`http://127.0.0.1:8000/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ receiver_email: email }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Email sent successfully!");
          setEmail(""); // Clear the email input
        } else {
          throw new Error("Failed to send email.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send email. Please try again later.");
      });
  };

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
          <div className="footer-nav-item">
            <Link to="/">Home</Link>
          </div>
          <div className="footer-nav-item">
            <Link to="/contactus">Contact Us</Link>
          </div>
          <div className="footer-nav-item">
            <Link to="/aboutus">About Us</Link>
          </div>
          <div className="footer-nav-item">Log In</div>
        </div>
        <div className="footer-nav-container">
          <div className="footer-nav" style={{ marginBottom: "10px" }}>
            <div className="footer-nav-title">Offerings</div>
            <div className="footer-nav-whiteline"></div>
          </div>
          <div className="footer-nav-item">
            <Link to="/offerings">Annual Accounting</Link>
          </div>
          <div className="footer-nav-item">
            <Link to="/offerings">Periodical Accounting</Link>
          </div>
          <div className="footer-nav-item">
            <Link to="/offerings">Clean Up Accounting</Link>
          </div>
          <div className="footer-nav-item">
            <Link to="/offerings">Integration & Mis Report</Link>
          </div>
        </div>
        <div className="footer-nav-container">
          <div className="footer-nav" style={{ marginBottom: "10px" }}>
            <div className="footer-nav-title">Discover</div>
            <div className="footer-nav-whiteline"></div>
          </div>
          <div className="footer-nav-item">
            <Link to="/aboutus">About Us</Link>
          </div>
          <div className="footer-nav-item">
            <Link to="/contactus">Contact Us</Link>
          </div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer-btn">
            <button
              onClick={() => handleContactUs(email)}
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
