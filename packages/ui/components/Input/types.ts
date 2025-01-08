import {
  InputLabelProps,
  InputProps as MuiInputProps,
  SelectProps,
  TextFieldProps,
} from '@mui/material';

type TCustomInputSelect = {
  value: string | number;
  label: string;
};

type TOnChange = {
  name?: string;
  value?: string;
};

export type InputProps = TextFieldProps & {
  errorMessage?: string;
  name: string;
  defaultValue?: string | number;
  onChange?: (e: TOnChange) => void;
  normalizer?: (value: string | number) => string;
  placeholder?: string;
  maxCharacters?: number;
  options?: TCustomInputSelect[];
  SelectProps?: Partial<SelectProps>;
  InputLabelProps?: Partial<InputLabelProps>;
  InputProps?: Partial<MuiInputProps>;
  endAdornment?: React.ReactNode;
  isInputMoney?: boolean;
  about?: string;
};

export type InputAboutProps = {
  about: string;
};
