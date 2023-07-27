import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import cocktailBanner from "./../img/cocktail-banner.jpeg";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">Party Animal</Link>
        <ul>
          
          <CustomLink to="/savedrecipes">Saved Recipes</CustomLink>
          <CustomLink to="/blog">Blog</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
          <CustomLink to="/multiplyForm">MultiplyForm</CustomLink>

        </ul>
      </nav>
      <div class="container">
        <div class="row">
          {/* <img class='img-fluid w-100 ' src={cocktailBanner} alt="cocktails" /> */}
        </div>
      </div>
    </>
  )
}

function CustomLink( {to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active" : ""}>
      <a href={to} {...props}>
        {children}
      </a>
    </li>
  )
}