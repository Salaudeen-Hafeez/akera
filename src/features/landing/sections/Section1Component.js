import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import { Box, Typography } from '@mui/material';

function BenefitSection() {
  return (
    <Box
    sx={{
      position: 'relative',
      padding: '0.5rem',
      minHeight: '100%',
      marginTop: '1rem',
      }}
    >
      <hr></hr>
      <Box>
        <StarRateIcon
          sx={{
          position: 'absolute',
          top: '0.6rem',
          left: '2rem',
          height: '5rem',
        }}
        >
        </StarRateIcon>
        <Box
          sx={{
          position: 'absolute',
          top: '0.8rem',
          left: '4rem',
          height: '5rem',
        }}
        >
          <Typography variant='h6' component='h6'>
            Benefit1
          </Typography> 
          <Typography variant='body1' gutterBottom>
            Small heading giving overview of the site and a brief subtitle
            Small heading giving overview of the site and a brief subtitle
          </Typography> 
        </Box>
      </Box>
    </Box>
  )
}

export default BenefitSection