import { Skeleton, Stack } from '@mui/material';
import React from 'react';
import { styles } from './styles';

const TabelResultSkeleton: React.FC = () => {
  return (
    <Stack spacing={0.25} sx={styles.stack}>
      <Skeleton sx={styles.skeleton} />
      <Skeleton sx={styles.skeleton} />
      <Skeleton sx={styles.skeleton} />
      <Skeleton height={96} />
    </Stack>
  );
};

export default TabelResultSkeleton;
