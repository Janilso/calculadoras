export const removeMoneyFormat = (
  value: string = '',
  toFloat: boolean = true
) => {
  const number = value
    .toString()
    .replace(/[^0-9]+/, '')
    .replace(/[.]/g, '')
    .replace(/[,]/g, '.')
    .trim();
  return toFloat ? parseFloat(number) : number;
};
