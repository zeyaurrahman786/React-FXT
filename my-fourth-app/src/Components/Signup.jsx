import React from 'react';
// import "../Components/Signup.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Signup = () => {
  return (
    <>
      <div className="container w-96 h-96 bg-slate-700">
        <h3>SIGN UP </h3>
        <form>
           <input
             type="email"
             name="email"
           />
           <input
             type="password"
             name="password"
           />
           <button type="submit">
             Submit
           </button>
         </form>
      </div>
    </>
  )
}

export default Signup