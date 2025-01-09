import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from './types';
import { useMemo } from 'react';
import { getOptionMonth } from '../../utils/functions/getOptionMonth';
import { removeMoneyFormat } from '@calculadoras/core/helpers';
import useSaqueAniversario from '../services/useSaqueAniversario';

const useHomePage = () => {
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const optionsMonth = useMemo(() => getOptionMonth(), []);
  const { data, loading, onRequest } = useSaqueAniversario();

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
