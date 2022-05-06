import logo from './logo.svg';
import './App.css';
import { Signup } from './pages/authpages/Signup';
import { Container } from 'react-bootstrap';
import { Login } from './pages/authpages/Login';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Dashboard } from './pages/Dashboard';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  return (
    <Container 
      style={{minHeight:"fit-content"}} 
      className="d-flex align-items-center justify-content-center">
        <AuthProvider>
          <Routes>
          <Route path="/"  element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
          
            {/* <Route path='/' element={<Dashboard/>}/> */}
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>   
        </AuthProvider>
    </Container>
  );
}

export default App;
