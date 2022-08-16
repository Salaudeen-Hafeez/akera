import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import Section3Componet from './Section3Componet';
import GeneralButton from '../GeneralButton';

function Section3() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: '2rem',
        background: 'lightblue',
        width: '100%',
        height: 'auto',
        }}
    >
      <Box sx={{
        width: '80%',
        height: 'auto',
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography 
              variant='h4'
              sx={{
              width: '100%',
              marginBottom: '3rem',
              textAlign: 'center',
              }}
              >
              Do amaizing things with Akera
            </Typography>
            </Grid>
            <Grid item xs={4}>
              <Section3Componet />
            </Grid>
            <Grid item xs={4}>
              <Section3Componet />
            </Grid>
            <Grid item xs={4}>
              <Section3Componet />
            </Grid>
        </Grid>
      </Box>
      <GeneralButton label={'Learn more'} />
    </Box>
  )
}

export default Section3