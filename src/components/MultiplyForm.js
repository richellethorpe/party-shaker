import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
// import { v4 } from "uuid"
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function MultiplyForm({props}) {
  const [ingrediant1, setIngrediant1] = useState("")
  const [ingrediant1oz, setIngrediant1oz] = useState("")
  const navigate = useNavigate();




  return (
    <>
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <div className="border border-3 border-primary"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold mb-2 text-uppercase">Multiply Your Cocktail</h2>
                <p className=" mb-5">Please enter your cocktail specifications</p>
                <Form>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="ingedient1"
                    >
                      <Form.Label className="text-center">
                        Ingredient #1
                      </Form.Label>
                      <Form.Control type="text" placeholder="ex: Gin" onChange={(e) => setIngrediant1(e.target.value)} />
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
                        onChange={(e) => setIngrediant1oz(e.target.value)}
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
                      <Form.Control type="text" />
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
                  <Row className="mb-3">

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="drinkQty"
                    >
                      <Form.Label>How many total cocktails do you want?</Form.Label>
                      <Form.Control
                        type="number"  
                        placeholder="Ex: 200"                
                      />
                    </Form.Group>
                  </Row>
                  <div className="d-grid">
                    <Button variant="primary" type="submit" onClick={()=> {navigate('/cocktailRecipe', {state:{ingrediant1, ingrediant1oz}})}}>
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


export default MultiplyForm