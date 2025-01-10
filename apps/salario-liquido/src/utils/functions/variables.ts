import { BaseParametersType } from './types';

const API_URI: string = import.meta.env.VITE_API_URI;
const BASE_PARAMETERS: BaseParametersType = JSON.parse(
  import.meta.env.VITE_BASE_PARAMETERS
);

export { API_URI, BASE_PARAMETERS };
