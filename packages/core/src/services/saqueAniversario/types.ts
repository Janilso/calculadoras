import { AxiosResponse } from 'axios';

export interface IRequestSaqueAniversario {
  saldoFgts: number;
  salario: number;
  mesNascimento: number;
}

export interface IResponseSaqueAniversario {
  saldoFgts: number;
  somaLancamentos: number;
  saldoFuturoTotal: number;
  previsaoSaque: number;
}

export interface IResponseSaqueAniversarioService extends AxiosResponse {
  data: IResponseSaqueAniversario;
}
