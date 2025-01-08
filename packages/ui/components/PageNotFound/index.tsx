import { Box, Grid2 } from '@mui/material';
import React from 'react';
import AnimatedContent from '../AnimatedContent';
import { ImageError404 } from '../../assets/icons';
import { Button } from '../Button';
import { styles } from './styles';
import { useNavigate } from 'react-router';

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/');

  return (
    <Grid2 container sx={styles.root}>
      <Box sx={styles.image}>
        <AnimatedContent type="moving2">
          <ImageError404 />
        </AnimatedContent>
      </Box>
      <Grid2 justifyContent="center" container>
        <Button label="Ir para o início" onClick={goToHome} />
      </Grid2>
    </Grid2>
  );
};

export default PageNotFound;
