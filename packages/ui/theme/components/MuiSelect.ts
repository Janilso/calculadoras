import { Components } from '@mui/material';
import { appColors } from '../appColors';

export const MuiSelect: Components['MuiSelect'] = {
  styleOverrides: {
    outlined: {
      lineHeight: 'initial',
    },
    iconOutlined: {
      color: appColors.primaryMedium,
    },
  },
};
