import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, Box, Button } from '@mui/material';
import Divider from '@mui/material/Divider';

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
                height: '35%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
                opacity: 0.4,
                boxShadow: '0px 12px 12px rgba(0, 0, 0, 0.1)',
              }}
            />
            {/* Rank Text Overlay with Superscript Style */}
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                right: 16,
                color: '#081945',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                zIndex: 2,
                opacity: 0.4,
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              {rankText[index][0]}
              <Typography
                component="span"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  verticalAlign: 'super',
                  opacity: 0.7,
                  ml: 0.3,
                }}
              >
                {rankText[index].slice(1)}
              </Typography>
            </Box>
            {/* Avatar without square box */}
            <Box
              sx={{
                mx: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 4,
                position: 'relative',
                zIndex: 3,
              }}
            >
              <Avatar
                src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
                alt={trader.name}
                sx={{ width: 70, height: 70, border: '2px solid white', borderRadius: '50%' }}
              />
            </Box>
            <CardContent sx={{ paddingTop: 3, position: 'relative', zIndex: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                  fontFamily: 'Playfair Display, serif',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                {trader.name} <Avatar sx={{ width: 16, height: 16, bgcolor: '#3f51b5' }}>✓</Avatar>
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                gutterBottom
                sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85em' }}
              >
                {trader.tradingStyle}
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  my: 1,
                  color: '#666',
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: '0.5px',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    mr: 1,
                    fontFamily: 'Poppins, sans-serif',
                    backgroundColor: '#f1f1f1',
                    padding: '2px 8px',
                    borderRadius: '5px',
                  }}
                >
                  X {trader.xScore}
                </Typography>
              </Box>
              {/* Metrics with vertical dividers */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  color: '#666',
                  fontFamily: 'Poppins, sans-serif',
                  mb: 2,
                }}
              >
                <Typography variant="body2">Alerts: {trader.alerts}</Typography>
                <Divider orientation="vertical" flexItem />
                <Typography variant="body2">Trades: {trader.trades}</Typography>
                <Divider orientation="vertical" flexItem />
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
