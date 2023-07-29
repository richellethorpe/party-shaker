// import React, { useState }from "react";
// import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Blog from "./Blog";
import Login from "./Login";
import Navbar from "./Navbar";
import Home from "./Home";
import SavedRecipes from "./SavedRecipes";
import { Route, Routes } from "react-router-dom"
import MultiplyForm from "./MultiplyForm";
import CocktailRecipe from "./CocktailRecipe";
import Banner from "./Banner";

function App(){

  return ( 
    <>
  
      <Navbar />
      <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
      < div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/savedrecipes" element={<SavedRecipes />} />
          <Route path="/multiplyForm" element={<MultiplyForm />} />
          <Route path="/cocktailRecipe" element={<CocktailRecipe />} /> 
        </Routes>
      </div>   
   
    </>
  );
}

export default App;