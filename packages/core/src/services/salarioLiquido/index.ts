import { AxiosError } from 'axios';

import { api } from '../';
import { ENDPOINTS } from '../endpoints';
import {
  IRequestSalarioLiquido,
  IResponseSalarioLiquido,
  IResponseSalarioLiquidoService,
} from './types';

export const serviceSalarioLiquido = (
  apiUri: string,
  payload: IRequestSalarioLiquido
) => {
  return new Promise(
    (resolve: (value: IResponseSalarioLiquido) => void, reject) => {
      api
        .post(ENDPOINTS.URL_SALARIO_LIQUIDO(apiUri), payload)
        .then((response: IResponseSalarioLiquidoService) => {
          return resolve(response.data);
        })
        .catch((err: AxiosError) =>
          reject(err?.response?.data ?? { mensage: 'Error request' })
        );
    }
  );
};
