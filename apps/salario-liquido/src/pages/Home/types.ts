import { FonteType } from '../../utils/functions/types';

export type FormValues = {
  salarioBruto: string;
  dependentes: string;
  pensaoAlimenticia: string;
  outrosDescontos: string;
  beneficios: string;
};

export type RenderFonte = (fontes: FonteType[] | undefined) => React.ReactNode;
