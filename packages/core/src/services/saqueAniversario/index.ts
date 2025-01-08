import { AxiosError } from 'axios';
import {
  IRequestSaqueAniversario,
  IResponseSaqueAniversario,
  IResponseSaqueAniversarioService,
} from './types';
import { api } from '../';
import { ENDPOINTS } from '../endpoints';

export const serviceSaqueAniversario = (
  apiUri: string,
  payload: IRequestSaqueAniversario
) => {
  return new Promise(
    (resolve: (value: IResponseSaqueAniversario) => void, reject) => {
      api
        .post(ENDPOINTS.URL_CALC_SAQUE(apiUri), payload)
        .then((response: IResponseSaqueAniversarioService) =>
          resolve(response.data)
        )
        .catch((err: AxiosError) =>
          reject(err?.response?.data ?? { mensage: 'Error request' })
        );
    }
  );
};
