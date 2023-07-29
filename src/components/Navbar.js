import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">Home</Link>
        <ul>
          
          <CustomLink to="/savedrecipes">Saved Recipes</CustomLink>
          <CustomLink to="/blog">Blog</CustomLink>
          <CustomLink to="/signup">SignUp</CustomLink>

        </ul>
      </nav>
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