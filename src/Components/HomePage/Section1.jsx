import React from "react";
import section1 from "../../assets/63bfe725e703031c025ab7a3_DashboardHomepage (4) (1).png";
import section1Background from "../../assets/635e8d2a61099e05c32ae3e6_background.png";

function Section1() {
  return (
    <>
      <section className="section-1">
        <img
          src={section1Background}
          alt="background"
          className="section-1-background"
        />
        <img src={section1} alt="section-1" className="section-1-icon" />
      </section>
    </>
  );
}

export default Section1;
