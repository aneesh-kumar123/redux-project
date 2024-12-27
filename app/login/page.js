'use client';

import { useDispatch } from 'react-redux';
import { login } from '../../store';
import { useRouter } from 'next/navigation';
import { Box, TextField, Button } from '@mui/material';

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    dispatch(login());
    router.push('/counter');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Box
        width={300}
        p={4}
        bgcolor="white"
        borderRadius={4}
        boxShadow="0 2px 10px rgba(0,0,0,0.1)"
      >
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Password"
          margin="normal"
          type="password"
          variant="outlined"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ marginTop: 2 }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
