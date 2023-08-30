import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}

export default App;
