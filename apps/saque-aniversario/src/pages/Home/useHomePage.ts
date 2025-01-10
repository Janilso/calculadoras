import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from './types';
import { useMemo } from 'react';
import { getOptionMonth } from '../../utils/functions/getOptionMonth';
import { removeMoneyFormat, useRequest } from '@calculadoras/core/helpers';
import { API_URI } from '../../utils/functions/variables';
import {
  RequestSaqueAniversarioType,
  ResponseSaqueAniversarioType,
} from '@calculadoras/core/services/types';
import { serviceSaqueAniversario } from '@calculadoras/core/services';

const useHomePage = () => {
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const optionsMonth = useMemo(() => getOptionMonth(), []);
  const { data, loading, onRequest } = useRequest<
    RequestSaqueAniversarioType,
    ResponseSaqueAniversarioType
  >(serviceSaqueAniversario, API_URI);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const {
      mesNascimento: dataMesNascimento,
      salarioBruto,
      saldoFgts: dataSaldo,
    } = data;
    const mesNascimento = parseFloat(dataMesNascimento);
    const salario = removeMoneyFormat(salarioBruto) as number;
    const saldoFgts = removeMoneyFormat(dataSaldo) as number;

    onRequest({
      mesNascimento,
      salario,
      saldoFgts,
    });
  };

  return { methods, handleSubmit, optionsMonth, data, loading, onSubmit };
};

export default useHomePage;
