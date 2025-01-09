import { serviceSalarioLiquido } from '@calculadoras/core/services';
import {
  RequestSalarioLiquidoType,
  ResponseSalarioLiquidoType,
} from '@calculadoras/core/services/types';

import { useState } from 'react';
import { API_URI } from '../utils/functions/variables';

const useSalarioLiquido = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ResponseSalarioLiquidoType>();

  const onRequest = (payload: RequestSalarioLiquidoType) => {
    setLoading(true);
    serviceSalarioLiquido(API_URI, payload)
      .then((response) => setData(response))
      .catch(() =>
        setData({
          inss: 0,
          irrf: 0,
          outrosDescontos: 0,
          salarioLiquido: 0,
        })
      )
      .finally(() => setLoading(false));
  };

  return { loading, onRequest, data };
};

export default useSalarioLiquido;
