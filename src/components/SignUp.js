import React, {useRef, useState} from 'react'
import {Card, Form, Button, Container, Alert} from "react-bootstrap"
import {useAuth} from '../contexts/AuthContext'
import { AuthProvider } from '../contexts/AuthContext'


export default function SignUp() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading]= useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError('Passwords do not match')
    }
    try{
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError("Failed to create account")
    }
    setLoading(false)
  }

  return (
    <div>
      <AuthProvider>
        <Container className="d-flex align-items-center justify-content-center" style={{mindHeight:"100vh"}}>
          <div className='w-100' style={{minHeight: "100vh"}}>
            <Card>
              <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
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
                  <Button disabled={loading} type= "submit" className='w-100'>Sign Up</Button>
                </Form>
              </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
              Already have an account? Log In
            </div>
          </div>
        </Container>
      </AuthProvider>
      
    </div>
  )
}
