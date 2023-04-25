import React from "react";

function TemplateMenu({
  subSubTitle,
  templateNavigation,
  seeAll,
  seeAllUrl,
  click,
  index,
}) {
  return (
    <div
      className={
        click === index
          ? "template-navgation-conteiner"
          : "template-navgation-conteiner hidden"
      }
    >
      <label htmlFor="" className="template-subtitle">
        {subSubTitle}
      </label>

      <div className="template-navigation">
        {templateNavigation.map((navigation, index) => {
          return (
            <div key={index} className="template-navigation-text">
              <a href={navigation.url}>{navigation.title}</a>
            </div>
          );
        })}
      </div>
      <div>
        <a href={seeAllUrl} className="learnmore marginAuto">
          {seeAll}
        </a>
      </div>
    </div>
  );
}

export default TemplateMenu;
