import React, { useEffect, useState } from "react";
import Page from "../../components/page/Page.tsx";

import classes from "./Main.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import matchaPrep from "../../assets/matchaPrep.mp4";
import main from "../../assets/main.mp4";
import Header from "../../components/header/Header.tsx";

const Main = () => {
  const [textColor, setTextColor] = useState("white");

  const handleScroll = () => {
    const isSecondPage = window.innerHeight;
    if (window.scrollY >= isSecondPage) {
      setTextColor("black");
    } else {
      setTextColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <Header textColor={textColor}/>
      <Page>
        <div className={classes.video_container}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={classes.video_cover}
          >
            <source src={matchaPrep} type="video/mp4" />
            Your browser does not support the video tag:(
          </video>
        </div>
        <div className={classes.overlayText}>
          <h1>100% organic matcha</h1>
          <span>
            <p>Matcha for a healthy and beautiful life</p>
            <p>The taste of Japan in the heart of Europe</p>
          </span>
          <button className={classes.btnMain}>Learn more</button>
        </div>
      </Page>
      <Page>
        <div></div>
      </Page>
    </>
  );
};

export default Main;
