import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Home from "./pages/home/Home"
import Header from './components/header/Header'
import Details from './pages/details/Details';
import Login from './pages/login/Login'
import Account from './pages/account/Account'
import Register from './pages/login/register';
import Create from './components/create/Create';
import Footer from './components/footer/Footer';

function App() {
  return (
   <>
     <Router>
        <Header />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/details/:id"    element={<Details />} />
          <Route exact path='/login'    element={<Login />} />
          <Route exact path='/account'  element={<Account />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/create'   element={<Create />} />
       
        </Routes>
        <Footer />
      </Router>
   </>
  );
}



export default App;
