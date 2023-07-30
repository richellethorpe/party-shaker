import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Card }  from 'react-bootstrap'
import CocktailRecipe from './CocktailRecipe';
import PropTypes from "prop-types";


function SavedRecipes(props) {
  const [spankinNewRecipe, setSpankinNewRecipe]= useState(null);
  const [recipeList, setRecipeList] = useState([
    {
      drinkName: "Beez Knees",
      totalQty: 200,
      ingredient1: "Gin", 
      ingredient1oz: 2, 
      ingredient2: "Lemon", 
      ingredient2oz: 1, 
      ingredient3: "Simple Syrup", 
      ingredient3oz: 1, 
      ingredient4: "Honey", 
      ingredient4oz: 1, 
      id: 1
    },
    {
      drinkName: "Beez Knees",
      totalQty: 200,
      ingredient1: "Gin", 
      ingredient1oz: 2, 
      ingredient2: "Lemon", 
      ingredient2oz: 1, 
      ingredient3: "Simple Syrup", 
      ingredient3oz: 1, 
      ingredient4: "Honey", 
      ingredient4oz: 1, 
      id: 2
    },
    {
      drinkName: "Beez Knees",
      totalQty: 200,
      ingredient1: "Gin", 
      ingredient1oz: 2, 
      ingredient2: "Lemon", 
      ingredient2oz: 1, 
      ingredient3: "Simple Syrup", 
      ingredient3oz: 1, 
      ingredient4: "Honey", 
      ingredient4oz: 1, 
      id: 3
    }
  
  ]);
  
 
  return (
    <>
      <div>
        <Card>
          <Card.Header as="h5">New Recipe</Card.Header>
          <Card.Body>
            <Card.Title>{props.drinkName} - {props.totalQty} total drinks</Card.Title>
            <Card.Text>
              <ul>{props.ingredient1} - {props.ingredient1oz}oz</ul>
              <ul>{props.ingredient2} - {props.ingredient2oz}oz </ul>
              <ul>{props.ingredient3} - {props.ingredient3oz}oz </ul>
              <ul>{props.ingredient4} - {props.ingredient4oz}oz </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
      recipeList.map(recipe  => {
        return(
        <Card>
          <Card.Header as="h5">Saved Recipes</Card.Header>
          <Card.Body>
            <Card.Title>{props.drinkName} - {props.totalQty} total drinks</Card.Title>
            <Card.Text>
              <ul>{props.ingredient1} - {props.ingredient1oz}oz</ul>
              <ul>{props.ingredient2} - {props.ingredient2oz}oz </ul>
              <ul>{props.ingredient3} - {props.ingredient3oz}oz </ul>
              <ul>{props.ingredient4} - {props.ingredient4oz}oz </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        )}
      </div>
      
    </>
    
    

    
  )
}

export default SavedRecipes

  // const location = useLocation();
  // console.log({location});

  // let ing1 = location.state.ingredient1;
  // let ing1oz = location.state.ingredient1oz;
  // let ing2 = location.state.ingredient2;
  // let ing2oz = location.state.ingredient2oz;
  // let ing3 = location.state.ingredient3;
  // let ing3oz = location.state.ingredient3oz;
  // let ing4 = location.state.ingredient4;
  // let ing4oz = location.state.ingredient4oz;
  // let totalQty = location.state.totalQty;
  // let newdrinkName = location.state.drinkName;

  
  

  //   const singleRecipe= [
  //     {
  //     ingredient1: ing1,
  //     ingredient1oz: ing1oz,
  //     ingredient2: ing2,
  //     ingredient2oz: ing2oz,
  //     ingredient3: ing3,
  //     ingredient3oz: ing3oz,
  //     ingredient4: ing4,
  //     ingredient4oz: ing4oz,
  //     totalQty: totalQty,
  //     drinkName: newdrinkName
  //     }
  //   ]
  //   const handleAddNewRecipe = (singleRecipe) => {
  //     const newRecipe = {
  //       ingredient1,
  //       ingredient1oz,
  //       ingredient1,
  //       ingredient1oz,
  //       ingredient1,
  //       ingredient1oz,
  //       ingredient1,
  //       ingredient1,
  //       ingredient1,
  //     }
  //   }