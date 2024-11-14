import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Box, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import '../css/LeaderboardTable.css';

const LeaderboardTable = ({ traders }) => (
  <TableContainer component={Paper} className="table-container">
    <Table sx={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <TableHead>
        <TableRow className="table-header">
          <TableCell className="table-cell" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Rank</TableCell>
          <TableCell className="table-cell" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Name</TableCell>
          <TableCell className="table-cell" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Trading Style</TableCell>
          <TableCell className="table-cell" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Streaks</TableCell>
          <TableCell className="table-cell" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Alerts</TableCell>
          <TableCell className="table-cell" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Trades</TableCell>
          <TableCell className="table-cell" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Avg Gain</TableCell>
          <TableCell className="table-cell" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Xscore</TableCell>
          <TableCell className="table-cell" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Trophies</TableCell>
          <TableCell className="table-cell" sx={{ color: '#FFFFFF', fontWeight: 'bold' }} align="right">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {traders.map((trader, index) => (
          <TableRow
            key={index}
            className={`table-row ${index === 0 ? 'first-place' : index === 1 ? 'second-place' : index === 2 ? 'third-place' : ''}`}
          >
            <TableCell className="table-cell rank-cell">{trader.rank}</TableCell>
            <TableCell className="table-cell">
              <Box className="trader-name" display="flex" alignItems="center">
                <Avatar
                  src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
                  sx={{ mr: 2 }}
                />
                <Typography variant="body2" sx={{ fontWeight: 'bold', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                  {trader.name}
                </Typography>
              </Box>
            </TableCell>
            <TableCell className="table-cell">{trader.tradingStyle}</TableCell>
            <TableCell className="table-cell">{trader.streaks}</TableCell>
            <TableCell className="table-cell">{trader.alerts}</TableCell>
            <TableCell className="table-cell">{trader.trades}</TableCell>
            <TableCell className="table-cell">{trader.avgGain}</TableCell>
            <TableCell className="table-cell">
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  backgroundColor: '#1e88e5',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                }}
              >
                X {trader.xScore}
              </Box>
            </TableCell>
            <TableCell className="table-cell trophy-cell">{trader.trophies}</TableCell>
            <TableCell className="table-cell" align="right">
              <IconButton color="primary">
                <PersonIcon fontSize="small" />
              </IconButton>
              <IconButton color="primary">
                <GroupIcon fontSize="small" />
              </IconButton>
              <IconButton color="primary">
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default LeaderboardTable;
