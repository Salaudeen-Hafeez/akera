import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import GeneralButton from '../GeneralButton'

function Section2() {
  return (
    <Box sx={{
      width: '100%',
      height: 'auto',
      marginTop: '5rem',
      marginBottom: '5rem',
      }}>
        <Grid container spacing={2}>
        <Grid item xs={5}>
          <Box 
            sx={{
            width: '100%',
            height: 'auto',
            padding: '2rem 5rem 5rem 5rem',
          }}
          > 
          <Typography variant='h4' component='h1' gutterBottom>About Akera</Typography> 
          <Typography variant='body1' 
            sx={{
            padding: '2rem 0',
          }}
          >
            Small heading giving overview of the site and a brief subtitle
            Small heading giving overview of the site and a brief subtitle
            Small heading giving overview of the site and a brief subtitle
            Small heading giving overview of the site and a brief subtitle
            Small heading giving overview of the site and a brief subtitle
            Small heading giving overview of the site and a brief subtitle
            Small heading giving overview of the site and a brief subtitle
            Small heading giving overview of the site and a brief subtitle
            Small heading giving overview of the site and a brief subtitle
            Small heading giving overview of the site and a brief subtitle
          </Typography>
          <GeneralButton label={'Learn more'} />
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
              right: '5rem',
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
              right: '25rem',
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
      </Grid>
    </Box>
  )
}

export default Section2