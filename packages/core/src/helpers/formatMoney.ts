export const formatMoney = (value: number, numberOnly: boolean = false) => {
  return new Intl.NumberFormat('pt-BR', {
    style: numberOnly ? 'decimal' : 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
