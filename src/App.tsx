import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main.tsx";
import Recipe from "./pages/recipe/Recipe.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/recipe/:item" element={<Recipe />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
