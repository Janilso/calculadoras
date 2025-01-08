import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from './types';
import { useMemo } from 'react';

const useHomePage = () => {
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const optionsDependentes = useMemo(() => {
    return Array.from({ length: 11 }).map((_, i) => ({
      label: i.toString(),
      value: i,
    }));
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return { methods, onSubmit, handleSubmit, optionsDependentes };
};

export default useHomePage;
