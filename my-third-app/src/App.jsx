// // import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from "./Components/Contact";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";

// function App() {
//   return (
//     <>
//     <Router>
//       {/* Navigation Link */}
//       <Link to="/">Home</Link>
//       &nbsp; &nbsp; &nbsp;
//       <Link to="/about">About</Link>
//       &nbsp; &nbsp; &nbsp;
//       <Link to="/contact">Contact</Link>
//       &nbsp; &nbsp; &nbsp;
//       <Link to="/login">Login</Link>
//       &nbsp; &nbsp; &nbsp;
//       <Link to="/signup">Signup</Link>

//       {/* Route Setup */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//     </>
//   );
// }

// export default App;







import React from 'react'
import Form from './Form'

const App = () => {
  return (
    <>
      <Form />
    </>
  )
}

export default App