import { BasePage, Button, Input } from '@calculadoras/ui/components';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import useHomePage from './useHomePage';
import { Box, Grid2 } from '@mui/material';
import { styles } from './styles';

const HomePage: React.FC = () => {
  const { methods, handleSubmit, onSubmit, optionsDependentes } = useHomePage();

  return (
    <BasePage
      title={
        <>
          Calculadora <br /> Saque Aniversário
        </>
      }
      subtitle="Tenha uma previsão do valor do Saque Aniversário de seu FGTS"
      //   styles={{ title: styles.title, right: styles.right }}
    >
      <FormProvider {...methods}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={styles.formContainer}
        >
          <Grid2 container sx={styles.itensForm}>
            <Grid2 size={12} sx={styles.inputGroup}>
              <Input
                label="Salário bruto"
                name="salarioBruto"
                about={`Salário registrado na carteira 
                de trabalho, correspondente à remuneração 
                mensal do trabalhador, sem considerar os 
                descontos obrigatórios.`}
                fullWidth
                isInputMoney
              />
              <Input
                label="Número de dependentes"
                name="dependentes"
                about={`Número de pessoa(s) sob tutela ou 
                curatela do trabalhador, que podem ser 
                incluídas como dependentes no Imposto de 
                Renda.`}
                defaultValue={0}
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
                options={optionsDependentes}
              />
            </Grid2>
            <Grid2 size={12} sx={styles.inputGroup}>
              <Input
                label="Pensão alimentícia"
                name="pensaoAlimenticia"
                about={`Valor destinado ao sustento de 
                dependentes, sendo priorizado antes de 
                outros descontos, como impostos e 
                previdência.`}
                fullWidth
                isInputMoney
              />
              <Input
                label="Outros descontos"
                name="outrosDescontos"
                about={`Demais descontos acordados com 
                a empresa, registrados no contracheque, 
                como: alimentação, plano de saúde, 
                previdência privada, vales, entre 
                outros.`}
                fullWidth
                isInputMoney
              />
            </Grid2>
            <Grid2 size={12} sx={styles.inputGroup}>
              <Input
                label="Benefícios"
                name="beneficios"
                about={`Valores adicionais recebidos 
                além do salário, mas que não são 
                considerados parte integrante dele, 
                como: auxílio creche, home office, 
                alimentação, entre outros.`}
                fullWidth
                isInputMoney
              />
              <Button
                data-gtm-name="Calcular"
                onClick={handleSubmit(onSubmit)}
                label="Calcular"
                fullWidth
              />
            </Grid2>
          </Grid2>
        </Box>
      </FormProvider>
    </BasePage>
  );
};

export default HomePage;
