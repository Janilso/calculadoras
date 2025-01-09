import { removeMoneyFormat } from '@calculadoras/core/helpers';
import { serviceSaqueAniversario } from '@calculadoras/core/services';
import { BasePage, Button, Input } from '@calculadoras/ui/components';
import { IconFgts } from '@calculadoras/ui/icons';
import { Box, Grid2 } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import TabelResult from '../../components/TabelResult';
import { API_URI } from '../../utils/functions/variables';
import { getOptionMonth } from '../../utils/functions/getOptionMonth';
import { styles } from './styles';
import { FormValues, IStateDataResult } from './types';

const HomePage: React.FC = () => {
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;
  const optionsMonth = useMemo(() => getOptionMonth(), []);
  const [dataResult, setDataResult] = useState<IStateDataResult>({
    loading: true,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const {
      mesNascimento: dataMesNascimento,
      salarioBruto,
      saldoFgts: dataSaldo,
    } = data;
    const mesNascimento = parseFloat(dataMesNascimento);
    const salario = removeMoneyFormat(salarioBruto) as number;
    const saldoFgts = removeMoneyFormat(dataSaldo) as number;
    setDataResult((prev) => ({ ...prev, loading: true, previsaoSaque: 0 }));
    serviceSaqueAniversario(API_URI, { mesNascimento, salario, saldoFgts })
      .then((result) => {
        setDataResult({ loading: false, ...result });
      })
      .catch(() => setDataResult({ loading: false }));
  };

  return (
    <BasePage
      title={
        <>
          Calculadora <br /> Saque Aniversário
        </>
      }
      subtitle="Tenha uma previsão do valor do Saque Aniversário de seu FGTS"
      styles={{ title: styles.title, right: styles.right }}
    >
      <IconFgts />
      <FormProvider {...methods}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={styles.formContainer}
        >
          <Grid2 size={12} container sx={styles.itensForm}>
            <Input
              label="Saldo do FGTS"
              name="saldoFgts"
              isInputMoney
              data-gtm-form="input"
              data-gtm-name="saldoFgts"
            />
            <Input label="Salário atual" name="salarioBruto" isInputMoney />
            <Input
              label="Mês de Nascimento"
              name="mesNascimento"
              defaultValue={1}
              fullWidth
              slotProps={{
                select: {
                  MenuProps: {
                    slotProps: {
                      paper: {
                        style: {
                          maxHeight: 18 * 10.5 + 8,
                        },
                      },
                    },
                  },
                },
              }}
              options={optionsMonth}
            />
          </Grid2>
          <Grid2 container sx={styles.actions}>
            <Button
              data-gtm-name="Calcular"
              onClick={handleSubmit(onSubmit)}
              label="Calcular"
            />
          </Grid2>

          {dataResult.previsaoSaque != null ? (
            <TabelResult
              saldoFgts={dataResult.saldoFgts}
              somaLancamentos={dataResult.somaLancamentos}
              saldoFuturoTotal={dataResult.saldoFuturoTotal}
              previsaoSaque={dataResult.previsaoSaque}
              loading={dataResult.loading}
              sx={styles.result}
            />
          ) : null}
        </Box>
      </FormProvider>
    </BasePage>
  );
};

export default HomePage;
