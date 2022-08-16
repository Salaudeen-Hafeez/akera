import { Button, FormGroup, TextField } from '@mui/material'
import React from 'react'

function Section5Component() {
  return (
    <FormGroup row>
      <TextField 
      variant="outlined" 
      placeholder="Email"
      sx={{
        width: '50rem',
        height: '4rem',
        }}
    />
      <Button 
      variant="contained" disableElevation>
          Icon
      </Button>
    </FormGroup>
  )
}

export default Section5Component