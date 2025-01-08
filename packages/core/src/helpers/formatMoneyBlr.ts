import { removeMoneyFormat } from './removeMoneyFormat';

export const formatMoneyBlr = (value: string | number = 0.0) => {
  let v = value;

  if (typeof v === 'number') v = Math.round(v * 100);
  v = removeMoneyFormat(v?.toString(), false) as string;

  if (parseFloat(v) === 0) return 'R$ 0,00';

  v = v?.replace(/\D/g, '');
  v = v?.replace(/(\d{1})(\d{15})$/, '$1.$2');
  v = v?.replace(/(\d{1})(\d{11})$/, '$1.$2');
  v = v?.replace(/(\d{1})(\d{8})$/, '$1.$2');
  v = v?.replace(/(\d{1})(\d{5})$/, '$1.$2');
  v = v?.replace(/(\d{1})(\d{2})$/, '$1,$2');

  return `R$ ${v}`;
};
