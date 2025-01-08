import { makeSxStyles } from '../../utils';

export const styles = makeSxStyles({
  root: {
    position: 'relative',
  },
  aboutBase: {
    bgcolor: 'appColors.primaryLight',
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    top: -8,
    right: -6,
    '& svg': {
      width: 14,
      height: 14,

      '& path': {
        fill: '#fff',
      },
    },
  },
});
