import React from "react";
import "./ContactForm.css";
const ContactFrom = () => {
  return (
    <div className="contact-container">
      <div className="contact-address">
        <div className="address-title">Let’s get in touch</div>
        <div className="address-message">
          we’re open for any suggesuggestion or just to have a chat
        </div>
        <div className="address-details">
          <div className="icon-container">
            <img
              src="/Location icon.png"
              alt="Location"
              className="address-icon"
            />
          </div>
          <div className="address-description">
            Address 1:{" "}
            <span className="light-line">
              2nd Floor, Indian Transport Plaza, Tawakal Layout, Wadi, Nagpur
              440023
            </span>
          </div>
        </div>
        <div className="address-details">
          <div className="icon-container">
            <img src="/Phone icon.png" alt="Phone" className="address-icon" />
          </div>
          <div className="address-description">Phone: +91 9823197963</div>
        </div>
        <div className="address-details">
          <div className="icon-container">
            <img
              src="/paper_plane_icon.png"
              alt="Paper"
              className="address-icon"
            />
          </div>
          <div className="address-description">Email: sales@finkeep.in</div>
        </div>
        <div className="address-details">
          <div className="icon-container">
            <img
              src="/earth_asia_icon.png"
              alt="Earth"
              className="address-icon"
            />
          </div>
          <div className="address-description">Website: finkeep.in</div>
        </div>
      </div>
      <div className="contact-form-container">
        <div className="contact-form-title">Get in touch</div>
        <div></div>
        <form className="contact-form">
          <div className="name-email">
            <div className="input-container">
              <label for="input-field">FIRST NAME</label>
              <input type="text" id="input-field" placeholder="Name" />
            </div>
            <div className="input-container">
              <label for="input-field">EMAIL ADDRESS</label>
              <input type="text" id="input-field" placeholder="Email" />
            </div>
          </div>
          <div className="input-container">
            <label for="input-field">SUBJECT</label>
            <input type="text" id="input-field" placeholder="Subject" />
          </div>
          <div className="input-container">
            <label for="input-field">MESSAGE</label>
            <input type="text" id="input-field" placeholder="Message" />
          </div>
          <button type="submit" className="contact-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
