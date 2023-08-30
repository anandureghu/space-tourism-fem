import React from "react";
import "./HomePage.scss";
import { H1, H5 } from "../../shared/typography";
import MainButton from "../../components/MainButton/MainButton";
import { useSettings } from "../../hooks/useSettings";

const HomePage = () => {
  const { changeIndex } = useSettings();

  return (
    <div className="home">
      <div className="home__main">
        <div className="home__main-content">
          <H5>So, you want to travel to</H5>
          <H1>Space</H1>
          <p className="home__main-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div className="home__actions">
        <MainButton onClick={() => changeIndex(1)}>Explore</MainButton>
      </div>
    </div>
  );
};

export default HomePage;
