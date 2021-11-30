import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData('Tidak yakin', '0-0.2'),
  createData('Kurang yakin', '0.2-0.4'),
  createData('Netral', '0.4-0.6'),
  createData('Yakin', '0.6-0.8'),
  createData('Sangat yakin', '0.8-1')
];

export default function DetailTable() {
  return (
    <TableContainer sx={{ maxWidth: 650 }} component={Paper}>
      <Table sx={{ maxWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Kata</TableCell>
            <TableCell align="right">Nilai</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
