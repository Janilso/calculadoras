import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { styles } from './types';

const Footer: React.FC = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <Box sx={styles.root}>
      <Typography>
        @{year} - Desenvolvido por{' '}
        <a href="//www.janilso.com.br">www.janilso.com.br</a>
      </Typography>
    </Box>
  );
};

export default Footer;
