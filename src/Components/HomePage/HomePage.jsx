import React from "react";
import { Link } from "react-router-dom";
import Section1 from "./Section1";
import GirlComponent from "./GirlComponent";

// CSS
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="homepage-alignment">
        <div className="homepage-container">
          <h1 className="homepage-title">
            Growing <br /> your business with confidence
          </h1>
          <p className="homepage-text">
            Bonsai is the only tool you need to run your business. Manage your
            clients, deliver great work, get paid, and track your finances.
          </p>
          <Link className="btn homepage-btn">Start free</Link>
          <div className="sign-up-container">
            <input
              type="text"
              className="email-sign-up-text"
              placeholder="Enter your email"
            />
            <Link className="btn homepage-btn-bigger">Start free</Link>
          </div>
        </div>
        <GirlComponent />
      </div>
      <Section1 />
    </>
  );
}

export default HomePage;
