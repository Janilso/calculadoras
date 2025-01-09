import {
  IRequestSaqueAniversario,
  IResponseSaqueAniversario,
} from './saqueAniversario/types';
import {
  IRequestSalarioLiquido,
  IResponseSalarioLiquido,
} from './salarioLiquido/types';

export type RequestSaqueAniversarioType = IRequestSaqueAniversario;
export type ResponseSaqueAniversarioType = Partial<IResponseSaqueAniversario>;

export type RequestSalarioLiquidoType = IRequestSalarioLiquido;
export type ResponseSalarioLiquidoType = Partial<IResponseSalarioLiquido>;
