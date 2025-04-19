// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Blogs from './Components/Blogs';
// import Signup from './Components/Signup';
// import Login from './Components/Login';
// import RecipeReviewCard from './Components/RecipeReviewCard';
// import CredentialsSignInPage from './Components/CredentialsSignInPage';
// import OAuthSignInPage from './Components/OAuthSignInPage';
// import CrudBasic from './Components/CrudBasic';

// const App = () => {
//   return (
//     <>
//     {/* <RecipeReviewCard /> */}
//     {/* <CredentialsSignInPage /> */}
//     {/* <OAuthSignInPage /> */}
//     {/* <CrudBasic /> */}
//       {/* <Router>
//         <Link to="/">Home</Link>
//         &nbsp; &nbsp; &nbsp; &nbsp;
//         <Link to="/about">About</Link>
//         &nbsp; &nbsp; &nbsp; &nbsp;
//         <Link to="/contact">Contact</Link>
//         &nbsp; &nbsp; &nbsp; &nbsp;
//         <Link to="/blogs">Blogs</Link>
//         &nbsp; &nbsp; &nbsp; &nbsp;
//         <Link to="/signup">Signup</Link>
//         &nbsp; &nbsp; &nbsp; &nbsp;
//         <Link to="/login">Login</Link>

//         <Routes>
//           <Route path='/' element={<Home />}></Route>
//           <Route path='/about' element={<About />}></Route>
//           <Route path='/contact' element={<Contact />}></Route>
//           <Route path='/blogs' element={<Blogs />}></Route>
//           <Route path='/signup' element={<Signup />}></Route>
//           <Route path='/login' element={<Login />}></Route>
//         </Routes>

//       </Router> */}
//     </>
//   )
// }

// export default App;

// import React from 'react';
// import CredentialsSignInPage from "./Components/CredentialsSignInPage"
// import Form from './Components/Form';
// import Buttons from './Components/Buttons';
// import Ratings from './Components/Ratings';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';
// import Alert from '@mui/material/Alert';
// import CheckIcon from '@mui/icons-material/Check';
// import BasicAlerts from './Components/BasicAlerts';

// const App = () => {
//   // const [value, setValue] = React.useState(2);
//   return (
//     <div>
//       {/* <CredentialsSignInPage /> */}
//       {/* <Form /> */}
//       {/* <Buttons /> */}
//       {/* <Ratings /> */}
//       {/* <Box sx={{ '& > legend': { mt: 2 } }}>
//       <Typography component="legend">Controlled</Typography>
//       <Rating
//         name="simple-controlled"
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       />
//     </Box> */}
//     {/* <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
//       Login successful.
//     </Alert> */}
//   <BasicAlerts />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import BasicAlerts from './Components/BasicAlerts'
// import Cards from './Components/Cards'

// const App = () => {
//   return (
//     <div>
//       {/* <BasicAlerts /> */}
//       <div className='flex bg-red-600 font'>
//         <Cards/>
//         <Cards/>
//       </div>

//     </div>
//   )
// }

// export default App





// Form Handling
import { useRef } from "react";

const App = () => {
  const name = useRef([]);
  const email = useRef([]);
  const password = useRef([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      name.current.value,
      email.current.value,
      password.current.value
    );
  };

  return (
    <div>
      <form
        className="p-6 mt-12 ml-12 w-[350px] h-full rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center">SIGN UP</h1>
        <input
          ref={name}
          className="gap-4 p-2 m-2 rounded-md bg-gray-200 border-solid border-2 border-sky-500 outline-none"
          type="text"
          placeholder="name"
        />
        <input
          ref={email}
          className="gap-4 p-2 m-2 rounded-md bg-gray-200 border-solid border-2 border-sky-500 outline-none"
          type="email"
          placeholder="email"
        />
        <input
          ref={password}
          className="gap-4 p-2 m-2 rounded-md bg-gray-200 border-solid border-2 border-sky-500 outline-none"
          type="password"
          placeholder="password"
        />
        <input
          className="px-6 py-1 rounded-xl bg-sky-500 text-white flex ml-14 mt-4 hover:bg-red-600"
          type="submit"
          value={"Sign Up"}
        />
      </form>
    </div>
  );
};

export default App;
