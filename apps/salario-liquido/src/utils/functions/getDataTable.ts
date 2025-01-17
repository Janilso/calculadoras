import { formatMoney } from '@calculadoras/core/helpers';
import { GetDataTableType, GetTextByValueType } from './types';

const getTextByValue: GetTextByValueType = (prevValue, value, unLimeted) => {
  if (!prevValue) return `Até ${formatMoney(value)}`;
  if (unLimeted) return `Acima de ${formatMoney(prevValue)}`;
  return `De ${formatMoney(prevValue + (unLimeted ? 0 : 0.01))} até ${formatMoney(value)}`;
};

export const getDataTable: GetDataTableType = (
  dataAnalyse,
  unLimeted,
  tableHeader
) => {
  const valuesData = Object.entries(dataAnalyse.data).map(
    ([valueStr, values]) => {
      const salario = Number.parseFloat(valueStr);
      return {
        salario,
        values,
      };
    }
  );

  const dataArray = valuesData.map(({ salario, values }, index) => {
    const isLast = index === valuesData.length - 1;
    const prevValue = valuesData?.[index - 1]?.salario ?? null;
    const text = getTextByValue(prevValue, salario, isLast && unLimeted);
    const aliquota = values?.aliquota
      ? values.aliquota.toString().concat('%')
      : '-';
    const deducao = values?.deducao ? formatMoney(values.deducao) : '-';
    return [text, aliquota, deducao];
  });

  const data = [tableHeader, ...dataArray];
  const fontes = dataAnalyse?.fontes;
  return {
    data,
    fontes,
  };
};
