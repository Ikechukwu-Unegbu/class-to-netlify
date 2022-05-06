import { Button } from 'react-bootstrap';
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import LoggedUserMenu from '../components/UI/LoggedUserMenu';

export function Dashboard(){

  const {currentUser, logout} = useAuth();
  const navigate = useNavigate();

  async function logoutHandler(){
   await logout();
    localStorage.removeItem('user')
    navigate('/login');
  }

  return (
    <div>
      <LoggedUserMenu/>
      <br></br>
      <h2>User Profile</h2>
      <strong>Email <h2>{currentUser && currentUser.email}</h2> </strong>
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  )
}