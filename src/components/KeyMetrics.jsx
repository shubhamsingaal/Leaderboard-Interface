import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const KeyMetrics = ({ metrics }) => (
  <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
    {metrics.map((metric, index) => (
      <Grid item xs={12} sm={2.5} key={index}>
        <Card sx={{ textAlign: 'center', borderRadius: 3, boxShadow: 3, padding: 2, backgroundColor:'#FFFFFF'}}>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{metric.label}</Typography>
              <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>{metric.value}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default KeyMetrics;
