import { SxStyleType } from '../theme/types';

export const makeSxStyles = <T extends Record<string, SxStyleType>>(
  styles: T
): T => {
  return styles;
};
