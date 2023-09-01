import React, { useEffect, useState } from "react";
import { destinations } from "../../data/data.json";
import { H2, H4, H5, SubHeading1, SubHeading2 } from "../../shared/typography";
import "./DestinationDetails.scss";

const DestinationDetails = ({ destination }) => {
  const [destinationDetails, setDestinationDetails] = useState(null);
  useEffect(() => {
    const newDestination = destinations.find((d) => d.name === destination);
    if (newDestination) {
      setDestinationDetails(newDestination);
    }
  }, [destination]);
  return (
    <>
      {destinationDetails && (
        <div className="destinationDetails">
          <div className="destinationDetails__title">
            <H2>{destinationDetails.name}</H2>
          </div>
          <p className="destinationDetails__description">
            {destinationDetails.description}
          </p>
          <div className="destinationDetails__subdetails">
            <SubDetails
              label={"Avg. distance"}
              text={destinationDetails.distance}
            />
            <SubDetails
              label={"Est. travel time"}
              text={destinationDetails.travel}
            />
          </div>
        </div>
      )}
    </>
  );
};

const SubDetails = ({ label, text }) => {
  return (
    <div className="subDetails">
      <SubHeading2>{label}</SubHeading2>
      <SubHeading1>{text}</SubHeading1>
    </div>
  );
};

export default DestinationDetails;
