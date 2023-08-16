import React, { useState, useRef } from 'react';
import { Grid, Paper, Avatar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
  const paperStyle = { padding: 30, height: '550px', width: 400, justifyContent:"flex-end" };
  const avatarStyle = { backgroundColor: '#9d0f0f' , margin:"50px" };
  const buttonStyle = { backgroundColor: '#9d0f0f', margin: '15px 0' };
  const textfieldStyle = { color: '#9d0f0f' };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track if passwords match

  const handleSignup = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      // Add your signup logic here, e.g., sending data to a server
      // Simulate successful signup for demonstration
      const isSuccess = true;

      if (isSuccess) {
        
        toast.success('Signup successful!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <Grid>
      <Box display="flex" justifyContent="flex-end">
      <Paper elevation={20} style={paperStyle} >
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <form onSubmit={handleSignup}>
          <Box component="div" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
            <div>
              <TextField label="Email" type="email" placeholder='Enter email' variant="filled" style={textfieldStyle} required value={email} onChange={(e) => setEmail(e.target.value)}/>
              <TextField label="Password" type="password" placeholder='Enter Password' autoComplete="current-password" variant="filled" required value={password} onChange={(e) => setPassword(e.target.value)}/>
              <TextField label="Confirm Password" type="password" placeholder='Confirm Password' autoComplete="current-password" variant="filled" required value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value);setPasswordsMatch(e.target.value === password);}}/>
              {!passwordsMatch && <p style={{ color: '#9d0f0f' }}>Passwords do not match.</p>}
            </div>
          </Box>
          <Button type='submit' variant="contained" style={buttonStyle} >Sign Up</Button>
        </form>
        <Typography>
          Already have an account? <Link to="/" style={{ color: '#9d0f0f' }}>Sign In</Link>
        </Typography>
      </Paper>
      </Box>
      <ToastContainer />
    </Grid>
  );
}

export default SignUp;
