import { Components } from '@mui/material';
import { appColors } from '../appColors';

export const MuiTextField: Components['MuiTextField'] = {
  defaultProps: {
    variant: 'outlined',
  },
  styleOverrides: {
    root: {
      '&:hover .MuiFormLabel-root': {
        color: appColors.primary,
      },
    },
  },
};
