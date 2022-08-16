import React from 'react'
import { Avatar, Box, Typography } from '@mui/material'

function Section4Component() {
  return (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: '0.5rem',
      background: 'lightblue',
      borderRadius: '1rem'
    }}
  >
    <Box>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Avatar sx={{marginTop: '0.3rem'}}>SH</Avatar>
        <Box
          sx={{
            paddingLeft: '0.5rem'
          }}
        >
          <Typography variant='h6' component='h6'>Salaudeen Hafeez</Typography> 
          <Typography variant='body1'>
          Small heading giving overview
          </Typography>
        </Box>
      </Box>
      </Box>
    <Box>
      <Typography 
      variant='body1'
      sx={{
        padding: '1.5rem',
        textAlign: 'center',
      }}
      >
        Small heading giving overview of the site and a brief subtitle
        Small heading giving overview of the site and a brief subtitle
        Small heading giving overview of the site and a brief subtitle
        Small heading giving overview of the site and a brief subtitle
      </Typography>
    </Box>
  </Box>
  )
}

export default Section4Component