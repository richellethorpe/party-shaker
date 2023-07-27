import React from 'react'
import { useLocation } from 'react-router-dom'

function CocktailRecipe(props) {

  const location = useLocation();
  return (
    <div>
      <h2>Ingredient #1: {location.state.ingrediant1}</h2>

    </div>
  )
}

export default CocktailRecipe