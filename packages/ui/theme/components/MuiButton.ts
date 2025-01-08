import { Components, darken } from '@mui/material';
import { appColors } from '../appColors';

export const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    variant: 'contained',
    size: 'large',
    disableElevation: true,
  },
  variants: [
    {
      props: { size: 'large' },
      style: {
        padding: 13,
      },
    },
    {
      props: { color: 'primary' },
      style: {
        background: appColors.primaryMedium,
        color: appColors.secondary,
        '&:hover': {
          background: darken(appColors.primaryMedium, 0.4),
        },
      },
    },
    {
      props: { variant: 'text' },
      style: {
        color: appColors.white,
      },
    },
  ],
  styleOverrides: {
    root: {
      minWidth: 136,
      fontSize: 14,
      textTransform: 'none',
    },
  },
};
