import { Components } from '@mui/material';
import { appColors } from '../appColors';

export const MuiTooltip: Components['MuiTooltip'] = {
  defaultProps: {
    arrow: true,
    placement: 'top-start',
    slotProps: {
      popper: {
        // sx: {
        //   [`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]: {
        //     marginBottom: '-0.65em',
        //   },
        // },
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -8],
            },
          },
        ],
      },
    },
  },
  styleOverrides: {
    tooltip: {
      maxWidth: 175,
      background: appColors.primaryMedium,
      border: '1px solid',
      borderColor: appColors.primary,
      padding: '8px',
    },
    arrow: {
      color: appColors.primaryMedium,
      height: '0.78em',
      '&:before': {
        border: '1px solid',
        borderColor: appColors.primary,
        transform: 'rotate(48deg)',
      },
    },
  },
};
