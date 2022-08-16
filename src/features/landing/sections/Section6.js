import React from 'react'
import Section6Component from './Section6Component';
import { Box, Grid } from '@mui/material';


function Section6() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        marginTop: '3rem',
        paddingBottom: '2rem',
      }}
    >
      <Box sx={{
        width: '80%',
        height: 'auto',
        }}>
        <Grid container spacing={6}>
          <Grid item xs={4}>
            <Section6Component />
          </Grid>
          <Grid item xs={4}>
            <Section6Component />
          </Grid>
          <Grid item xs={4}>
            <Section6Component />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Section6