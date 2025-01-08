import React from 'react';
import { InputAboutProps } from './types';
import TooltipResponsive from '../TooltipResponsive';
import { Box } from '@mui/material';
import { IconWarning } from '../../assets/icons';
import { styles } from './styles';

const InputAbout: React.FC<InputAboutProps> = ({ about }) => {
  return (
    <TooltipResponsive title={about}>
      <Box sx={styles.aboutBase}>
        <IconWarning />
      </Box>
    </TooltipResponsive>
  );
};

export default InputAbout;
