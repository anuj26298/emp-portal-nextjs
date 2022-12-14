import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const EmployeesTable = ({employee}) => {
  const deleteEmp = (id) => {
    fetch(`/api/employee/${id}`,{method:'DELETE'})
    window.location.replace('./viewallEmp')
  }
  return (
            <StyledTableRow key={employee._id}>
              <StyledTableCell align="right">{employee.empCode}</StyledTableCell>
              <StyledTableCell align='right'>
                {`${employee.firstName} ${employee.lastName}`}
              </StyledTableCell>
              <StyledTableCell align="right">{employee.gender}</StyledTableCell>
              <StyledTableCell align="right">{employee.email}</StyledTableCell>
              <StyledTableCell align="right">{employee.designation}</StyledTableCell>
              <StyledTableCell align="right">{employee.dateOfJoining.split('T')[0]}</StyledTableCell>
              <StyledTableCell align="right">{employee.address}</StyledTableCell>
              <StyledTableCell align="right">
                <DeleteIcon style={{'cursor':'pointer'}} onClick={() => deleteEmp(employee._id)}/>
                <Link href={`/create/${employee._id}`}><EditIcon style={{'cursor':'pointer'}}/></Link></StyledTableCell>
            </StyledTableRow>
  );
}

export default EmployeesTable;