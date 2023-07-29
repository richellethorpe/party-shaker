import React, {useRef} from 'react'
import {Card, Form, Button, Container} from "react-bootstrap"

export default function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()


  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center" style={{mindHeight:"100vh"}}>
        <div className='w-100' style={{minHeight: "100vh"}}>
          <Card>
            <Card.Body>
              <h2 className='text-center mb-4'>Sign Up</h2>
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmationRef} required />
                </Form.Group>
                <Button type= "submit" className='w-100'>Sign Up</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
            Already have an account? Log In
          </div>
        </div>
      </Container>
    </div>
  )
}
