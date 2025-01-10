import {
  AccordionGroup,
  BasePage,
  Button,
  ButtonAbout,
  Input,
  Tabel,
} from '@calculadoras/ui/components';
import { Box, DialogContentText, Grid2, Link, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { FormProvider } from 'react-hook-form';
import Result from '../../components/Result';
import { styles } from './styles';
import useHomePage from './useHomePage';
import { RenderFonte } from './types';

const HomePage: React.FC = () => {
  const {
    methods,
    handleSubmit,
    onSubmit,
    optionsDependentes,
    data,
    loading,
    dataInss,
    dataIrff,
  } = useHomePage();

  const renderFonte: RenderFonte = (fontes) => {
    if (!fontes) return [];
    const isPlural = fontes?.length > 1;
    return (
      <>
        {' '}
        (Fonte{isPlural ? 's' : ''}:{' '}
        {fontes?.map(({ link, titulo }, i) => {
          const isLast = i === fontes?.length - 1;
          return (
            <Fragment key={link?.concat(i.toString())}>
              <Link target="_blank" href={link}>
                {titulo}
              </Link>
              {isPlural && !isLast ? ', ' : ''}
            </Fragment>
          );
        })}
        )
      </>
    );
  };

  return (
    <BasePage
      title={
        <>
          Calculadora <br /> Salário Líquido
        </>
      }
      subtitle="Saiba o valor líquido que você receberá 
      por mês, já com os descontos aplicados."
      styles={{ title: styles.title }}
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
                about="Salário registrado na carteira 
                de trabalho, correspondente à remuneração 
                mensal do trabalhador, sem considerar os 
                descontos obrigatórios."
                fullWidth
                isInputMoney
              />
              <Input
                label="Número de dependentes"
                name="dependentes"
                about="Número de pessoa(s) sob tutela ou 
                curatela do trabalhador, que podem ser 
                incluídas como dependentes no Imposto de 
                Renda."
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
                about="Valor destinado ao sustento de 
                dependentes, sendo priorizado antes de 
                outros descontos, como impostos e 
                previdência."
                fullWidth
                isInputMoney
              />
              <Input
                label="Outros descontos"
                name="outrosDescontos"
                about="Demais descontos acordados com 
                a empresa, registrados no contracheque, 
                como: alimentação, plano de saúde, 
                previdência privada, vales, entre 
                outros."
                fullWidth
                isInputMoney
              />
            </Grid2>
            <Grid2 size={12} sx={styles.inputGroup}>
              <Input
                label="Benefícios"
                name="beneficios"
                about="Valores adicionais recebidos 
                além do salário, mas que não são 
                considerados parte integrante dele, 
                como: auxílio creche, home office, 
                alimentação, entre outros."
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
            {data || loading ? (
              <Result
                data={{
                  inss: data?.inss,
                  irrf: data?.irrf,
                  outrosDescontos: data?.outrosDescontos,
                  salarioLiquido: data?.salarioLiquido,
                }}
                sx={styles.result}
                loading={loading}
              />
            ) : null}
            <ButtonAbout titleModal="Sobre o site e cálculos">
              <DialogContentText sx={styles.textAbout}>
                O site Calculadora Salário Líquido é uma ferramenta online
                prática e eficiente que ajuda trabalhadores a entenderem quanto
                dinheiro realmente receberão ao final do mês. Diferente do
                salário bruto, que é o valor total acordado com o empregador, o
                salário líquido é aquele que chega na conta bancária, já
                descontados impostos, contribuições e outros encargos.
              </DialogContentText>
              <DialogContentText sx={styles.textAbout}>
                O site não armazena qualquer tipo de dado fornecido pelo
                usuário. Todos os dados solicitados são de uso exclusivo para o
                cálculo do Salário Líquido, que leva em conta os seguintes itens
                principais:
              </DialogContentText>
              <AccordionGroup sx={styles.accordion}>
                {[
                  {
                    title: 'Salário bruto',
                    details: (
                      <>
                        <Typography variant="subtitle1">
                          É o ponto de partida para o cálculo. Trata-se do valor
                          total acordado no contrato de trabalho, antes de
                          qualquer dedução. Esse valor é utilizado como base
                          para o cálculo do INSS (Instituto Nacional do Seguro
                          Social), que é obrigatório e calculado de forma
                          progressiva, conforme a tabela abaixo
                          {renderFonte(dataInss?.fontes)}:
                        </Typography>
                        {dataInss?.data?.length ? (
                          <Tabel sx={styles.tablel}>{dataInss.data}</Tabel>
                        ) : null}
                      </>
                    ),
                  },
                  {
                    title: 'Número de dependentes e pensão alimentícia',
                    details: (
                      <>
                        <Typography variant="subtitle1">
                          Juntamente com o salário bruto, são utilizados para o
                          cálculo do Imposto de Renda Retido na Fonte (IRRF), em
                          que cada dependente reduz a base de cálculo do IRRF em
                          um valor fixo, determinado pela Receita Federal
                          (atualmente R$ 189,59 por dependente). Já a pensão
                          alimentícia é deduzida integralmente da base de
                          cálculo do IRRF. O valor do IRRF é calculado de forma
                          progressiva, conforme a tabela abaixo
                          {renderFonte(dataIrff?.fontes)}:
                        </Typography>

                        {dataIrff?.data?.length ? (
                          <Tabel sx={styles.tablel}>{dataIrff.data}</Tabel>
                        ) : null}
                      </>
                    ),
                  },
                  {
                    title: 'Outros descontos',
                    details: (
                      <Typography variant="subtitle1">
                        Englobam deduções adicionais que não são obrigatórias
                        por lei, mas que podem ser acordadas com o empregador ou
                        relacionadas a benefícios contratados. Esses outros
                        descontos impactam no valor final do salário líquido e
                        incluem vale-transporte, plano de saúde ou odontológico,
                        previdência privada, descontos por empréstimos
                        consignados, mensalidades de associações ou sindicatos,
                        entre outros.
                      </Typography>
                    ),
                  },
                  {
                    title: 'Benefícios',
                    details: (
                      <Typography variant="subtitle1">
                        Os benefícios entram no cálculo como acréscimos ao
                        salário bruto, aumentando o valor final que o
                        trabalhador recebe. Isso significa que, mesmo com a
                        existência de descontos obrigatórios e adicionais, os
                        benefícios podem compensar ou até superar essas
                        deduções. Alguns exemplos comuns de benefícios são:
                        vale-alimentação ou refeição, vale-transporte
                        subsidiado, comissões ou bonificações, adicional por
                        insalubridade ou periculosidade, ajuda de custo, horas
                        extras e adicional noturno, participação nos lucros e
                        resultados (PLR), entre outros.
                      </Typography>
                    ),
                  },
                ]}
              </AccordionGroup>
            </ButtonAbout>
          </Grid2>
        </Box>
      </FormProvider>
    </BasePage>
  );
};

export default HomePage;
