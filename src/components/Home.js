import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Container, Row, Col }  from 'react-bootstrap'
import { useNavigate } from "react-router-dom"

  const favRecipes =[
  {
    image: require('../img/bees.jpeg'),
    drinkName: "Beez Knees",
    ingredient1: "Gin", 
    ingredient1oz: 2, 
    ingredient2: "Lemon", 
    ingredient2oz: 1, 
    ingredient3: "Honey", 
    ingredient3oz: 1, 
    ingredient4: "Bitters", 
    ingredient4oz: .05, 
    id: 1
  },
  {
    image: require('../img/marg.jpg'),
    drinkName: "Margarita",
    ingredient1: "Tequila", 
    ingredient1oz: 2, 
    ingredient2: "Lime", 
    ingredient2oz: 1, 
    ingredient3: "Agave Syrup", 
    ingredient3oz: .5, 
    ingredient4: "Orange Liquor", 
    ingredient4oz: .5, 
    id: 2
  },
  {
    image: require('../img/negronis.jpg'),
    drinkName: "Negroni",
    ingredient1: "Gin", 
    ingredient1oz: 1, 
    ingredient2: "Campari", 
    ingredient2oz: 1, 
    ingredient3: "Sweet Vermouth", 
    ingredient3oz: 1, 
    ingredient4: "Orange Bitters", 
    ingredient4oz: .05, 
    id: 3
  }

];
export default function Home() {
  const navigate =useNavigate(); 
  return (
    <>
    <Container>
      <p>Your go-to source for curating large batches of cocktails and mocktails to elevate your next party.</p>
    </Container>

  
      <div>
      <section id="recipe" className='block recipe-block'>
        <Container fluid>
          <div className='title-holder mt-4'>
            <h3>Tried And True Favorites</h3>
          </div>
          <Row>
            {
              favRecipes.map(recipe  => {
                return(
                <Col sm={4} key={recipe.id}>
                  <div className='holder mb-4'>
                    <Card>
                    <Card.Img variant="top" src={recipe.image} />
                      <Card.Body>
                        <Card.Title>{recipe.drinkName}</Card.Title>
                        <Card.Text>
                          <ul>{recipe.ingredient1} - {recipe.ingredient1oz}oz</ul>
                          <ul>{recipe.ingredient2} - {recipe.ingredient2oz}oz </ul>
                          <ul>{recipe.ingredient3} - {recipe.ingredient3oz}oz </ul>
                          <ul>{recipe.ingredient4} - {recipe.ingredient4oz}oz </ul>
                        </Card.Text>
                       
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                )
              })
            }
            
          </Row>
          <div className='HomeMultiplyDrink'>
       <header className='HomeMultiplyDrink-header'>
        <Card className='multiplyCocktailHome'>
      
          <Card.Body >
            <Card.Title>
              Already have a drink you want to multiply?
            </Card.Title>
            <Card.Text>
              Find out how much of each ingrediant you need to multiply your cocktail or mocktail to serve all your guests.
            </Card.Text>
            <Button onClick={()=> {navigate("/MultiplyForm")}} variant="success">Multiply your cocktail!</Button>
          </Card.Body>
        </Card>
       </header>
      </div>
        </Container>
      </section>
    </div>
    </>
    
  )
}
