import { makeSxStyles } from '@calculadoras/ui/utils';
import { alpha } from '@mui/material';

export const styles = makeSxStyles({
  stack: {
    '.MuiSkeleton-root:first-of-type': {
      borderRadius: '8px 8px 0 0',
    },
    '.MuiSkeleton-root:last-of-type': {
      borderRadius: '0 0 8px 8px',
    },
  },
  skeleton: {
    height: { xs: 62.91, sm: 42 },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  line: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: { xs: 'column', sm: 'row' },
    p: 1.5,
    border: '1px solid',
    borderColor: (theme) => alpha(theme.appColors.primaryLight, 0.5),
    '&:not(:first-of-type)': {
      mt: '-1px',
    },
    '&:first-of-type': {
      borderRadius: '8px 8px 0 0',
    },
  },
  itemLabel: {
    color: 'appColors.primaryLight',
    fontWeight: 600,
    display: 'flex',
    gap: 0.5,
    '& svg': {
      width: 15,
      height: 15,
    },
  },
  itemValue: {
    color: 'appColors.primaryLight',
  },
  linePrev: {
    bgcolor: 'appColors.primaryMedium',
    borderRadius: '0 0 8px 8px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 2,
  },
  itemLabelPrev: {
    color: 'appColors.secondary',
  },
  itemValuePrev: {
    color: 'appColors.secondary',
    fontWeight: 700,
    textAlign: 'center',
  },
});
