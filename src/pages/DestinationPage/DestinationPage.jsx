import React, { useState } from "react";
import "./DestinationPage.scss";
import { useSettings } from "../../hooks/useSettings";
import { H5 } from "../../shared/typography";
import Tab from "../../components/Tab/Tab";
import DestinationDetails from "../../views/DescriptionDetails/DestinationDetails";

const destinations = ["Moon", "Mars", "Europa", "Titan"];

const DestinationPage = () => {
  const { activeIndex } = useSettings();
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  const handleTabChange = (tab) => {
    setSelectedDestination(tab);
  };

  return (
    <div className="destination">
      <div className="destination__header">
        <H5>
          <span className="destination__header-subheading">0{activeIndex}</span>
          &nbsp; Pick your destination
        </H5>
      </div>
      <div className="destination__content">
        <div className="destination__content-image">
          <img
            src={`/assets/destination/image-${selectedDestination.toLowerCase()}.webp`}
            alt={selectedDestination}
          />
        </div>
        <div className="destination__content-data">
          <Tab onChange={handleTabChange} tabs={destinations} />
          <DestinationDetails destination={selectedDestination} />
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
