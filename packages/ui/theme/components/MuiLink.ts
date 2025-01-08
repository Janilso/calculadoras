import { Components } from '@mui/material';
import { appColors } from '../appColors';

export const MuiLink: Components['MuiLink'] = {
  variants: [
    {
      props: { underline: 'always' },
      style: {
        textDecoration: 'none',
        position: 'relative',
        cursor: 'pointer',
        '&:after': {
          background: 'none repeat scroll 0 0 transparent',
          bottom: 0,
          content: "''",
          display: 'block',
          height: '1px',
          left: '50%',
          position: 'absolute',
          backgroundColor: appColors.secondary,
          transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
          width: 0,
        },
        '&:hover:after': {
          width: '100%',
          left: 0,
        },
      },
    },
  ],
  styleOverrides: {
    root: {
      color: appColors.secondary,
    },
  },
};
