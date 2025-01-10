import { alpha } from '@mui/material';
import { makeSxStyles } from '../../utils';

export const styles = makeSxStyles({
  root: {
    position: 'fixed',
    right: { xs: 20, sm: 40 },
    bottom: { xs: 40, sm: 70, md: 115 },
    borderRadius: 50,
    width: 50,
    height: 50,
    bgcolor: 'appColors.secondary',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.2s ease-out',

    '& p': {
      display: 'none',
    },
    '& svg': {
      width: 25,
      minWidth: 25,
      height: 25,
    },
    '&:hover': {
      cursor: 'pointer',
      width: { xs: 50, sm: 125 },
      px: 3,

      '& p': {
        display: { xs: 'none', sm: 'block' },
      },
    },
  },

  text: {
    color: 'appColors.primary',
    fontWeight: 600,
    lineHeight: '23px',
    ml: 1,
  },

  modalTitle: (theme) => ({
    color: 'appColors.primaryLight',
    fontSize: 32,
    fontWeight: 700,
    borderBottom: '1px solid',
    borderColor: alpha(theme.appColors.primary, 0.25),
    mb: 3,
  }),
});
