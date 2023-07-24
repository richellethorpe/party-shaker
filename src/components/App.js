// import React, { useState }from "react";
// import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Blog from "./Blog";
import Login from "./Login";
import Navbar from "./Navbar";
import Home from "./Home";
import SavedRecipes from "./SavedRecipes";
import { Route, Routes } from "react-router-dom"


function App(){

  return ( 
    <>
      <Navbar />
      < div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/savedrecipes" element={<SavedRecipes />} />
        </Routes>
      </div>      
    </>
  );
}

export default App;