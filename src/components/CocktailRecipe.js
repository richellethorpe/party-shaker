import React from 'react'
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Row, Container, Col }  from 'react-bootstrap'


{/* <h2>: {location.state.ingredient1}</h2> */}
function CocktailRecipe(props) {
  
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
          <Button variant="primary">Save Recipe</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CocktailRecipe
