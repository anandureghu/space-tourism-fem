import React from "react";
import { H3, H4 } from "../../shared/typography";
import "./CrewDetails.scss";

const CrewDetails = ({ crew }) => {
  return (
    <div className="crewDetails">
      <div className="crewDetails__content">
        <H4>{crew.role}</H4>
        <H3>{crew.name}</H3>
        <p className="crewDetails__content-bio">{crew.bio}</p>
      </div>
      <div className="crewDetails__image">
        <img src={crew.images.webp} alt={crew.name} />
      </div>
    </div>
  );
};

export default CrewDetails;
