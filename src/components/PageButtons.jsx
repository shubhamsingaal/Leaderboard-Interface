// components/PageButtons.js
import React from 'react';
import { Stack, Button } from '@mui/material';

const PageButtons = ({ page, onButtonClick }) => (
  <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
    {['all', 'stocks', 'options'].map((item) => (
      <Button
        key={item}
        variant={page === item ? 'contained' : 'outlined'}
        onClick={() => onButtonClick(item)}
        sx={{
          fontWeight: 'bold',
          color: page === item ? 'white' : 'primary.main',
          backgroundColor: page === item ? 'primary.main' : 'transparent',
          '&:hover': {
            backgroundColor: page === item ? 'primary.dark' : 'primary.light',
            color: 'white',
          },
        }}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </Button>
    ))}
  </Stack>
);

export default PageButtons;
