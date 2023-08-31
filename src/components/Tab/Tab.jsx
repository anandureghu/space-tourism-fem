import React, { useEffect, useState } from "react";
import "./Tab.scss";

const Tab = ({ onChange, tabs }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  useEffect(() => {
    onChange(selectedTab);
  }, [selectedTab]);

  return (
    <div className="tab">
      <div className="tab__tabs">
        {tabs.map((tab) => {
          return (
            <div
              className={`tab__tabs-tab ${selectedTab === tab ? "active" : ""}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
