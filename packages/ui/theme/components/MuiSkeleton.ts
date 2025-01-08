import { alpha, Components } from '@mui/material';
import { appColors } from '../appColors';

export const MuiSkeleton: Components['MuiSkeleton'] = {
  defaultProps: {
    variant: 'rectangular',
    animation: 'wave',
  },
  styleOverrides: {
    root: {
      backgroundColor: alpha(appColors.primary, 0.2),
      '&:after': {
        background:
          'linear-gradient( 90deg, transparent, rgba(255, 255, 255, 0.25), transparent )',
      },
    },
  },
};
