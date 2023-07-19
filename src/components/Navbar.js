
export default function Navbar() {
  return (

    <nav className="nav">
      <a href="/" className="site-title">Party Animal</a>
      <ul>
        <li>
          <a href="/savedRecipes"> Saved Recipes</a>
        </li>
        <li>
          <a href="/shop"> Shop</a>
        </li> 
        <li>
          <a href="/login"> Login</a>
        </li> 
      </ul>
    </nav>
  )
}