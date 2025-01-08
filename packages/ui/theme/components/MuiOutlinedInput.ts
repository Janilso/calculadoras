import { Components } from '@mui/material';
import { appColors } from '../appColors';

export const MuiOutlinedInput: Components['MuiOutlinedInput'] = {
  styleOverrides: {
    notchedOutline: {
      borderColor: appColors.primaryLight,
      '& legend': {
        fontSize: '0.65rem',
      },
    },
  },
};
