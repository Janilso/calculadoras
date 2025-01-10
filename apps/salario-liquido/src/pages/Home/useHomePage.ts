import { removeMoneyFormat, useRequest } from '@calculadoras/core/helpers';
import { serviceSalarioLiquido } from '@calculadoras/core/services';
import {
  RequestSalarioLiquidoType,
  ResponseSalarioLiquidoType,
} from '@calculadoras/core/services/types';
import { useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { API_URI } from '../../utils/functions/variables';
import { FormValues } from './types';

const useHomePage = () => {
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const optionsDependentes = useMemo(() => {
    return Array.from({ length: 11 }).map((_, i) => ({
      label: i.toString(),
      value: i,
    }));
  }, []);
  const { data, loading, onRequest } = useRequest<
    RequestSalarioLiquidoType,
    ResponseSalarioLiquidoType
  >(serviceSalarioLiquido, API_URI);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const salarioBruto = removeMoneyFormat(data?.salarioBruto ?? 0) as number;
    const dependentes = Number(data?.dependentes ?? '0');
    const pensaoAlimenticia = removeMoneyFormat(
      data?.pensaoAlimenticia ?? 0
    ) as number;
    const outrosDescontos = removeMoneyFormat(
      data?.outrosDescontos ?? 0
    ) as number;
    const beneficios = removeMoneyFormat(data?.beneficios ?? 0) as number;

    onRequest({
      salarioBruto,
      dependentes,
      pensaoAlimenticia,
      outrosDescontos,
      beneficios,
    });
  };

  return { methods, onSubmit, handleSubmit, optionsDependentes, data, loading };
};

export default useHomePage;
