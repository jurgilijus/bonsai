import React, { useEffect, useState } from "react";

function SubHeader() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 50)
      );
    }
  }, []);
  return (
    <div className={small ? "subheader shrink" : "subheader"}>
      <div
        className={small ? "subheader-conteiner shrink" : "subheader-conteiner"}
      >
        <a
          href="https://www.hellobonsai.com/software/small-businesses"
          className="subheader-text"
        >
          Small businesses
        </a>
        <a
          href="https://www.hellobonsai.com/software/agencies"
          className="subheader-text"
        >
          Agencies
        </a>
        <a
          href="https://www.hellobonsai.com/software/freelancing"
          className="subheader-text"
        >
          Freelancers
        </a>
      </div>
    </div>
  );
}

export default SubHeader;
