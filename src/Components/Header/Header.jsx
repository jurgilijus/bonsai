import React, { useState } from "react";
import logo from "../../assets/bonsaiLogo.png";
import { Link } from "react-router-dom";
import btn from "../../assets/menuMobileBtn.svg";
import { webMenu } from "./MenuItems";
import { menu } from "./MobileMenuItems";
import MobileMenu from "./MobileMenu";
// CSS
import "./Header.css";

function Header() {
  const [hideMenu, setHideMenu] = useState(false);

  const handleHideMenu = (e) => {
    setHideMenu(!hideMenu);
  };

  // console.log(webMenu);

  return (
    <header className="header-conteiner">
      <div>
        <Link to="/">
          <img src={logo} alt="Bonsai logo" loading="lazy" />
        </Link>
      </div>
      {/* Web menu */}
      <nav>
        {webMenu.map((item) => {
          return (
            <div key={item.title}>
              <p>{item.title}</p>
            </div>
          );
        })}
      </nav>
      {/* Mobile */}
      <div className="mobile-menu-btn" onClick={handleHideMenu}>
        <img src={btn} alt="Mobile menu btn" />
      </div>
      <nav
        className={
          !hideMenu ? "mobile-menu-conteiner" : "mobile-menu-conteiner hide"
        }
      >
        <div className="mobile-menu">
          <div className="menu underline">
            {menu.map((item, index) => {
              return (
                <MobileMenu item={item.title} key={index} menu={item.subMenu} />
              );
            })}
          </div>
        </div>
        <div className="btn-aligne">
          <Link className="login-btn">Login</Link>
          <Link className="btn">Start free</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
