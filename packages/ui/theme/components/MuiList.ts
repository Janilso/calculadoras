import { Components } from '@mui/material';
import { appColors } from '../appColors';

export const MuiList: Components['MuiList'] = {
  styleOverrides: {
    root: {
      backgroundColor: appColors.primary,
    },
  },
};
