import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import Section4Component from './Section4Component';

function Section4() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '3rem',
        width: '100%',
        }}
    >
      <Box sx={{
        width: '80%',
        height: 'auto',
        }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography 
              variant='h4'
              sx={{
              width: '100%',
              textAlign: 'center',
              marginTop: '3rem',
              }}
              >
              Do amaizing things with Akera
            </Typography>
            </Grid>
            <Grid item xs={3}>
              <Section4Component />
            </Grid>
            <Grid item xs={3}>
              <Section4Component />
            </Grid>
            <Grid item xs={3}>
              <Section4Component />
            </Grid>
            <Grid item xs={3}>
              <Section4Component />
            </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Section4