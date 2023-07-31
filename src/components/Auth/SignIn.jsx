import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import {Card, Form, Button, Container, Alert} from "react-bootstrap"
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInErrorMessage, setSignInErrorMessage] =useState('')
  const [signInMessage, setSignInMessage] =useState('')
  const [signOutSuccess, setSignOutSuccess] = useState(null);


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
      setSignInMessage(`You've successfully signed in, ${userCredential.user.email}!`)

    }).catch((Message) => {
      console.log(Message);
      setSignInErrorMessage("Account does not exist, please try again or register an account")
    })
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
    }
  return (
    <div className='sign-in-container'>
      <Container className="d-flex align-items-center justify-content-center" style={{mindHeight:"100vh"}}>
        <div className='w-100' style={{minHeight: "100vh"}}>
          <Card>
            <Card.Body>
              <h2 className='text-center mb-4'>Sign In</h2>
              {signInErrorMessage && <Alert variant='danger'>{signInErrorMessage}</Alert>}
              {signInMessage && <Alert variant='success'>{signInMessage}</Alert>}

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
          
          {signOutSuccess}
          <br />
          <Button onClick={doSignOut}>Sign out</Button>
        </div>
      </Container>
      
    </div>
  );


};


export default SignIn;
