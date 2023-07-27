import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import SavedRecipes from "./SavedRecipes"
import Login from "./Login"
import Error from "./Error"
import Blog from "./Blog"
import Navbar from "./Navbar"
// import { Container } from "react-bootstrap";
// import { AuthProvider } from "../contexts/AuthContext";

// import Navbar from "./Navbar";



function App(){
  return ( 
    <>
    <Login />
      {/* <Router>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/savedrecipes">Saved Recipes</Link>
          <Link to="/blog">Blog</Link>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/savedrecipes" element={<SavedRecipes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/*" element={<Error />} />

        </Routes>
      </Router>
     */}
      </>  
  
  );
}

export default App;
