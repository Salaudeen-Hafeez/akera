import { Box, Typography } from '@mui/material'
import React from 'react'
import Section5Component from './Section5Component'

function Section51() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'cetre',
        width: '100%',
        background: 'lightblue'
      }}
    >
      <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '70%',
        height: '20rem',
      }}
      >
        <Typography variant='h6' component='h6'>Want to know more about AKERA?</Typography> 
        <Typography 
          variant='body1'
          sx={{
          width: '50%',
          textAlign: 'center',
      }}
        >
          Small heading giving overview of the site and a brief subtitle
          Small heading giving overview of the site and a brief subtitle
          Small heading giving overview of the site and a brief subtitle
        </Typography>
        <Box>
        <Section5Component />
        </Box>
      </Box>
    </Box>
  )
}

export default Section51