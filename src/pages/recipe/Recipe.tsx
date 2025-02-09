import React from "react";

import classes from "./Recipe.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../products/Products.tsx";
import { recipes } from "../../assets/recipes.ts";
import Header from "../../components/header/Header.tsx";
import { Icon } from "@iconify/react/dist/iconify.js";
import icons from "../../utils/icons.ts";

const Recipe = () => {
  const { item } = useParams();
  const product = products.find((p) => p.title.replace(/\s+/g, "") === item);
  const recipe = product && recipes[product.title];

  const navigate = useNavigate();

  if (!product || !recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div className={classes.recipeContainer}>
      <Header />
      <div className={classes.recipe}>
        <button className={classes.btnBack} onClick={() => navigate(-1)}>
          <Icon icon={icons.left} width={20} />
        </button>
        <div className={classes.imageContainer}>
          <img src={product.img} alt={product.title} />
        </div>
        <div className={classes.textContainer}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <span className={classes.title}>{product.title}</span>
            <span className={classes.description}>{product.desc}</span>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "2rem",
                gap: ".5rem",
              }}
            >
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "2rem",
                gap: ".5rem",
              }}
            >
              <h2>Instructions</h2>
              <ol>
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
