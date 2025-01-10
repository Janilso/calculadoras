import { Components } from '@mui/material';

export const MuiDialog: Components['MuiDialog'] = {
  styleOverrides: {
    container: {
      '@media only screen and (max-width: 600px)': {
        alignItems: 'flex-end',
      },
    },
    paper: {
      backgroundColor: 'white',
      padding: '52px 48px',
      borderRadius: 8,
      maxHeight: '80vh',

      '@media only screen and (max-width: 600px)': {
        margin: 0,
        maxHeight: '75vh',
        padding: '24px 16px',
      },
    },
  },
};
