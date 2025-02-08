import React from "react";
import { useLocation } from "react-router-dom";

import classes from "./Page.module.css";

type PropsType = {
  children: React.ReactNode;
  title?: string;

  isWithFitContent?: boolean;
  backgroundColor?: string;
};

const Page = ({ children, isWithFitContent = false, backgroundColor }) => {
  const location = useLocation();
  return (
    <div
      className={classes.pageContainer}
      style={{
        height: isWithFitContent ? "fit-content" : "100vh",
        backgroundColor: backgroundColor ? backgroundColor : "white",
      }}
    >
      <div className={classes.mainContent}>
        <div
          className={classes.content}
          style={location.pathname === "/" ? { padding: "0" } : {}}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
