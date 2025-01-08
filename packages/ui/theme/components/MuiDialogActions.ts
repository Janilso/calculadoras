import { Components } from '@mui/material';

export const MuiDialogActions: Components['MuiDialogActions'] = {
  styleOverrides: {
    root: {
      '@media only screen and (max-width: 600px)': {
        justifyContent: 'center',
      },
    },
    spacing: {
      padding: 0,
      paddingTop: 32,
    },
  },
};
