import { ptBR } from '@mui/material/locale';
import { alpha, createTheme } from '@mui/material/styles';
import { appColors } from './appColors';
import {
  MuiButton,
  MuiDialog,
  MuiDialogActions,
  MuiDialogContent,
  MuiDialogTitle,
  MuiFormLabel,
  MuiInputBase,
  MuiLink,
  MuiList,
  MuiMenuItem,
  MuiOutlinedInput,
  MuiSelect,
  MuiSkeleton,
  MuiTextField,
  MuiTooltip,
  MuiTypography,
} from './components';
import './types';

export const AppTheme = createTheme(
  {
    typography: {
      fontFamily: ['"Exo"', 'sans-serif'].join(','),
      allVariants: {
        color: appColors.white,
        fontFamily: ['"Exo"', 'sans-serif'].join(','),
      },
      h2: {
        fontSize: 28,
        fontWeight: 400,
      },
      h3: {
        fontSize: 20,
        fontWeight: 400,
      },
      h2semibold: {
        fontFamily: ['"Exo"', 'sans-serif'].join(','),
        color: appColors.white,
        fontSize: 28,
        fontWeight: 600,
      },
    },
    palette: {
      mode: 'dark',
      primary: {
        main: appColors.primary,
        contrastText: appColors.white,
      },
      secondary: {
        main: appColors.secondary,
        contrastText: appColors.white,
      },
      text: {
        primary: appColors.primary,
        secondary: appColors.secondary,
        disabled: alpha(appColors.primary, 0.5),
      },
      appColors,
    },
    appColors,
    components: {
      MuiTypography,
      MuiTextField,
      MuiOutlinedInput,
      MuiFormLabel,
      MuiInputBase,
      MuiSelect,
      MuiMenuItem,
      MuiList,
      MuiButton,
      MuiTooltip,
      MuiSkeleton,
      MuiLink,
      MuiDialog,
      MuiDialogActions,
      MuiDialogTitle,
      MuiDialogContent,
    },
  },
  ptBR
);
