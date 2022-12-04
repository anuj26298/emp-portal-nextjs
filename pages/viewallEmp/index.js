import Head from 'next/head'
import EmployeesTable from '../../components/EmployeeTable/EmployeeTable'
import Navbar from '../../components/Navbar/Navbar'
import styles from '../../styles/contact.module.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export const getStaticProps = async () => {
  let response;
  try {
  response = await fetch('http://localhost:3000/api/employee')
  response = await response.json()
  } catch(err) {
    response = { data: []}
  }
  return {
    props: {
      employees: response
    }
  }
}
const ViewAllEmp = ({employees}) => {
  return (
    <>
      <Head><title>Contact</title></Head>
      <Navbar />
      {/* <h1 className={styles.heading}>Contact Page</h1> */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Employee Code</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Designation</StyledTableCell>
            <StyledTableCell align="right">Date of Joining</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {employees && employees.data && employees.data.map((employee) => (
            <EmployeesTable employee={employee} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default ViewAllEmp
