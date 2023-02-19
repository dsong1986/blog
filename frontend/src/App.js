import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Home from "./pages/home/Home"
import Header from './components/header/Header'

function App() {
  return (
   <>
     <Router>
        <Header />
        <Routes>
         
          <Route path="/" element={<Home />} />
          {/* <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Regsiter} />
          <Route exact path='/post/:id' component={DetailsPages} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/create' component={Create} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
   </>
  );
}



export default App;
