import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
