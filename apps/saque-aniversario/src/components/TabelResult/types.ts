import { SxProps, Theme } from '@mui/material';

export type TabelResultProps = {
  loading?: boolean;
  saldoFgts?: number;
  somaLancamentos?: number;
  saldoFuturoTotal?: number;
  previsaoSaque?: number;
  sx?: SxProps<Theme>;
};

export type DataListType = {
  label: string;
  value: string;
  tooltip?: string;
  isPrevision?: boolean;
};
