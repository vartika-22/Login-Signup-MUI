import { Grid, Paper, Avatar, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import Link from '@mui/material/Link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const paperStyle = { padding: 30, height: '550px', width: 400, justifyContent:"flex-end" };
  const avatarStyle = { backgroundColor: "#9d0f0f" ,margin:"60px 0"};
  const buttonStyle = { backgroundColor: "#9d0f0f", margin: "15px 0" };
  const textfieldStyle = { color: "#9d0f0f" };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate successful login for demonstration
    const validEmail = "user@example.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
      toast.success("Login successful!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } else {
      toast.error("Invalid email or password.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  return (
    <Grid>
        <Box display="flex" justifyContent="flex-end">
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockIcon /></Avatar>
                <h2>Sign In</h2>
                </Grid>
                <form onSubmit={handleLogin}>
                <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                    <div>
                    <TextField
                        label="Email"
                        type="email"
                        placeholder='Enter email'
                        variant="filled"
                        style={textfieldStyle}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        placeholder='Enter Password'
                        autoComplete="current-password"
                        variant="filled"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                </Box>
                <Button type='submit' variant="contained" style={buttonStyle}>Sign In</Button>
                </form>
                <Typography>
                Don't have an account? <Link href="/signup" color={"#9d0f0f"}>Sign-Up</Link>
                </Typography>
            </Paper>
      </Box>
      <ToastContainer />
    </Grid>
  );
}

export default Login;
