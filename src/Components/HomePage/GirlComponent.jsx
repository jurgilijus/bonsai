import React from "react";
import girl from "../../assets/Hero home girl.png";
import branch from "../../assets/branch_main.png";
import profile from "../../assets/profile.svg";
import check from "../../assets/check.svg";
import calculator from "../../assets/calculator.svg";

function GirlComponent() {
  return (
    <div className="girl-container">
      <div className="girl-background"></div>
      <img src={girl} alt="girl" className="girl" />
      <img src={branch} alt="branch" className="branch" />

      <div className="notification-container">
        <div className="notification position-absolute1">
          <img src={profile} alt="profile" className="notification-icon" />
          <div>
            <p className="notification-title">New lead</p>
            <p className="notification-text">Intake form completed</p>
          </div>
        </div>
        <div className="notification position-absolute2">
          <img src={check} alt="check" className="notification-icon" />
          <div>
            <p className="notification-title">$4,500</p>
            <p className="notification-text">Invoice paid</p>
          </div>
        </div>
        <div className="notification position-absolute3">
          <img
            src={calculator}
            alt="calculator"
            className="notification-icon"
          />
          <div>
            <p className="notification-title">$300</p>
            <p className="notification-text">Expense deducted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GirlComponent;
