import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, Box, Button } from '@mui/material';

const TopTraders = ({ topTraders }) => {
  const rankColors = ['#FFD700', '#C0C0C0', '#CD7F32']; // Gold, Silver, Bronze
  const rankText = ['1st', '2nd', '3rd'];

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
      {topTraders.map((trader, index) => (
        <Grid item xs={12} sm={3.5} key={index}>
          <Card
            sx={{
              backgroundColor: '#FFFFFF',
              textAlign: 'center',
              borderRadius: 3,
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              position: 'relative',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            {/* Gradient overlay for the top half */}
            <Box
              sx={{
                background: `linear-gradient(135deg, ${rankColors[index]} 30%, transparent 100%)`,
                height: '37%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            />

            {/* Rank Text Overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: 10,
                right: 12,
                color: '#081945',
                fontSize: '3rem',
                fontWeight: 'bold',
                zIndex: 2, // Above gradient but below avatar
              }}
            >
              {rankText[index]}
            </Box>

            <Box
              sx={{
                background: rankColors[index],
                p: 2,
                borderRadius: '50%',
                width: 80,
                height: 80,
                mx: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 2,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                zIndex: 3, // Stack above the gradient and text
              }}
            >
              <Avatar
                src={`https://via.placeholder.com/150?text=${trader.name.charAt(0)}`}
                alt={trader.name}
                sx={{ width: 56, height: 56, border: '2px solid white' }}
              />
            </Box>

            <CardContent sx={{ paddingTop: 4, position: 'relative', zIndex: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                  fontFamily: 'Playfair Display, serif',
                }}
              >
                {trader.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9em' }}
              >
                {trader.tradingStyle}
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                sx={{
                  my: 1,
                  color: '#666',
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: '0.5px',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', mr: 1, fontFamily: 'Poppins, sans-serif' }}
                >
                  {trader.xScore}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Xscore
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  mb: 2,
                  color: '#666',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <Typography variant="body2">Alerts: {trader.alerts}</Typography>
                <Typography variant="body2">Trades: {trader.trades}</Typography>
                <Typography variant="body2">Avg Gain: {trader.avgGain}</Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  color: '#3f51b5',
                  borderColor: '#3f51b5',
                  fontFamily: 'Poppins, sans-serif',
                  '&:hover': {
                    backgroundColor: '#3f51b5',
                    color: '#fff',
                  },
                }}
              >
                Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopTraders;
