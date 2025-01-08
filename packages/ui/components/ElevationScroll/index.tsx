import React, { cloneElement, PropsWithChildren } from 'react';
import { ElevationScrollProps } from './types';
import { useScrollTrigger } from '@mui/material';
import { styles } from './styles';

const ElevationScroll: React.FC<PropsWithChildren<ElevationScrollProps>> = ({
  children,
  window,
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    sx: trigger ? [styles.appBar, styles.appBarScroll] : styles.appBar,
  });
};

export default ElevationScroll;
