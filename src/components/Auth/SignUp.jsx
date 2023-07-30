import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import {Card, Form, Button, Container} from "react-bootstrap"
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpMessage, setSignUpMessage] =useState('')
  const [signUpErrorMessage, setSignUpErrorMessage] =useState('')
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
      setSignUpMessage(`You've successfully signed up, ${userCredential.user.email}. Please log in.`)
    }).catch((error) => {
      setSignUpErrorMessage(`There was an error signing up: ${error.message}!`)
    })
  }
  return (
    <div className='sign-in-container'>

      <Container className="d-flex align-items-center justify-content-center" style={{mindHeight:"100vh"}}>
        <div className='w-100' style={{minHeight: "100vh"}}>
          <Card>
            <Card.Body>
              <h2 className='text-center mb-4'>Create Account</h2>
              {signUpErrorMessage && <Alert variant='danger'>{signInErrorMessage}</Alert>}
              {signUpMessage && <Alert variant='success'>{signInMessage}</Alert>}
              <Form onSubmit={signUp}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder='enter your password' value={password} onChange= {(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button  type= "submit" className='w-100 mt-3'>Sign Up</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
            Already have an account? <Link to="/signin">Log In</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
