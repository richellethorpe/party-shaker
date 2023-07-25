import 'bootstrap/dist/css/bootstrap.min.css'
import { Form , Container, Row }  from 'react-bootstrap'
import React from 'react'

export default function MultiplyForm() {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Ingrediant #1</Form.Label>
          <Form.Control type="ingrediant1" placeholder='gin' />

        </Form.Group>
      </Form>
    </div>
  )
}
