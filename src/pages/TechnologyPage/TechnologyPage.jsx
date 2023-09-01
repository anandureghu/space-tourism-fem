import React, { useState } from "react";
import "./TechnologyPage.scss";
import { H5 } from "../../shared/typography";
import { useSettings } from "../../hooks/useSettings";
import { technology } from "../../data/data.json";
import TechnologyDetails from "../../views/TechnologyDetails/TechnologyDetails";

const TechnologyPage = () => {
  const { activeIndex } = useSettings();
  const [step, setStep] = useState(0);
  return (
    <div className="technology">
      <div className="technology__header">
        <H5>
          <span className="technology__header-subheading">0{activeIndex}</span>
          &nbsp; Space launch 101
        </H5>
      </div>
      <div className="technology__content">
        <div className="technology__content-details">
          <div className="technology__content-steps">
            {technology.map((t, i) => {
              return (
                <div
                  className={`technology__content-steps--step ${
                    step === i ? "active" : ""
                  }`}
                  onClick={() => setStep(i)}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
          <TechnologyDetails technology={technology[step]} />
        </div>
        <div className="technology__content-image">
          <img
            src={technology[step].images.portrait}
            alt={technology[step].name}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
