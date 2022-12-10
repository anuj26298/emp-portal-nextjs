import NavBar from '../../components/Navbar/Navbar'
import Head from 'next/head'
import EditEmpDetails from '../../components/EmpForm/EditEmpDetails'
import { returnUrl } from '../../utils/utils'
export const getStaticPaths = async (context) => {
  const url = returnUrl(context)
  let response = await fetch(`${url}/api/employee`)
   response = await response.json()
  const data = response && response.data ? response.data : []
  const paths = data && data.map((item) => {
    return {
      params: {
        id: item._id.toString()
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`/api/employee/${id}`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}
const EditUser = ({data}) => {

  return (
    <>
      <Head><title>User</title></Head>
      <NavBar />
      <EditEmpDetails empDetails={data}/>
    </>
  )
}
export default EditUser;
