import React from "react";
import "./MainButton.scss";

const MainButton = ({ onClick, children, ...props }) => {
  return (
    <div className="main-btn__wrapper">
      <button className="main-btn" onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  );
};

export default MainButton;
