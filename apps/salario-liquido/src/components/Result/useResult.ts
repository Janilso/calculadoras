import { useMemo } from 'react';
import { ResultProps } from './types';
import { formatMoney } from '@calculadoras/core/helpers';
import { appColors } from '@calculadoras/ui/theme';

const useResult = ({ data }: Pick<ResultProps, 'data'>) => {
  const dataFormated = useMemo(
    () => ({
      salarioLiquido: formatMoney(data?.salarioLiquido ?? 0),
      inss: formatMoney(data?.inss ?? 0),
      irrf: formatMoney(data?.irrf ?? 0),
      outrosDescontos: formatMoney(data?.outrosDescontos ?? 0),
    }),
    [data]
  );

  const dataResult = useMemo(() => {
    const { inss, irrf, outrosDescontos, salarioLiquido } = dataFormated;
    return [
      {
        label: 'Seu salário líquido',
        value: salarioLiquido,
      },
      { label: 'INSS', value: inss },
      { label: 'Imposto de renda', value: irrf },
      { label: 'Outros Descontos', value: outrosDescontos },
    ];
  }, [dataFormated]);

  const getLabelLegend = (text: string, value: string) => {
    return `${text}: ${value}`;
  };

  const dataCharts = useMemo(
    () => [
      {
        id: 0,
        value: data?.inss ?? 0,
        label: 'INSS',
        color: appColors.primaryLight,
      },
      {
        id: 1,
        value: data?.irrf ?? 0,
        label: 'IRRF',
        color: appColors.secondary,
      },
      {
        id: 2,
        value: data?.outrosDescontos ?? 0,
        label: 'Outros descontos',
        color: appColors.lightBlue,
      },
      {
        id: 3,
        value: data?.salarioLiquido ?? 0,
        label: 'Salário Líquido',
        color: appColors.primaryMedium,
      },
    ],
    [data]
  );

  const legends = useMemo(() => {
    const { inss, irrf, outrosDescontos, salarioLiquido } = dataFormated;

    return [
      {
        label: getLabelLegend('Salário Líquido', salarioLiquido),
        bgcolor: appColors.primaryMedium,
      },
      { label: getLabelLegend('INSS', inss), bgcolor: appColors.primaryLight },
      { label: getLabelLegend('IRRF', irrf), bgcolor: appColors.secondary },
      {
        label: getLabelLegend('Outros descontos', outrosDescontos),
        bgcolor: appColors.lightBlue,
      },
    ];
  }, [dataFormated]);

  return { dataResult, dataCharts, legends };
};

export default useResult;
