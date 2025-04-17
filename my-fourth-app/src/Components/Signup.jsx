import React from 'react';
// import "../Components/Signup.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Signup = () => {
  return (<>
      <div>Welcome to the Signup Page</div>
      <form>
      <TextField type='text' id="outlined-basic" label="FullName" variant="outlined" />
      <TextField type='email' id="outlined-basic" label="Email" variant="outlined" />
      <TextField type='password' id="outlined-basic" label="Password" variant="outlined" />
      <Button variant="contained">Submit</Button>
      </form>
    </>
  )
}

export default Signup