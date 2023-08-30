import React from "react";
import "./typography.scss";

export const H1 = ({ children }) => {
  return <h1 className="heading-1">{children}</h1>;
};

export const H2 = ({ children }) => {
  return <h2 className="heading-2">{children}</h2>;
};

export const H3 = ({ children }) => {
  return <h3 className="heading-3">{children}</h3>;
};

export const H4 = ({ children }) => {
  return <h4 className="heading-4">{children}</h4>;
};

export const H5 = ({ children }) => {
  return <h5 className="heading-5">{children}</h5>;
};

export const SubHeading1 = ({ children }) => {
  return <h1 className="sub-heading-1">{children}</h1>;
};

export const SubHeading2 = ({ children }) => {
  return <h2 className="sub-heading-2">{children}</h2>;
};

export const NavText = ({ children }) => {
  return <p className="nav-text">{children}</p>;
};

export const Text = ({ children }) => {
  return <p className="text">{children}</p>;
};
