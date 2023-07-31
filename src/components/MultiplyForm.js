import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import PropTypes from "prop-types";
import { v4 } from "uuid";

<<<<<<< HEAD

function MultiplyForm(props){
  const navigate =useNavigate();  
  function handleMultiplyForm(event){
    event.preventDefault();
    props.onNewRecipeCreation({
      drinkName: event.target.drinkName.value,
      totalQty: event.target.totalQty.value,
      ingredient1: event.target.ingredient1.value, 
      ingredient1oz: event.target.ingredient1oz.value, 
      ingredient2: event.target.ingredient2.value, 
      ingredient2oz: event.target.ingredient2oz.value, 
      ingredient3: event.target.ingredient3.value, 
      ingredient3oz: event.target.ingredient3oz.value, 
      ingredient4: event.target.ingredient4.value, 
      ingredient4oz: event.target.ingredient4oz.value, 
      id: v4()
    });
  }

=======
>>>>>>> useState
  return (
    <>
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="customCard">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-2 text-uppercase">Multiply Your Cocktail</h2>
                <p className=" mb-5">Please enter your cocktail specifications</p>
                <Form onSubmit={handleMultiplyForm}>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="drinkName"
                    >
                      <Form.Label>Drink Name</Form.Label>
                      <Form.Control
                        type="text"  
<<<<<<< HEAD
                        placeholder="Gin Fizz" />   
=======
                        placeholder="Ex: Gin Fizz"   
                        onChange={(e) => setDrinkName(e.target.value)}/>            
>>>>>>> useState
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="drinkQty"
                    >
                      <Form.Label>How many total cocktails do you want?</Form.Label>
                      <Form.Control
                        type="number"  
                        placeholder="Ex: 200"/>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="ingredient1"
                    >
                      <Form.Label className="text-center">
                        Ingredient #1
                      </Form.Label>
                      <Form.Control type="text" placeholder="ex: Gin"  />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="ingredient1oz"
                    >
                      <Form.Label>Ounces</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Ex: 2 (numbers only)"
                       />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="ingedient2"
                    >
                      <Form.Label className="text-center">
                        Ingredient #2
                      </Form.Label>
                      <Form.Control type="text"/>
                      
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="ingredient2oz"
                    >
                      <Form.Label>Ounces</Form.Label>
                      <Form.Control
                        type="number"  
                        />
                  
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="ingedient3"
                    >
                      <Form.Label className="text-center">
                        Ingredient #3
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="ingredient3oz"
                    >
                      <Form.Label>Ounces</Form.Label>
                      <Form.Control
                        type="number" 
                       />                    
                
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="ingedient4"
                    >
                      <Form.Label className="text-center">
                        Ingredient #4
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="ingredient4oz"
                    >
                      <Form.Label>Ounces</Form.Label>
                      <Form.Control
                        type="number"     
                       />               
                    </Form.Group>
                  </Row>
                 
                  <div className="d-grid">
                  <Button variant="primary" type="submit" onClick={()=> {navigate('/savedrecipes',)}}>
                    Multiply!
                    </Button>
                  </div>
                </Form>
               
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}
MultiplyForm.propTypes = {
  onNewRecipeCreation: PropTypes.func
};





export default MultiplyForm