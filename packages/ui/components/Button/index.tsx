import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <MuiButton
      data-gtm-type="click"
      data-gtm-clicktype="button"
      data-gtm-name="Calcular"
      {...rest}
    >
      {label}
    </MuiButton>
  );
};
