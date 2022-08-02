import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Made with
        </Typography>{' '}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ padding: 5 }}>
            <img
              width="26"
              alt="React"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
          </span>
          <span style={{ padding: 5 }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              title="NextJS"
              width="40"
            />
          </span>
          <span style={{ padding: 5 }}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              title="NextJS"
              width="25"
            />
          </span>{' '}
        </Box>
      </Box>
      <Typography variant="h6" align="center" gutterBottom>
        Ervis Hajdari
      </Typography>
    </Box>
  );
}
