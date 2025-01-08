export const getOptionMonth = () => {
  return Array.from({ length: 12 }).map((_, i) => {
    const numberMonth = i + 1;
    const date = new Date(`${numberMonth}-1-2025`);
    const label = `${date.toLocaleString('pt-BR', { month: 'short' })}`
      .replace('.', '')
      .toUpperCase();
    return {
      label,
      value: numberMonth,
    };
  });
};
