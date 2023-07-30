import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

function CocktailRecipe(props){
  return(
    <>
      <div>
        <Card>
          <Card.Header as="h5">{props.drinkName} - {props.totalQty} total drinks</Card.Header>
          <Card.Body>
            <Card.Title>{props.drinkName}</Card.Title>
            <Card.Text>
              <ul>{props.ingredient1} - {props.ingredient1oz}oz</ul>
              <ul>{props.ingredient2} - {props.ingredient2oz}oz </ul>
              <ul>{props.ingredient3} - {props.ingredient3oz}oz </ul>
              <ul>{props.ingredient4} - {props.ingredient4oz}oz </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

CocktailRecipe.propTypes = {
  drinkName: PropTypes.string.isRequired,
  totalQty: PropTypes.number.isRequired,
  ingredient1: PropTypes.string.isRequired,
  ingredient1oz: PropTypes.number.isRequired,
  ingredient2: PropTypes.string,
  ingredient2oz: PropTypes.number,
  ingredient3: PropTypes.string,
  ingredient3oz: PropTypes.number,
  ingredient4: PropTypes.string,
  ingredient4oz: PropTypes.number,
  id: PropTypes.string,
  clickSave: PropTypes.func

};

export default CocktailRecipe;

