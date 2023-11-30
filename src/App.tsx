import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Chief from "./components/Chief";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Stock from "./components/Stock";
import Topsales from "./components/Topsales";
import { Contacts } from "@mui/icons-material";
import Recipes from "./components/Recipes";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
         <Route path="/" element={<Chief/>} />
        <Route path="/chif" element={< Products/>} />
        <Route path="/products" element={<AboutUs/>} /> 
         <Route path="/aboutUs" element={<Stock/>} />
        <Route path="/stock" element={<Topsales/>} />
        <Route path="/topsales" element={<Contacts/>} />
         <Route path="/contacts" element={<Recipes/>} />
      </Routes>
    </Router>
  );
};

export default App;
