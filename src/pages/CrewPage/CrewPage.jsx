import React, { useState } from "react";
import "./CrewPage.scss";
import { H5 } from "../../shared/typography";
import { useSettings } from "../../hooks/useSettings";
import { crew } from "../../data/data.json";
import Slider from "../../components/Slider/Slider";
import CrewDetails from "../../views/CrewDetails/CrewDetails";

const CrewPage = () => {
  const { activeIndex } = useSettings();
  const [selectedCrew, setSelectedCrew] = useState(0);

  return (
    <div className="crew">
      <div className="crew__header">
        <H5>
          <span className="crew__header-subheading">0{activeIndex}</span>
          &nbsp; Meet your crew
        </H5>
      </div>
      <div className="crew__content">
        <Slider
          selected={selectedCrew}
          onChange={(value) => setSelectedCrew(value)}
        >
          {crew.map((c) => {
            return <CrewDetails crew={c} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CrewPage;
