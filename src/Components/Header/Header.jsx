import React, { useState } from "react";
import logo from "../../assets/bonsaiLogo.png";
import { Link } from "react-router-dom";
import btn from "../../assets/menuMobileBtn.svg";
import { webMenu } from "./MenuItems";
import { menu } from "./MobileMenuItems";
import MobileMenu from "./MobileMenu";
import SiteMenu from "./SiteMenu";
// CSS
import "./Header.css";

function Header() {
  const [hideMenu, setHideMenu] = useState(false);

  const handleHideMenu = (e) => {
    setHideMenu(!hideMenu);
  };
  return (
    <header className="header-conteiner">
      <div className="flex">
        <Link to="/">
          <img
            className="bonsai-logo"
            src={logo}
            alt="Bonsai logo"
            loading="lazy"
          />
        </Link>
        {/* Web menu */}
        <nav className="web-menu-conteiner flex">
          {webMenu.map((item, index) => {
            return (
              <div key={index}>
                <SiteMenu
                  key={index}
                  title={item.title}
                  subTitle={item.submenu}
                />
              </div>
            );
          })}
        </nav>
      </div>
      <div className="header-btn-aligne">
        <a className="log-in" href="/">
          Log in
        </a>
        <a className="start-free" href="/">
          Start free
        </a>
      </div>

      {/* Mobile */}
      <div className="mobile-menu-btn" onClick={handleHideMenu}>
        <img src={btn} alt="Mobile menu btn" />
      </div>
      <nav
        className={
          hideMenu ? "mobile-menu-conteiner" : "mobile-menu-conteiner hide"
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
