import { SxProps, Theme } from '@mui/material';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    appColors: Record<string, string>;
  }
  interface ThemeOptions {
    appColors: Record<string, string>;
  }

  interface Palette {
    appColors: Record<string, string>;
  }
  interface PaletteOptions {
    appColors?: Record<string, string>;
  }

  interface TypographyVariants {
    h2semibold: CSSProperties;
  }
  interface TypographyVariantsOptions {
    h2semibold?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h2semibold: true;
  }
}

export type SxStyleType = SxProps<Theme>;
