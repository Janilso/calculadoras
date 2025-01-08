import { Box, Grid2, SxProps, Typography } from '@mui/material';
import React from 'react';
import { ResultProps } from './types';
import useResult from './useResult';
import { styles } from './styles';
import { PieChart } from '@mui/x-charts';
import { appColors } from '@calculadoras/ui/theme';
import { formatMoney } from '@calculadoras/core/helpers';
import ResultSkeleton from './skeleton';

const Result: React.FC<ResultProps> = ({ data, sx, loading }) => {
  const { dataResult, dataCharts, legends } = useResult({
    data,
  });

  return (
    <Grid2 container sx={[styles.root, sx] as SxProps}>
      {loading ? (
        <ResultSkeleton />
      ) : (
        <>
          <Grid2 container direction="column" size={{ xs: 12, sm: 8 }}>
            {dataResult.map(({ label, value }, i) => (
              <Grid2 key={label} sx={styles.line}>
                <Typography sx={styles.lineLabel}>{label}</Typography>
                <Typography
                  sx={styles.lineValue}
                  variant={i === 0 ? 'h2' : 'body2'}
                >
                  {value}
                </Typography>
              </Grid2>
            ))}
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }} sx={styles.graphic}>
            <PieChart
              series={[
                {
                  data: dataCharts,
                  valueFormatter: (item: { value: number }) =>
                    `${formatMoney(item.value)}`,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: {
                    innerRadius: 10,
                    additionalRadius: -10,
                    color: appColors.primaryLight,
                  },
                  paddingAngle: 0,
                },
              ]}
              width={130}
              height={130}
              margin={{ left: 0, right: 0 }}
              slotProps={{
                legend: {
                  hidden: true,
                },
                pieArc: {
                  strokeWidth: 0,
                },
                popper: {
                  sx: styles.popper,
                },
              }}
            />
            <Grid2 sx={styles.legends}>
              {legends.map(({ label, bgcolor }) => (
                <Box key={label}>
                  <Box component="span" sx={{ bgcolor }} />
                  <Typography variant="subtitle1">{label}</Typography>
                </Box>
              ))}
            </Grid2>
          </Grid2>
        </>
      )}
    </Grid2>
  );
};

export default Result;
