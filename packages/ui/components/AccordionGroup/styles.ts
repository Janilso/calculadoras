import { alpha } from '@mui/material';
import { makeSxStyles } from '../../utils';

export const styles = makeSxStyles({
  root: (theme) => ({
    boxShadow: `0px 0px 4px 0px ${alpha(theme.appColors.primary, 0.3)}`,
    m: 0.5,
    borderRadius: 2,
  }),
  accordion: (theme) => ({
    bgcolor: 'appColors.white',

    '&.Mui-expanded': {
      my: 0,
    },
    '&:first-of-type': {
      borderRadius: 2,
    },
    '&:last-of-type': {
      borderRadius: 2,
    },
    '&:not(:last-of-type), &:last-of-type.Mui-expanded': {
      '& .MuiAccordionSummary-root': {
        borderBottom: `1px solid ${alpha(theme.appColors.primary, 0.15)}`,
      },
    },
  }),
  summary: ({ spacing }) => ({
    p: { xs: spacing(0, 1.2, 0, 1.5), sm: spacing(0, 2.3, 0, 3) },
    '& .MuiAccordionSummary-content.Mui-expanded': {
      my: 1.5,
    },
    '&.Mui-expanded': {
      minHeight: 48,
    },
    '& svg': {
      width: 28,
      height: 28,
    },
  }),
  summaryTitle: {
    width: '80%',
    flexShrink: 0,
    color: 'appColors.primary',
    fontSize: { xs: 14, sm: 16 },
  },
  details: ({ appColors, spacing }) => ({
    borderBottom: `1px solid ${alpha(appColors.primary, 0.15)}`,
    p: { xs: 1.5, sm: spacing(1.5, 3, 3, 3) },
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    '& .MuiTypography-root': {
      color: 'appColors.primary',
      fontSize: { xs: 14, sm: 16 },
    },
  }),
});
