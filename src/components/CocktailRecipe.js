import React from 'react'
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card }  from 'react-bootstrap'

function CocktailRecipe() {
  
  const location = useLocation();
  return (
    <div>
      <Card>
        <row>
          <h2>Ingredient #1: {location.state.recipe.ingrediant1}</h2>
          <h2> {location.state.recipe.ingrediant1oz} oz</h2>
        </row>
        <Button>Save to Account</Button>
      </Card>
      


    </div>
  )
}

export default CocktailRecipe