import React, { useState }from "react";
// import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Blog from "./Blog";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom"
import MultiplyForm from "./MultiplyForm";
import CocktailRecipe from "./CocktailRecipe";
import PABanner from "../img/PABanner.png"



function App(){


  return ( 
    <>
      <Navbar />
      <img src={PABanner} className='img-fluid shadow-4' alt='...' />

      < div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/multiplyForm" element={<MultiplyForm />} />
          <Route path="/cocktailRecipe" element={<CocktailRecipe />} /> 
        </Routes>
      </div>   

   
    </>
  );
}

export default App;