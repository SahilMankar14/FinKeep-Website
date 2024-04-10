import React from "react";
import "./BlueBox.css";

const BlueBox = () => {
  return (
    <div className="box-container">
      <div className="box-content">
        <div className="box-title">ACCOUNTING DONE AI-MAZINGLY</div>
        <div className="box-subtitle">
          You run operations, while we keep the books
        </div>
        <button className="box-button">Let’s FinKeep</button>
      </div>
      <div className="box-image">
        <img src="/dashboard.png" alt="dashboard image" />
      </div>
    </div>
  );
};

export default BlueBox;
