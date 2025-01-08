import { makeSxStyles } from '../../utils';

export const styles = makeSxStyles({
  root: {
    p: 5,
    bgcolor: 'appColors.primaryMedium',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',

    '& a': {
      color: 'appColors.secondary',
    },
  },
});
