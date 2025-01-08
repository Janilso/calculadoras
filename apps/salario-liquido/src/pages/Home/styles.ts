import { makeSxStyles } from '@calculadoras/ui/utils';

export const styles = makeSxStyles({
  title: (theme) => ({
    '&:after': {
      width: { xs: 50, sm: 80 },
    },

    [theme.breakpoints.down(388)]: {
      '&:after': {
        left: 43,
      },
    },
  }),
  formContainer: { px: { xs: 3, lg: 5 }, pt: { xs: 4, sm: 7 }, pb: 3 },
  itensForm: {
    justifyContent: 'center',
    gap: 2,
    flexWrap: 'wrap',
    width: '100%',
  },
  inputGroup: {
    gap: 3,
    justifyContent: 'space-between',
    display: 'flex',
    maxWidth: { xs: 'initial', sm: 390 },
    flexDirection: { xs: 'column', sm: 'row' },
    '& .MuiTextField-root, & .MuiBoxAbout, & .MuiButton-root': {
      maxWidth: { xs: '100%', sm: 180 },
    },
    '& .MuiBoxAbout': {
      width: 'inherit',
    },
  },
  result: {
    mt: 3,
  },
});
