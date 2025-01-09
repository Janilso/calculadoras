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
        .post(ENDPOINTS.URL_CALC_SAQUE(apiUri), payload)
        .then((response: IResponseSalarioLiquidoService) => {
          const mock = {
            ...response,
            data: {
              inss: 908.85,
              irff: 1439.07,
              outrosDescontos: 2.0,
              salarioLiquido: 7130.08,
            },
          };

          return resolve(mock.data);
        })
        .catch((err: AxiosError) =>
          reject(err?.response?.data ?? { mensage: 'Error request' })
        );
    }
  );
};
