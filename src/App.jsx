import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import PageButtons from './components/PageButtons';
import MainContent from './components/MainContent';
import data from './data.json';

const App = () => {
  const [page, setPage] = useState('all'); // Track which page to display

  // Function to handle button clicks for different pages
  const handleButtonClick = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <Box sx={{ width: '100%', padding: 4 }}>
      {/* Header Component with Search Bar and Profile Avatar */}
      <Header onProfileClick={() => setPage('profile')} />

      {/* Page Buttons Component */}
      <PageButtons page={page} onButtonClick={handleButtonClick} />

      {/* Main Content Based on Selected Page */}
      <MainContent page={page} data={data} />
    </Box>
  );
};

export default App;
