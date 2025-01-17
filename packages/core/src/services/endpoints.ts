const BASE_URL = (apiUri: string) => `${apiUri || ''}/api`;

const ENDPOINTS = {
  URL_CALC_SAQUE: (apiUri: string) =>
    `${BASE_URL(apiUri)}/calculadora/saque-aniversario`,
  URL_SALARIO_LIQUIDO: (apiUri: string) =>
    `${BASE_URL(apiUri)}/calculadora/salario-liquido`,
};

export { BASE_URL, ENDPOINTS };
