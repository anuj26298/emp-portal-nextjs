import NavBar from '../../components/Navbar/Navbar'
import EmployeeForm from '../../components/EmpForm/EmployeeForm'
import Head from 'next/head'

const userName = () => {
  return (
    <>
      <Head><title>User</title></Head>
      <NavBar />
      <EmployeeForm />
    </>
  )
}
export default userName
