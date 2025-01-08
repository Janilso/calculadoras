export const getParamsUrl = () => {
  const result = new URLSearchParams(window.location?.search?.substring(1));
  const keys = Array.from(result.keys());
  const values = Array.from(result.values());

  const entries = keys.map((key, i) => {
    const value = decodeURI(values[i]);
    let valueToType: unknown = value;
    if (parseFloat(value)) valueToType = parseFloat(value);
    else if (value === 'true') valueToType = true;
    else if (value === 'false') valueToType = false;

    return [key, valueToType];
  });

  return Object.fromEntries(entries);
};
