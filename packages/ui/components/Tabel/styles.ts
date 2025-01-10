import { makeSxStyles } from '../../utils';

export const styles = makeSxStyles({
  table: {
    maxWidth: 520,
    borderColor: 'appColors.primaryLight',
    borderCollapse: 'separate',
  },
  rowHead: ({ spacing }) => ({
    backgroundColor: 'appColors.blueDisable',
    borderRadius: spacing(0, 0, 0, 2),

    '& .MuiTableCell-root': ({ appColors }) => ({
      borderTop: `1px solid ${appColors.primary}`,

      '&:first-of-type': {
        borderRadius: spacing(2, 0, 0, 0),
      },
      '&:last-of-type': {
        borderRadius: spacing(0, 2, 0, 0),
      },
    }),
  }),
  row: ({ spacing }) => ({
    '& .MuiTableCell-root': {
      mt: '-1px',
    },
    '&:nth-of-type(even)': {
      backgroundColor: 'appColors.blueDisable',
    },
    '&:last-of-type': {
      borderRadius: spacing(0, 0, 0, 2),
      '& .MuiTableCell-root': {
        '&:first-of-type': {
          borderRadius: spacing(0, 0, 0, 2),
        },
        '&:last-of-type': {
          borderRadius: spacing(0, 0, 2, 0),
        },
      },
    },
  }),
  cell: (theme) => ({
    p: theme.spacing(1.5, 2),
    borderBottom: `1px solid ${theme.appColors.primary}`,

    '&:first-of-type': {
      borderLeft: `1px solid ${theme.appColors.primary}`,
    },
    '&:last-of-type': {
      borderRight: `1px solid ${theme.appColors.primary}`,
    },
  }),
});
