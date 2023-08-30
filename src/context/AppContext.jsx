import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <AppContext.Provider value={{ activeIndex, changeIndex }}>
      {children}
    </AppContext.Provider>
  );
};
