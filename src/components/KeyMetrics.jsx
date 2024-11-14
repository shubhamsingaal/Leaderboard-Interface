import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Avatar } from '@mui/material';

const KeyMetrics = ({ metrics }) => (
  <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
    {metrics.map((metric, index) => (
      <Grid item xs={12} sm={2.5} key={index}>
        <Card sx={{
          textAlign: 'center',
          borderRadius: 3,
          boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)',
          padding: 2,
          backgroundColor: '#FFFFFF',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          height: '80px',  // Fixed height for consistent layout
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderImageSlice: 1,
          borderImageSource: 'linear-gradient(135deg, #3f51b5, #1e88e5)',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
          },
        }}>
          <CardContent sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5,
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar
                  src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`} // Random avatar URL
                  alt={metric.label}
                  sx={{
                    width: 40,
                    height: 40,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    border: '2px solid #FFFFFF',
                  }}
                />
                <Typography sx={{ fontWeight: 'bold', fontSize: '1em', color:'grey' }}>{metric.label}</Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '1.5em', fontFamily:'poppins' }}>{metric.value}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default KeyMetrics;
