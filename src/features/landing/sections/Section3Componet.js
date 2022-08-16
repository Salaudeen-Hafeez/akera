import React from 'react'
import { Box } from '@mui/material';

function Section3Componet() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        marginBottom: '3rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: 'auto',
          marginBottom: '1rem',
        }}
      >
        <div className='ellips'>1</div>
        <div className='span1'></div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          background: 'black',
          width: '25rem',
          minHeight: '25rem',
        }}
      >
      </Box>
    </Box>
  )
}

export default Section3Componet