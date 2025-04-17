import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Blogs from './Components/Blogs';
import Signup from './Components/Signup';
import Login from './Components/Login';
import RecipeReviewCard from './Components/RecipeReviewCard';
import CredentialsSignInPage from './Components/CredentialsSignInPage';
import OAuthSignInPage from './Components/OAuthSignInPage';
import CrudBasic from './Components/CrudBasic';

const App = () => {
  return (
    <>
    {/* <RecipeReviewCard /> */}
    {/* <CredentialsSignInPage /> */}
    {/* <OAuthSignInPage /> */}
    {/* <CrudBasic /> */}
      {/* <Router>
        <Link to="/">Home</Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/about">About</Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/contact">Contact</Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/blogs">Blogs</Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/signup">Signup</Link>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link to="/login">Login</Link>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>

      </Router> */}
    </>
  )
}

export default App;
