const BASE_URL = (apiUri: string) => `${apiUri || ''}/api`;

const ENDPOINTS = {
  URL_CALC_SAQUE: (apiUri: string) =>
    `${BASE_URL(apiUri)}/calculadoraSaqueAniversario`,
};

export { BASE_URL, ENDPOINTS };
