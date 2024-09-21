// src/components/Login.tsx
import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import visaHack from '../assets/hackathon.jpeg';


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    // Handle login logic here
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirect to registration page
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${visaHack})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Box textAlign="center" mb={2}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa Inc. Logo"
              style={{ width: '150px', height: 'auto' }}
            />
          </Box>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 1 }}
              onClick={handleRegisterRedirect}
            >
              Register
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
