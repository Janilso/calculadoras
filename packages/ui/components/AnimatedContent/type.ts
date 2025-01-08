import { BoxProps, TooltipProps } from '@mui/material';

export type AnimatedContentProps = BoxProps & {
  type?: 'rotate' | 'moving' | 'rotateHover' | 'moving2';
  boxed?: boolean;
  children: TooltipProps['children'];
};
