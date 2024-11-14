import React from 'react';
import TopTraders from './components/TopTraders';
import KeyMetrics from './components/KeyMetrics';
import LeaderboardTable from './components/LeaderboardTable';
import data from './data.json';
import { Typography, Box, Tabs, Tab, TextField } from '@mui/material';

const App = () => {
  // Top 3 traders for the "Champions" section
  const topTraders = data.slice(0, 3);

  // Calculate dynamic metrics
  const getMostTipsGiven = () => {
    return data.reduce((prev, current) => (prev.alerts > current.alerts ? prev : current)).name;
  };

  const getMostActive = () => {
    return data.reduce((prev, current) => (prev.trades > current.trades ? prev : current)).name;
  };

  const getLongestStreak = () => {
    return data.reduce((prev, current) => (prev.streaks > current.streaks ? prev : current)).name;
  };

  const metrics = [
    { label: 'Most Tips Given', value: getMostTipsGiven() },
    { label: 'Most Active', value: getMostActive() },
    { label: 'Longest Streak', value: getLongestStreak() },
    { label: 'Rank Change', value: 'N/A' } // Placeholder for "Rank Change"
  ];

  return (
    <Box sx={{ width: '100%', padding: 4 }}>
      <TextField
        placeholder="Start typing Ticker name, User, or Trader..."
        variant="outlined"
        fullWidth
        sx={{ mb: 3, borderRadius: 2 }}
      />
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered sx={{ mb: 3, color:'#FFF7D1', fontWeight: 'bold' }}>
        <Tab label="All" />
        <Tab label="Stocks" />
        <Tab label="Options" />
      </Tabs>
      <Box sx={{ position: 'relative', mb: 4 }}>
        {/* Background Text */}
        <Typography
          variant="h1"
          sx={{
            position: 'relative',
            top: 10,
            left: 0,
            right: 0,
            textAlign: 'center',
            fontSize: '8rem',
            color: '#d0d0d0',
            opacity: 0.4,
            fontWeight: 'bold',
            zIndex: -1,
            userSelect: 'none',
          }}
        >
          Champions
        </Typography>
        
        <TopTraders topTraders={topTraders} />
        <KeyMetrics metrics={metrics} />
        <LeaderboardTable traders={data} />
      </Box>
    </Box>
  );
};

export default App;
