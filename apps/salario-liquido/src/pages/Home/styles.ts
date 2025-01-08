import { makeSxStyles } from '@calculadoras/ui/utils';

export const styles = makeSxStyles({
  formContainer: { px: 5, pt: 7 },
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
    maxWidth: 390,
    '& .MuiTextField-root, & .MuiBoxAbout, & .MuiButton-root': {
      maxWidth: { xs: '100%', sm: 180 },
    },
    '& .MuiBoxAbout': {
      width: 'inherit',
    },
  },
});
