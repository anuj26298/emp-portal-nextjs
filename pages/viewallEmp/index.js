import { useEffect, useState } from 'react'
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
import { updateEmployeeList } from '../../store/employeeListSlice';
import { wrapper } from '../../store/store';
import { useSelector } from 'react-redux';
import { returnUrl } from '../../utils/utils';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


// export const getStaticProps = wrapper.getStaticProps(store=>(
// async (context) => {
//   const url = returnUrl(context)
//   let response;
//   try {
//   response = await fetch(`${url}/api/employee`)
//   response = await response.json()

//   } catch(err) {
//     response = { data: []}
//   }
//   store.dispatch(updateEmployeeList(response))
// }
// ))
const ViewAllEmp = () => {
  const [employeeList,setEmployeeList] = useState([])
  // const employees=useSelector(state=>state.employeeList.employeeList)
  useEffect(() => {
    const getEmployeeList =   async () => {
      let  response = await fetch('/api/employee');
      response = await response.json()
      if(response && response.data) {
        setEmployeeList(response.data)
      }
    }
  getEmployeeList();
  }, [])
  return (
    <>
      <Head><title>Employee List</title></Head>
      <Navbar />
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
          {employeeList && employeeList.length ? employeeList.map((employee) => (
              <EmployeesTable employee={employee} />
          )) : <div></div>} 
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default ViewAllEmp
