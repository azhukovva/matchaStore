import React from "react";
import { useLocation } from "react-router-dom";

import classes from "./Page.module.css";

type PropsType = {
  children: React.ReactNode;
  title?: string;

};

const Page = ({ children }) => {
  const location = useLocation();
  return (
    <div className={classes.pageContainer}>
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
