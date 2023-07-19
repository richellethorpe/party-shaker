import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
// import Header from "./Header";
// import NewMultiplyCocktailForm from "./MultiplyCocktail";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function App(){
  return ( 
    <>
      <Navbar />
        {/* <Container className="d-flex align-items-center justify-content-center"style={{minHeight: "100vh"}}>
          <div className="w-100" style={{maxWidth: "400px"}}>
            <Router>
              <AuthProvider>
                <Routes>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                </Routes>
              </AuthProvider>
            </Router>
          </div>
        </Container> */}
      
    </>
  );
}

export default App;
