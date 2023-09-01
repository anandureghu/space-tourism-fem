import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { useSettings } from "./hooks/useSettings";
import DestinationPage from "./pages/DestinationPage/DestinationPage";
import CrewPage from "./pages/CrewPage/CrewPage";
import TechnologyPage from "./pages/TechnologyPage/TechnologyPage";

function App() {
  const { activeIndex } = useSettings();

  return (
    <>
      <Navbar />
      {activeIndex === 0 && <HomePage />}
      {activeIndex === 1 && <DestinationPage />}
      {activeIndex === 2 && <CrewPage />}
      {activeIndex === 3 && <TechnologyPage />}
    </>
  );
}

export default App;
