import React, { useState } from "react";
import "./Navbar.scss";
import "../../shared/typography.scss";
import { useSettings } from "../../hooks/useSettings";

const navbarItems = ["Home", "Destination", "Crew", "Technology"];

const Navbar = () => {
  const { activeIndex, changeIndex } = useSettings();
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src="/assets/shared/logo.svg" alt="" />
      </div>
      <div className="nav__line" />
      <div className="nav__items">
        <div className="nav-background" />
        {navbarItems.map((item, i) => {
          return (
            <div
              className={`nav__items-item nav-text ${
                activeIndex === i ? "active" : ""
              }`}
              onClick={() => changeIndex(i)}
            >
              <span className="nav-text-bold">0{i}</span>
              {`${item}`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
