import {
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { styles } from './styles';
import { TablePros } from './types';

const Tabel: React.FC<TablePros> = ({ children, sx }) => {
  const [headerTable, ...dataTable] = children;

  return (
    <Table sx={[styles.table, sx] as SxProps} aria-label="simple table">
      <TableHead>
        <TableRow sx={styles.rowHead}>
          {headerTable.map((item, i) => (
            <TableCell
              key={item.concat(i.toString())}
              sx={styles.cell}
              align={i === 0 ? 'left' : 'right'}
            >
              {item}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {dataTable.map((row, index) => (
          <TableRow sx={styles.row} key={row[0].concat(index.toString())}>
            {row.map((item, i) => (
              <TableCell
                key={item.concat(i.toString()).concat(index.toString())}
                sx={styles.cell}
                align={i === 0 ? 'left' : 'right'}
                component="th"
                scope="row"
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Tabel;
