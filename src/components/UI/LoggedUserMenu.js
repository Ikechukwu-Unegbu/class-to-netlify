import React from "react";
import { Link } from "react-router-dom";
import styles from './LoggedUserMenu.module.css';
import { useAuth } from "../../context/AuthContext";

export default function LoggedUserMenu(){
  const {currentUser} = useAuth();
  return(
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li><Link to='update-profile'>Update</Link></li>
        <li><Link to='/settings'>Settings</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {currentUser && <li><Link to='/blog'>Extra For Logged in</Link></li>}
        <li><Link to='update-profile'>About</Link></li>
      </ul>
    </nav>
  )
}
