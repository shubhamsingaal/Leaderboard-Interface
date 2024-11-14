// components/Header.js
import React from 'react';
import { Box, TextField, IconButton, Avatar, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ onProfileClick }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
    <TextField
      placeholder="Search Ticker, User, or Trader..."
      variant="outlined"
      sx={{
        width: '70%',
        maxWidth: 350,
        borderRadius: 2,
        backgroundColor: '#f0f0f0',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#d0d0d0',
          },
          '&:hover fieldset': {
            borderColor: '#a0a0a0',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#3f51b5',
          },
          height: '2.4em', // Reduced input height
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
      }}
    />
    <IconButton onClick={onProfileClick} sx={{ ml: 2 }}>
      <Avatar
        src="https://randomuser.me/api/portraits/men/11.jpg" // Replace with actual user avatar if available
        alt="Profile"
        sx={{
          width: 40,
          height: 40,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          border: '2px solid #ffffff',
        }}
      />
    </IconButton>
  </Box>
);

export default Header;
