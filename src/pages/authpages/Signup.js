import React from "react";
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

export function Signup(){

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const [error, setError] = useState('');
  const {signup, currentUser} = useAuth();
  const navigate = useNavigate();
  // console.log(currentUser.email);
  
  async function submitHandler(event){
    event.preventDefault(); 

    if(passwordRef.current.value !== confirmRef.current.value){
     return setError('Password mismatch.');
    }

    try{
      setError('');
      await signup(emailRef.current.value, passwordRef.current.value);
      const auth = getAuth();
      localStorage.setItem('user',auth.currentUser.uid);
      navigate('/');
      // navigate('/');
    }catch(e){
      console.log(e)
      setError('account creation failed')
    }
    
  }


  return(
    <div>
      <Card>
       <Card.Body>
       <Form onSubmit={submitHandler}>
         <Form.Group>
          {error&&<Alert variant="danger">{error}</Alert>}
         </Form.Group>
         <h2>{currentUser &&currentUser.email}</h2>
          <Form.Group className='mt-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} placeholder='Email'></Form.Control>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} placeholder='Password'></Form.Control>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Form.Label>Confrim Password</Form.Label>
            <Form.Control ref={confirmRef} placeholder='Confirm Password'></Form.Control>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Button type="submit">Signup</Button>
          </Form.Group>
        </Form>
       </Card.Body>
      </Card>
    </div>
  )
}