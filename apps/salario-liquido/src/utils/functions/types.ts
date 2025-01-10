export type FonteType = {
  titulo?: string;
  link?: string;
};

type TabelValuesType = {
  aliquota?: number;
  deducao?: number;
};

type TabelData = {
  data: Record<string, TabelValuesType>;
  fontes: FonteType[];
};

export type BaseParametersType = {
  irrf: TabelData;
  inss: TabelData;
  salarioMinimo: number;
  dependentesIrrf: number;
};

interface ReturnGetDataTableType {
  data?: string[][];
  fontes?: FonteType[];
}

export type GetDataTableType = (
  data: TabelData,
  limited: boolean,
  tableHeader: string[]
) => ReturnGetDataTableType;

export type GetTextByValueType = (
  prevValue: number,
  value: number,
  unLimeted: boolean
) => string;
