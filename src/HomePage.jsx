import React from "react";
import home from "./assets/home.png";

import "./Components/Header/Header.css";

function HomePage() {
  return (
    <div className="home-conteiner">
      <img className="home" src={home} alt="home" />
      <img className="home" src={home} alt="home" />
    </div>
  );
}

export default HomePage;
