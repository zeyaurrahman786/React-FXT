import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { createSvgIcon } from '@mui/material/utils';

const Login = () => {
  return (
    <>
    <div>Welcome to the Login Page</div>
    <HomeIcon color="primary" />
    <form style={{}}>
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <TextField id="outlined-basic" label="Password" variant="outlined" />
    <Button variant="contained">Submit</Button>
    </form>
    </>
  )
}

export default Login