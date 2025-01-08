import { SxProps, Theme } from '@mui/material';

export type ResultProps = {
  data: {
    salarioLiquido?: number;
    inss?: number;
    irff?: number;
    outrosDescontos?: number;
  };
  sx?: SxProps<Theme>;
  loading?: boolean;
};
