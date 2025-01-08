import React, { useEffect, useRef, useState } from 'react';
import ElevationScroll from '../ElevationScroll';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import { styles } from './styles';
import { styles as stylesElevationScroll } from '../ElevationScroll/styles';
import { getParamsUrl } from '@calculadoras/core/helpers';

const Header: React.FC = () => {
  const refAppBar = useRef<HTMLDivElement>();
  const [height, setHeight] = useState(0);
  const { fromMain } = getParamsUrl();

  useEffect(() => {
    setHeight(refAppBar?.current?.offsetHeight ?? 0);
  }, [refAppBar]);

  return (
    <>
      <ElevationScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={stylesElevationScroll.appBar}
          ref={(r: HTMLDivElement) => {
            refAppBar.current = r;
          }}
        >
          <Container>
            <Toolbar disableGutters sx={styles.toolbar}>
              <Button
                onClick={() => window.location.assign('//www.janilso.com.br')}
                size="medium"
                variant="text"
                color="inherit"
              >
                <Typography>
                  {fromMain ? 'Voltar' : 'Ir'} para o site principal
                </Typography>
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Box sx={{ height }} />
    </>
  );
};

export default Header;
