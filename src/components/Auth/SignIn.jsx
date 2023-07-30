import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import {Card, Form, Button, Container, Alert} from "react-bootstrap"
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] =useState('')

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)

    }).catch((error) => {
      console.log(error);
      setSignInError("Account does not exist, please try again or register an account")
    })
  }
  return (
    <div className='sign-in-container'>
      <Container className="d-flex align-items-center justify-content-center" style={{mindHeight:"100vh"}}>
        <div className='w-100' style={{minHeight: "100vh"}}>
          <Card>
            <Card.Body>
              <h2 className='text-center mb-4'>Sign In</h2>
              {signInError && <Alert variant='danger'>{signInError}</Alert>}

              <Form onSubmit={signIn}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder='enter your password' value={password} onChange= {(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button  type= "submit" className='w-100 mt-3'>Sign In</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
            Don't have an account? <Link to="/signup">Register</Link>
          </div>
        </div>
      </Container>
      
    </div>
  );
};

export default SignIn;
