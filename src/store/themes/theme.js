import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          color: 'white',
          fontSize: '1.4rem',
          borderRadius: '0.7rem',
          paddingInline: '3rem',
          textTransform: 'none',
          clipPath: 'polygon(0 0, 100% 0%, calc(100% - 32px) 100%, 0% 100%)',
        },
      },
    },
  },
});

export default theme