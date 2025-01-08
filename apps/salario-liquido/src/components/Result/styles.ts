import { makeSxStyles } from '@calculadoras/ui/utils';
import { alpha } from '@mui/material';

export const styles = makeSxStyles({
  root: {
    width: '100%',
  },
  line: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: { xs: 'column', sm: 'row' },
    p: 1.5,
    border: '1px solid',
    borderColor: (theme) => alpha(theme.appColors.primaryLight, 0.5),
    borderTop: 'none',

    '&:not(:first-of-type)': {
      mt: '-1px',
    },

    '&:first-of-type': {
      borderRadius: '8px 0 0 0',
      border: 'none',
      bgcolor: 'appColors.primaryMedium',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 2,

      '& .MuiTypography-root': {
        color: 'appColors.secondary',
        lineHeight: '24px',
      },

      '& h2.MuiTypography-root': {
        fontWeight: 700,
        lineHeight: '32px',
      },
    },
    '&:last-of-type': {
      borderRadius: '0 0 0 8px',
    },
  },
  lineLabel: {
    color: 'appColors.primaryLight',
    fontWeight: 600,
    verticalAlign: 'middle',
    lineHeight: '17px',
  },
  lineValue: {
    color: 'appColors.primaryLight',
    verticalAlign: 'middle',
    lineHeight: '17px',
  },
  graphic: {
    border: '1px solid',
    borderColor: (theme) => alpha(theme.appColors.primaryLight, 0.5),
    borderLeft: 'none',
    borderRadius: '0 8px 8px 0',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  legends: {
    px: 1,
    pb: 1,
    width: '100%',
    '& > .MuiBox-root': {
      display: 'flex',
      alignItems: 'center',
      gap: 0.5,
    },
    '& span': {
      width: 12,
      height: 12,
      borderRadius: 12,
    },
    '& .MuiTypography-root': {
      color: 'appColors.primaryLight',
      fontSize: 10,
    },
  },
  popper: {
    '& .MuiChartsTooltip-valueCell': {
      color: 'appColors.white',
    },
  },
});
