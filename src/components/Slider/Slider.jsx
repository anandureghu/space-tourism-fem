import React from "react";
import "./Slider.scss";

const Slider = ({ children, selected, position, onChange }) => {
  return (
    <div className="slider">
      <div className="slider__content">{children[selected]}</div>
      <div className="slider__dots">
        <div className="slider__dots-container">
          {children.map((child, i) => {
            return (
              <div
                className={`slider__dots-dot ${i === selected ? "active" : ""}`}
                onClick={() => onChange(i)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
