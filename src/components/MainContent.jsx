// components/MainContent.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import TopTraders from './TopTraders';
import KeyMetrics from './KeyMetrics';
import LeaderboardTable from './LeaderboardTable';

const MainContent = ({ page, data }) => {
  const topTraders = data.slice(0, 3);

  const getMostTipsGiven = () => data.reduce((prev, current) => (prev.alerts > current.alerts ? prev : current)).name;
  const getMostActive = () => data.reduce((prev, current) => (prev.trades > current.trades ? prev : current)).name;
  const getLongestStreak = () => data.reduce((prev, current) => (prev.streaks > current.streaks ? prev : current)).name;

  const metrics = [
    { label: 'Most Tips Given', value: getMostTipsGiven() },
    { label: 'Most Active', value: getMostActive() },
    { label: 'Longest Streak', value: getLongestStreak() },
    { label: 'Rank Change', value: 'N/A' },
  ];

  return (
    <Box sx={{ position: 'relative', mb: 4 }}>
      {page === 'all' && (
        <>
          <Typography
            variant="h1"
            sx={{
              position: 'relative',
              top: 10,
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
        </>
      )}
      {page === 'stocks' && (
        <Typography variant="h4" color="textSecondary" sx={{ textAlign: 'center', mt: 4 }}>
          Stocks Page - Coming Soon
        </Typography>
      )}
      {page === 'options' && (
        <Typography variant="h4" color="textSecondary" sx={{ textAlign: 'center', mt: 4 }}>
          Options Page - Coming Soon
        </Typography>
      )}
      {page === 'profile' && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h4" fontWeight="bold">
            Profile Page
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            This is a placeholder for the user's profile page.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default MainContent;
