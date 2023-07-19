import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (

    <nav className="nav">
      <Link to="/" className="site-title">Party Animal</Link>
      <ul>
          <CustomLink to="/savedRecipes"> Saved Recipes</CustomLink>
          <CustomLink to="/shop"> Shop</CustomLink>
          <CustomLink to="/login"> Login</CustomLink>
  
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props}) {
  
  return (
    <li className={path = to ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link> 
    </li>
  )
}