import { BasePage, Button, Input } from '@calculadoras/ui/components';
import { IconFgts } from '@calculadoras/ui/icons';
import { Box, Grid2 } from '@mui/material';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import TabelResult from '../../components/TabelResult';
import { styles } from './styles';
import useHomePage from './useHomePage';

const HomePage: React.FC = () => {
  const { data, handleSubmit, loading, methods, onSubmit, optionsMonth } =
    useHomePage();

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

          {data || loading ? (
            <TabelResult
              saldoFgts={data?.saldoFgts}
              somaLancamentos={data?.somaLancamentos}
              saldoFuturoTotal={data?.saldoFuturoTotal}
              previsaoSaque={data?.previsaoSaque}
              loading={loading}
              sx={styles.result}
            />
          ) : null}
        </Box>
      </FormProvider>
    </BasePage>
  );
};

export default HomePage;
