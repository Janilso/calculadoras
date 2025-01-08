export type FormValues = {
  saldoFgts: string;
  salarioBruto: string;
  mesNascimento: string;
};

export interface IStateDataResult {
  loading: boolean;
  previsaoSaque?: number;
  saldoFgts?: number;
  saldoFuturoTotal?: number;
  somaLancamentos?: number;
}
