import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "./Header.css";

function MobileMenu({ item, menu }) {
  const [clickArrow, setClickArrow] = useState(false);

  const handleClick = (e) => {
    setClickArrow(!clickArrow);
  };

  return (
    <div className="conteiner">
      <div onClick={handleClick}>
        {item.includes("Product") || item.includes("Templates") ? (
          <div className={!clickArrow ? "aligne" : "aligne active"}>
            <div className="mobile-menu-nav">
              {item}
              <MdOutlineKeyboardArrowDown
                size={30}
                color="#22AD01"
                className={!clickArrow ? " unrotate" : "rotate"}
              />
            </div>
            <div className={clickArrow ? "submenu" : "submenu hide"}>
              {menu.map((item, index) => {
                return (
                  <a className="nav" href={item.url} key={index}>
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            {menu.map((item, index) => {
              return (
                <a className="nav" href={item.url} key={index}>
                  {item.title}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
