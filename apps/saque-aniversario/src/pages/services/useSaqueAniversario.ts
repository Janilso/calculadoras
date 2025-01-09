import { useState } from 'react';
import { API_URI } from '../../utils/functions/variables';
import {
  RequestSaqueAniversarioType,
  ResponseSaqueAniversarioType,
} from '@calculadoras/core/services/types';
import { serviceSaqueAniversario } from '@calculadoras/core/services';

const useSaqueAniversario = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ResponseSaqueAniversarioType>();

  const onRequest = (payload: RequestSaqueAniversarioType) => {
    setLoading(true);
    serviceSaqueAniversario(API_URI, payload)
      .then((response) => setData(response))
      .catch(() =>
        setData({
          previsaoSaque: 0,
          saldoFgts: 0,
          saldoFuturoTotal: 0,
          somaLancamentos: 0,
        })
      )
      .finally(() => setLoading(false));
  };

  return { loading, onRequest, data };
};

export default useSaqueAniversario;
