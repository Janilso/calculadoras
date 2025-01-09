import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from './types';
import { useMemo } from 'react';
import useSalarioLiquido from '../../services/useSalarioLiquido';
import { removeMoneyFormat } from '@calculadoras/core/helpers';

const useHomePage = () => {
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const optionsDependentes = useMemo(() => {
    return Array.from({ length: 11 }).map((_, i) => ({
      label: i.toString(),
      value: i,
    }));
  }, []);
  const { data, loading, onRequest } = useSalarioLiquido();

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
