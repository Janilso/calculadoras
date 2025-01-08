import { formatMoney } from '@calculadoras/core/helpers';
import { TooltipResponsive } from '@calculadoras/ui/components';
import { IconWarning } from '@calculadoras/ui/icons';
import { Box, Grid2, SxProps, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import TabelResultSkeleton from './skeleton';
import { styles } from './styles';
import { DataListType, TabelResultProps } from './types';

const TabelResult: React.FC<TabelResultProps> = ({
  saldoFgts = 0,
  somaLancamentos = 0,
  saldoFuturoTotal = 0,
  previsaoSaque = 0,
  loading = false,
  sx,
}) => {
  const dataList = useMemo<DataListType[]>(() => {
    return [
      {
        label: 'Saldo do FGTS',
        value: formatMoney(saldoFgts),
        tooltip: 'Saldo atual do FGTS',
      },
      {
        label: 'Soma de lançamentos',
        value: formatMoney(somaLancamentos),
        tooltip: `Soma dos futuros lançamentos
                de saldo na conta do FGTS (8% do salário bruto por mês) 
                até o mês de aniversário, considerando que o salário bruto não mude.`,
      },
      {
        label: 'Saldo total com lançamentos',
        value: formatMoney(saldoFuturoTotal),
        tooltip: `Saldo total da conta do FGTS até o mês de nascimento, 
                incluindo os lançamentos futuros`,
      },
      {
        label: 'Sua previsão de saque',
        value:
          previsaoSaque === 0
            ? 'Sem previsão de saque'
            : formatMoney(previsaoSaque),
        isPrevision: true,
      },
    ];
  }, [saldoFgts, somaLancamentos, saldoFuturoTotal, previsaoSaque]);

  return (
    <Box
      sx={
        {
          ...sx,
          ...styles.container,
        } as SxProps
      }
    >
      {loading ? (
        <TabelResultSkeleton />
      ) : (
        dataList.map(({ label, value, tooltip, isPrevision = false }) => {
          const styleGrid = {
            ...styles.line,
            ...(isPrevision ? styles.linePrev : {}),
          } as const;

          const styleLabel = {
            ...styles.itemLabel,
            ...(isPrevision ? styles.itemLabelPrev : {}),
          } as const;

          const styleValue = {
            ...styles.itemValue,
            ...(isPrevision ? styles.itemValuePrev : {}),
          } as const;

          return (
            <Grid2 key={label} container sx={styleGrid}>
              <Typography component="span" sx={styleLabel}>
                {label}

                {tooltip ? (
                  <TooltipResponsive title={tooltip}>
                    <Box>
                      <IconWarning />
                    </Box>
                  </TooltipResponsive>
                ) : null}
              </Typography>
              <Typography
                variant={isPrevision ? 'h2' : 'body2'}
                sx={styleValue}
              >
                {value}
              </Typography>
            </Grid2>
          );
        })
      )}
    </Box>
  );
};

export default TabelResult;
