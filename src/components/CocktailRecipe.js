import React from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Card }  from 'react-bootstrap'
import { useNavigate } from "react-router-dom";


function CocktailRecipe(props) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log({location});
  return (
    <div>
      <Card>
        <Card.Header as="h5">Multiplied Recipe for {location.state.totalQty} total drinks</Card.Header>
        <Card.Body>
          <Card.Title>{location.state.drinkName}</Card.Title>
          <Card.Text>
            <ul>{location.state.ingredient1} - {location.state.ingredient1oz}oz</ul>
            <ul>{location.state.ingredient2} - {location.state.ingredient2oz}oz </ul>
            <ul>{location.state.ingredient3} - {location.state.ingredient3oz}oz </ul>
            <ul>{location.state.ingredient4} - {location.state.ingredient4oz}oz </ul>
          </Card.Text>
          <Button variant="primary"onClick={()=> {navigate('/savedRecipes')}}>Save Recipe</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CocktailRecipe
