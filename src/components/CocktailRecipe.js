import React from 'react'
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Row }  from 'react-bootstrap'

function CocktailRecipe(props) {
  
  const location = useLocation();
  return (
    <div>
      <Card>
        <Row>
          <h2>Ingredient #1: {location.state.ingredient1}</h2>
          <h2> {location.state.ingredient1oz} oz</h2>
        </Row>
        <Button>Save to Account</Button>
      </Card>
      


    </div>
  )
}

export default CocktailRecipe
