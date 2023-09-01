import React from "react";
import "./TechnologyDetails.scss";
import { H3, H5 } from "../../shared/typography";

const TechnologyDetails = ({ technology }) => {
  return (
    <div className="technologyDetails">
      <H5>The Terminology...</H5>
      <H3>{technology.name}</H3>
      <p className="technologyDetails__description">
        {technology.description}
      </p>
    </div>
  );
};

export default TechnologyDetails;
