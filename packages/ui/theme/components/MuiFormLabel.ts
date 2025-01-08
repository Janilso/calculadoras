import { Components } from '@mui/material';
import { appColors } from '../appColors';

export const MuiFormLabel: Components['MuiFormLabel'] = {
  styleOverrides: {
    root: {
      fontSize: 14,
      color: appColors.primaryLight,
    },
  },
};
