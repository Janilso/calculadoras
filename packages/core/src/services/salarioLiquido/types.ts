import { AxiosResponse } from 'axios';

export interface IRequestSalarioLiquido {
  salarioBruto: number;
  dependentes: number;
  pensaoAlimenticia: number;
  outrosDescontos: number;
  beneficios: number;
}

export interface IResponseSalarioLiquido {
  salarioLiquido: number;
  inss: number;
  irrf: number;
  outrosDescontos: number;
}

export interface IResponseSalarioLiquidoService extends AxiosResponse {
  data: IResponseSalarioLiquido;
}
