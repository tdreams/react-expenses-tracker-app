import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-aria-label="simple table">
        <TableHead></TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuTable;
