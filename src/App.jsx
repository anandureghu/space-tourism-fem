import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { useSettings } from "./hooks/useSettings";
import DestinationPage from "./pages/DestinationPage/DestinationPage";

function App() {
  const { activeIndex } = useSettings();

  return (
    <>
      <Navbar />
      {activeIndex === 0 && <HomePage />}
      {activeIndex === 1 && <DestinationPage />}
      {activeIndex === 2 && <HomePage />}
      {activeIndex === 3 && <DestinationPage />}
    </>
  );
}

export default App;
