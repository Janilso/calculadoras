import { alpha, Components } from '@mui/material';
import { appColors } from '../appColors';

export const MuiMenuItem: Components['MuiMenuItem'] = {
  styleOverrides: {
    root: {
      fontSize: 14,
    },
    gutters: {
      backgroundColor: appColors.primary,
      '&.Mui-selected': {
        backgroundColor: appColors.primaryMedium,
        '&:hover': {
          backgroundColor: alpha(appColors.primaryLight, 0.2),
        },
      },
    },
  },
};
