'use client';

import { useContext } from 'react';
import { CounterContext } from '../../context/counterContext';
import { Box, Button, Typography } from '@mui/material';

export default function CounterPage() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Typography variant="h4" color='primary' gutterBottom>
        Counter: {count}
      </Typography>
      <Box display="flex" gap={2}>
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setCount(count - 1)}>
          Decrement
        </Button>
        <Button variant="outlined" onClick={() => setCount(0)}>
          Reset
        </Button>
      </Box>
    </Box>
  );
}
