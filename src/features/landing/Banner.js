import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';

import GeneralButton from './GeneralButton';

function Banner() {
  return (
    <Box
      sx={{
        height: '60rem',
        paddingTop: '5rem',
      }}
    >
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <Box className='animation'></Box>
      </Grid>
      <Grid item xs={5}>
        <Typography variant='h1' component='div' gutterBottom>
          Big Headings for Heros page
        </Typography> 
        <Typography variant='h3' component='div' gutterBottom>
          Small heading giving overview of the site and a 
          brief subtitle
        </Typography> 
        <GeneralButton label={'Learn more'}/>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Banner