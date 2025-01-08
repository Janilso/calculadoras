import { SxStyleType } from '../../theme/types';

export type BasePageProps = {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  styles?: { title?: SxStyleType; right?: SxStyleType };
};
