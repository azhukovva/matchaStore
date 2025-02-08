import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <footer className={classes.footer}>
        <span className={classes.title}>Join Us</span>
        <div className={classes.text}>
          Step into MATCHa BRNO and embark on a journey of taste and
          tranquility. Whether you’re seeking a quiet moment of reflection or a
          burst of creative energy, our café is the perfect place to sip, savor,
          and be inspired. Experience the art of matcha—experience MATCHa BRNO.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
