import {
  BasePage,
  Button,
  ButtonAbout,
  Input,
} from '@calculadoras/ui/components';
import { IconFgts } from '@calculadoras/ui/icons';
import { Box, DialogContentText, Grid2, Link } from '@mui/material';
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
        </Box>
      </FormProvider>

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
      <ButtonAbout titleModal="Sobre o site e cálculos">
        <DialogContentText sx={styles.textAbout}>
          O site Calculadora Saque Aniversário não tem qualquer relação com a
          instituição bancária CAIXA ou qualquer órgão governamental ou
          financeiro. O site não armazena qualquer tipo de dado fornecido pelo
          usuário. Todos os dados solicitados são para uso exclusivo de nossa
          calculadora do Saque Aniversário.
        </DialogContentText>
        <DialogContentText sx={styles.textAbout}>
          O cálculo do Saque Aniversário é uma previsão não oficial de quanto
          você poderá sacar no seu mês de aniversário, tendo como base o valor
          atual de seu saldo do FGTS, seu salário bruto mensal e o seu mês de
          nascimento. O cálculo é feito da seguinte forma: primeiro, verificamos
          quanto tempo falta para o seu mês de aniversário. Essa quantidade é
          multiplicada pelo valor de 8% de seu salário bruto (que é o valor
          depositado mensalmente pela empresa em que você trabalha na sua conta
          do FGTS). O resultado desse cálculo inicial é a{' '}
          <b>Soma de lançamentos</b> futuros de saldo em sua conta do FGTS até
          sua data de aniversário (levando em consideração que seu salário não
          será alterado nesse período). Após determinarmos o valor total que
          você provavelmente terá em sua conta do FGTS no futuro, somamos esse
          valor ao <b>Saldo do FGTS</b> atual que está em sua conta. O{' '}
          <b>Somatório total com os lançamentos</b> (incluindo o futuro e atual
          saldo) é usado para determinar em qual alíquota seu saldo se enquadra,
          de acordo com a tabela fornecida pela CAIXA
          <Link
            target="_blank"
            href="https://www.caixa.gov.br/beneficios-trabalhador/fgts/saque-FGTS/Paginas/default.aspx"
          >
            (você pode consultar clicando aqui)
          </Link>
          . Por fim após essa verificação podemos determinar o valor que você
          sacará em seu mês de aniversário.
        </DialogContentText>
        <DialogContentText sx={styles.textAbout}>
          Vale frisar que esse <b>cálculo não é oficial</b>. É somente uma
          previsão aproximada de quanto você poderá sacar de saldo em sua conta
          do FGTS.
        </DialogContentText>
      </ButtonAbout>
    </BasePage>
  );
};

export default HomePage;
