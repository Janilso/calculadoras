import React, { PropsWithChildren, useMemo } from 'react';
import { BasePageProps } from './types';
import {
  Container,
  Grid2,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { styles } from './styles';
import Header from '../Header';
import Footer from '../Footer';

const BasePage: React.FC<PropsWithChildren<BasePageProps>> = ({
  children,
  title,
  subtitle,
  styles: customStyles,
}) => {
  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  const variant = useMemo(() => {
    if (isMobile) return 'body2';
    if (isTablet) return 'h3';
    return 'h2';
  }, [isMobile, isTablet]);

  return (
    <>
      <Header />
      <Grid2 container sx={styles.root}>
        <Container>
          <Grid2 container>
            <Grid2 container size={{ xs: 12, md: 6 }} sx={styles.containerLeft}>
              <Typography sx={[styles.title, customStyles?.title] as SxProps}>
                {title}
              </Typography>
              {subtitle ? (
                <Typography sx={styles.subtitle} variant={variant}>
                  {subtitle}
                </Typography>
              ) : null}
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 6 }}
              sx={[styles.containerRight, customStyles?.right] as SxProps}
            >
              {children}
            </Grid2>
          </Grid2>
        </Container>
      </Grid2>
      <Footer />
    </>
  );
};

export default BasePage;
