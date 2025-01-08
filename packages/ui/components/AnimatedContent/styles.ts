import { makeSxStyles } from '../../utils';

export const styles = makeSxStyles({
  rotateAnimate: {
    animation: 'rotate 5s ease infinite',
    position: 'relative',
    right: { xs: '5px', md: '20px' },
    '@keyframes rotate': {
      '20%': {
        transform: 'translate(0, 10px) rotate(5deg)',
      },
      '50%': {
        transform: 'translate(20px,0) rotate(-5deg)',
      },
      '100%': {
        transform: 'translate(0,0) rotate(0deg)',
      },
    },
  },
  rotateHoverAnimate: {
    position: 'relative',
    transition: 'all 1s cubic-bezier(0.61, -0.49, 0.37, 1.27) ',
    ':hover': {
      transform: 'rotate(360deg)',
    },
  },
  movingAnimate: {
    animation: 'moving 5s cubic-bezier(0.61, -0.49, 0.37, 1.27) infinite',
    position: 'relative',
    left: { xs: '-10px', md: '20px' },
    '@keyframes moving': {
      '50%': {
        transform: 'translateX(20px)',
      },
    },
  },
  moving2Animate: {
    animation: 'moving2 5s cubic-bezier(0.61, -0.49, 0.37, 1.27) infinite',
    position: 'relative',
    '@keyframes moving2': {
      '0%': {
        transform: 'rotate(-10deg) scale(0.8)',
      },
      '50%': {
        transform: 'rotate(10deg) scale(1.1)',
      },
      '100%': {
        transform: 'rotate(-10deg) scale(0.8)',
      },
    },
  },
});
