import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { useSettings } from "./hooks/useSettings";

function App() {
  const { activeIndex } = useSettings();

  return (
    <>
      <Navbar />
      {activeIndex === 0 && <HomePage />}
      {activeIndex === 1 && <HomePage />}
      {activeIndex === 2 && <HomePage />}
      {activeIndex === 3 && <HomePage />}
    </>
  );
}

export default App;
