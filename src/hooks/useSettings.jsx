import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useSettings = () => useContext(AppContext);
