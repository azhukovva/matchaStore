import React from "react";

import classes from "./Products.module.css";

import matchaIceCream from "../../assets/images/icecream.jpg";
import matchaCookies from "../../assets/images/cookies.jpg";
import matchaCheesecake from "../../assets/images/cheesecake.jpg";
import matchaSmoothie from "../../assets/images/smoothie.jpg";
import matchaMochi from "../../assets/images/mochi.jpg";
import matchaBread from "../../assets/images/bread.jpg";

const products = [
  {
    img: matchaIceCream,
    title: "Matcha Ice Cream",
    desc: "Creamy, rich, and full of umami matcha goodness.",
  },
  {
    img: matchaCookies,
    title: "Matcha Cookies",
    desc: "Buttery, slightly sweet cookies infused with matcha.",
  },
  {
    img: matchaBread,
    title: "Matcha Bread",
    desc: "Buttery, slightly sweet cookies infused with matcha.",
  },
  {
    img: matchaCheesecake,
    title: "Matcha Cheesecake",
    desc: "A fusion of classic cheesecake and vibrant matcha.",
  },
  {
    img: matchaSmoothie,
    title: "Matcha Smoothie",
    desc: "Refreshing blend of matcha, banana, and almond milk.",
  },
  {
    img: matchaMochi,
    title: "Matcha Mochi",
    desc: "Soft, chewy mochi filled with luscious matcha paste.",
  },
];

const ProductItem = ({ img, title, desc }) => {
  return (
    <div className={classes.productItem}>
      <img src={img} alt="" className={classes.image} />
      <div className={classes.productInfo}>
        <span className={classes.title}>{title}</span>
        <span className={classes.description}>{desc}</span>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className={classes.productsContainer}>
      <div className={classes.scrollContainer}>
        <div className={classes.products}>
          {products.map((product) => (
            <ProductItem key={product.title} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
