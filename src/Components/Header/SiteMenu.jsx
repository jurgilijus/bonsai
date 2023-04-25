import React, { useState } from "react";

import "./Header.css";
import TemplateMenu from "./TemplateMenu";
import { HiOutlineArrowSmRight } from "react-icons/hi";

function SiteMenu({ title, subTitle }) {
  const [click, setclick] = useState(0);
  const handleClick = (index) => {
    setclick(index);
  };
  return (
    <div className="web-menu">
      <p>{title}</p>
      <div className="web-submenu">
        {title === "Templates" ? (
          <div className="template-conteiner">
            {subTitle.map((template, index) => {
              if (title === "Templates") {
                return (
                  <div key={index} className="template-content">
                    <div className="template-tet-conteiner">
                      <p
                        onClick={() => handleClick(index)}
                        className={
                          click === index
                            ? "template-text clicked"
                            : "template-text"
                        }
                      >
                        {template.subTitle}
                        <HiOutlineArrowSmRight
                          className={click === index ? "arrow" : "arrow hidden"}
                        />
                      </p>
                    </div>

                    <div className="template-menu">
                      <TemplateMenu
                        subSubTitle={template.subSubTitle}
                        templateNavigation={template.navigation}
                        seeAll={template.seeAll}
                        seeAllUrl={template.seeAllUrl}
                        click={click}
                        index={index}
                      />
                    </div>
                  </div>
                );
              }
              return;
            })}
          </div>
        ) : (
          <div className="web-submenu-conteiner">
            {subTitle.map((titleText, index) => {
              if (
                title !== "Pricing" &&
                title !== "Reviews" &&
                title !== "Templates"
              ) {
                return (
                  <div key={index}>
                    <p className="web-submenu-subtitle">{titleText.subTitle}</p>
                    <div className="web-submenu-text">
                      <div>
                        {titleText.navigation.map((menu, index) => (
                          <div key={index} className="web-submenu-menu">
                            <img src={menu.img} alt="" />
                            <a href={menu.url}>{menu.title}</a>
                            <a href="/" className="learnmore">
                              {menu.learnMore}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SiteMenu;
