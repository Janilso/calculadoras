import { SxProps, Theme } from '@mui/material';

type DataType = {
  title: string;
  details?: React.ReactNode;
};

export type HandleChangeType = (
  accordion: string
) => (event: React.SyntheticEvent, isExpanded: boolean) => void;

export type AccordionGroupProps = {
  children: DataType[];
  sx?: SxProps<Theme>;
};
