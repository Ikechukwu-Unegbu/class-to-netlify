import React from "react";
import {Form, Button,Alert, Card} from 'react-bootstrap';
import { useAuth } from "../../context/AuthContext";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import LoggedUserMenu from "../../components/UI/LoggedUserMenu";

export function Login(){

  
  const emailRef = useRef();
  const passwordRef = useRef();
  const {login, currentUser} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();




  async function handleLogin(e){
    e.preventDefault()
    try{
      setError('')
      setLoading(true)
      // const auth = getAuth()
      await login(emailRef.current.value, passwordRef.current.value ); 
      const auth = getAuth();
      localStorage.setItem('user',auth.currentUser.uid);
      navigate('/'); 
    }catch(e){
      console.log(e);
      setLoading(false)
      setError('failed to login')
    }
    setLoading(false)
   
  }


  return(
    <div>
      <LoggedUserMenu/>
      <Card>
       <Card.Body>
         <h3>Login</h3>
       <Form onSubmit={handleLogin}>
          <Form.Group className='mt-3'>
            <h3>{error && <Alert>{error}</Alert>}</h3>
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} placeholder='Email'></Form.Control>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} placeholder='Password'></Form.Control>
          </Form.Group>
          <Form.Group className='mt-3'>
            <Button  disabled={loading}  type="submit">Login</Button>
          </Form.Group>
        </Form>
       </Card.Body>
      </Card>
    </div>
  )
}