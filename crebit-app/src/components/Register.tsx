// src/components/Register.tsx
import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';
import visaHack from '../assets/hackathon.jpeg';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Username: ${username}`);
    // Handle registration logic here
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
          <Box component="form" onSubmit={handleRegister} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
