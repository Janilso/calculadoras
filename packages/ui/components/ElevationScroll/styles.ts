import { makeSxStyles } from '../../utils';

export const styles = makeSxStyles({
  appBar: (theme) => ({
    bgcolor: 'appColors.primary',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin', 'box-shadow'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
  appBarScroll: {
    boxShadow: `0 10px 35px rgba(0, 0, 0, 0.2)`,
  },
});
