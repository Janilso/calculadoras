import React from 'react';
import { InputAboutProps } from './types';
import TooltipResponsive from '../TooltipResponsive';
import { Box } from '@mui/material';
import { styles } from './styles';
import { IconWarning } from '../../icons';

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
