import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../store/themes/theme'
import '../../App.css'

function GeneralButton({ label }) {
  return (
    <Box >
      <ThemeProvider theme={theme}>
        <Button
        sx={{
          minWidth: '100px',
          height: '40px',
          backgroundColor: '#005AFF;',
          '&:hover': {
            backgroundColor: '#003699',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
        >
          {label}
        </Button>
      </ThemeProvider>
    </Box>
  )
}

export default GeneralButton