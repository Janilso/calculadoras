import { Grid2, Skeleton, Stack } from '@mui/material';
import React from 'react';
import { styles } from './styles';

const ResultSkeleton: React.FC = () => {
  return (
    <Grid2 container spacing={1} size={12}>
      <Grid2 size={{ xs: 12, sm: 8 }}>
        <Stack spacing={0.25} sx={styles.stack}>
          <Skeleton height={93} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
        </Stack>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 4 }}>
        <Stack spacing={2} alignItems="center" sx={styles.stackGraphic}>
          <Skeleton variant="circular" height={120} width={120} />
          <Grid2 size={{ xs: 7, sm: 10 }}>
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
          </Grid2>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default ResultSkeleton;
