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
    p: 1.5,
    border: '1px solid',
    borderColor: (theme) => alpha(theme.appColors.primaryLight, 0.5),
    borderTop: 'none',

    '&:not(:first-of-type)': {
      mt: '-1px',
    },

    '&:first-of-type': {
      borderRadius: { xs: '8px 8px 0 0', sm: '8px 0 0 0' },
      border: 'none',
      bgcolor: 'appColors.primaryMedium',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: 2,
      flex: 1,

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
      borderRadius: { xs: 0, sm: '0 0 0 8px' },
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
    borderLeft: { xs: null, sm: 'none' },
    borderTop: (theme) => ({
      xs: 'none',
      sm: `1px solid ${alpha(theme.appColors.primaryLight, 0.5)}`,
    }),
    borderColor: (theme) => alpha(theme.appColors.primaryLight, 0.5),
    borderRadius: { xs: '0 0 8px 8px', sm: '0 8px 8px 0' },
    display: 'flex',
    alignItems: 'center',
    flexDirection: { xs: 'row', sm: 'column' },
    flexWrap: 'wrap',
    justifyContent: { xs: 'center', sm: 'flex-start' },
    p: { xs: 1, sm: 0 },

    '& [class$=MuiResponsiveChart-container]': {
      flexGrow: { xs: 0, sm: 1 },
    },
  },
  legends: {
    px: { xs: 1, md: 0.5, lg: 1 },
    pb: 1,
    width: { xs: 'fit-content', sm: '100%' },
    '& > .MuiBox-root': {
      display: 'flex',
      alignItems: 'center',
      gap: 0.5,
    },
    '& span': {
      width: 12,
      minWidth: 12,
      height: 12,
      borderRadius: 12,
    },
    '& .MuiTypography-root': {
      color: 'appColors.primaryLight',
      fontSize: 10,
    },
  },
  popper: {
    '& .MuiChartsTooltip-valueCell.MuiChartsTooltip-cell': {
      color: 'appColors.white',
    },
  },
  stack: {
    '.MuiSkeleton-root': {
      '&:first-of-type': {
        borderRadius: { xs: '8px 8px 0 0', sm: '8px 0 0 0' },
      },
      '&:last-of-type': {
        borderRadius: { xs: 0, sm: '0 0 0 8px' },
      },
    },
  },
  stackGraphic: {
    flexDirection: { xs: 'row', sm: 'column' },
    flexWrap: 'wrap',
    gap: { xs: 2, sm: 0 },
    justifyContent: { xs: 'center', sm: 'flex-start' },
  },
});
