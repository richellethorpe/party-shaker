import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import SavedRecipes from "./SavedRecipes"
import Login from "./Login"

export default function Navbar() {
  return (

    <nav className="nav">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/savedrecipes" element={<SavedRecipes />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </Router>
    </nav>
  )
}

