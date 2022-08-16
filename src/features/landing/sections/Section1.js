import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Section1Component from './Section1Component'

function Section1() {
  return (
    <Box sx={{
      width: '100%',
      height: 'auto',
      marginTop: '5rem',
      marginBottom: '5rem',
      background: 'lightblue',
      }}>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography variant='h4' component='h1' gutterBottom>Why you need Akera</Typography>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box 
            sx={{
            height: '30rem',
            marginTop: '2rem',
            marginBottom: '5rem',
            position: 'relative'
            }}
          >
            <Box
            sx={{
              width: '50%',
              height: '100%',
              position: 'absolute',
              left: '5rem',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            >
            </Box>
            <Box
            sx={{
              width: '35%',
              height: '75%',
              position: 'absolute',
              left: '25rem',
              top: '3.75rem',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            >

            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '1rem',
              marginRight: '1rem',
              width: '90%',
              height: '5rem',
          }}
          >
          <Section1Component />
          <Section1Component />
          <Section1Component />
          <Section1Component />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Section1