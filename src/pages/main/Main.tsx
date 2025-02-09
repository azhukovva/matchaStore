import React, { useEffect, useState } from "react";
import Page from "../../components/page/Page.tsx";
import classes from "./Main.module.css";
import matchaPrep from "../../assets/videos/matchaPrep.mp4";
import Header from "../../components/header/Header.tsx";
import Footer from "../../components/footer/Footer.tsx";
import Products from "../products/Products.tsx";

import img1 from "../../assets/images/fields.jpg";
import img2 from "../../assets/images/fields2.jpg";
import img3 from "../../assets/images/matchastory.jpg";
import img4 from "../../assets/images/water.jpg";
import img5 from "../../assets/images/soil.jpg";
import img6 from "../../assets/images/farms.jpg";
import img7 from "../../assets/images/taste.jpg";

import { motion } from "framer-motion";

const Slideshow = ({ images, interval = 2500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("Images:", images);
  // Handle timer to automatically change images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images.length, interval]);

  return (
    <div className={classes.slideshow}>
      {images.map((img: any, index: any) => (
        <img
          src={img}
          key={index}
          alt={`Slide ${index}`}
          className={`${classes.slideImage} ${
            index === currentIndex ? classes.active : ""
          }`}
        />
      ))}
    </div>
  );
};

const matchaFacts = [
  "Matcha is rich in antioxidants, including catechins, which help protect against cell damage.",
  "Unlike regular green tea, matcha uses the entire leaf, making it more nutrient-dense.",
  "Matcha provides a calm energy boost due to its combination of caffeine and L-theanine.",
  "Traditional matcha preparation involves whisking it with hot water using a bamboo whisk.",
  "Matcha supports metabolism and weight management by boosting fat burning.",
  "Matcha has detoxifying properties due to its high chlorophyll content, helping eliminate toxins.",
];

const FactItem = ({ text, index }) => {
  return (
    <div className={classes.factItem}>
      <span className={classes.factNumber}>{index}</span>
      <p className={classes.factText}>{text}</p>
    </div>
  );
};

const Main = () => {
  const [textColor, setTextColor] = useState("white");

  // Story slideshow images
  const images = [img1, img2, img3];
  // Facts indexes
  const matchaLetters = "MATCHA".split("");
  // Story slideshow images
  const elementsImages = [img4, img5, img6, img7];

  const handleScroll = () => {
    const isSecondPage = window.innerHeight;
    const menuSection = document.getElementById("our-matcha");
    const menuSectionTop = menuSection ? menuSection.offsetTop : 0;

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
  }, []);

  return (
    <>
      <Header textColor={textColor} />
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
          <a href="#our-matcha">
            <button className={classes.btnMain}>Learn more</button>
          </a>
        </div>
      </Page>
      <Page>
        <div id="our-story" className={classes.storyContent}>
          <div className={classes.titleContainer}>
            <h1 style={{ fontSize: "2.5rem" }}>Our Story</h1>
            <span style={{ opacity: ".5" }}>
              Where Tradition Meets Modern Taste
            </span>
          </div>

          <div className={classes.story}>
            <div className={classes.side}>
              Inspired by centuries-old Japanese tea ceremonies and the dynamic
              energy of Brno, MATCHa BRNO was born from a passion for healthy
              living and a love for exquisite flavors. We source our matcha from
              trusted farms in Japan, ensuring that every sip carries the rich
              heritage, potent antioxidants, and natural vitality of this
              treasured green tea.
            </div>
            <div className={classes.side}>
              <Slideshow images={images} interval={2500} />
            </div>
          </div>
        </div>
      </Page>

      <Page isWithFitContent>
        <div id="our-matcha" className={classes.aboutMatcha}>
          <div className={classes.titleContainer}>
            <h1 style={{ fontSize: "2.5rem" }}>Our Matcha</h1>
            <span style={{ opacity: ".5" }}>
              Where Tradition Meets Modern Taste
            </span>
          </div>
          <div className={classes.elementsContainer}>
            <motion.div
              className={classes.elementsText}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h1>100% organic</h1>
              <p>4 Key Elements</p>
            </motion.div>

            <div className={classes.elementsImages}>
              <div className={classes.imageContainer}>
                <img src={img4} alt="water" />
                <div className={classes.imageText}>Clean Water</div>
              </div>
              <div className={classes.imageContainer}>
                <img src={img5} alt="soil" />
                <div className={classes.imageText}>Fertile Soil</div>
              </div>
              <div className={classes.imageContainer}>
                <img src={img6} alt="farms" />
                <div className={classes.imageText}>Secluded Farms</div>
              </div>
              <div className={classes.imageContainer}>
                <img src={img7} alt="taste" />
                <div className={classes.imageText}>Perfect Taste</div>
              </div>
            </div>
          </div>

          <h1>Did You Know That</h1>
          <div className={classes.factsContainer}>
            {matchaFacts.map((fact, index) => (
              <FactItem text={fact} index={matchaLetters[index]} key={index} />
            ))}
          </div>
        </div>
      </Page>

      <Page backgroundColor="rgba(0, 0, 0, 0.1)" isWithFitContent>
        <div className={classes.menuContent} id="our-menu">
          <div className={classes.titleMenuContainer}>
            <h1 style={{ fontSize: "2.5rem", textAlign: "left" }}>
              More than a Green Tea
            </h1>
            <span style={{ opacity: ".5" }}>
              At MATCHA BRNO, we craft a variety of{" "}
              <span style={{ fontStyle: "italic", fontSize: "1.5rem" }}>
                delicious treats
              </span>{" "}
              infused with the rich, earthy flavors of premium matcha. Whether
              you’re in the mood for a sweet indulgence or a refreshing drink,
              we have something special for you.
            </span>
          </div>
          <div className={classes.productsContainer}>
            <Products />
          </div>
        </div>
      </Page>

      <Footer />
    </>
  );
};

export default Main;
