import React from "react";
import "./MainButton.scss";

const MainButton = ({ children, ...props }) => {
  return (
    <div className="main-btn__wrapper">
      <button className="main-btn" {...props}>
        {children}
      </button>
    </div>
  );
};

export default MainButton;
