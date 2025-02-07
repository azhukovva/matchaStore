import React from "react";

import { Icon } from "@iconify/react";

import classes from "./Header.module.css";
import icons from "../../utils/icons.ts";

type PropsType = {
  textColor?: string;
};

const Header = ({ textColor }) => {
  console.log(textColor);
  return (
    <div className={classes.headerContainer} style={{ color: textColor }}>
      <header className={classes.rowTop}>
        <span>The adress will be here</span>
        <span className={classes.contacts}>
          <p className={classes.rowItem}>
            <Icon icon={icons.insta} width={16}/>
            @thematchabrno
          </p>
          <p className={classes.rowItem}>
            <Icon icon={icons.telephone} width={16}/>
            (420) 763 738 930
          </p>
          <p className={classes.rowItem}>
            <Icon icon={icons.email} width={16}/>
            thematchabrno@gmail.com
          </p>
        </span>
      </header>
      <header className={classes.header} >
        <span className={classes.pageName}>
          <p style={{ display: "flex" }}>
            The MATCH<p style={{ textTransform:"lowercase" }}>a</p>
          </p>
          BRNO
        </span>

        <div className={classes.contacts}>
          <p className={`${classes.rowItem} ${classes.navigationItem}`}>
            Our Story
          </p>
          <p className={`${classes.rowItem} ${classes.navigationItem}`}>
            Our Matcha
          </p>
          <p className={`${classes.rowItem} ${classes.navigationItem}`}>
            Our Menu
          </p>
          <p className={`${classes.rowItem} ${classes.navigationItem}`}>
            Contact Us
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
