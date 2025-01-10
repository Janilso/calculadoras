import { makeSxStyles } from '@calculadoras/ui/utils';

export const styles = makeSxStyles({
  title: (theme) => ({
    [theme.breakpoints.between(901, 1024)]: {
      '&:after': {
        left: 183,
      },
    },
    [theme.breakpoints.down(431)]: {
      '&:after': {
        left: 68,
      },
    },
  }),
  right: {
    p: 2,
    '& #icon-fgts': {
      minHeight: 21,
    },
  },
  formContainer: {
    mt: 6,
    width: { xs: '100%', sm: 'fit-content' },
  },
  itensForm: {
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: { xs: 2, sm: 1 },
    '& .MuiTextField-root': {
      maxWidth: { xs: '100%', sm: 170 },
      width: { xs: '100%', sm: 'auto' },
      flex: 1,
    },
  },
  actions: {
    justifyContent: 'center',
    mt: 3,
  },
  result: {
    mt: 5.5,
  },
  textAbout: {
    color: 'appColors.primary',
    '& a': {
      fontStyle: 'italic',
      color: 'appColors.primary',
      '&:after': {
        bgcolor: 'appColors.primary',
      },
    },
    '&:not(:first-of-type)': {
      mt: 2,
    },
  },
});
