import 'bootstrap/dist/css/bootstrap.min.css'
import { Form , Container, Row }  from 'react-bootstrap'
import React from 'react'

export default function MultiplyForm() {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Ingredient #1</Form.Label>
              <Form.Control type="ingredient1" placeholder='gin' />

            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
