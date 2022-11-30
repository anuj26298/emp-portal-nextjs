import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from '../../store/userSlice'
import styles from '../../styles/user.module.css'
import NavBar from '../../components/Navbar/Navbar'
import Head from 'next/head'
const userName = () => {
  const dispatch = useDispatch()
  const [name, setUsername] = useState()
  const handleChange = (event) => {
    setUsername(event.target.value)
  }
  const handleSubmit = () => {
    dispatch(addUsers(name))
  }
  return (
    <>
      <Head><title>User</title></Head>
      <NavBar />
      <div className={styles.userHeader}>
        <header className={styles.headerContent}>Enter the Username you want to access the webpage as!</header>
        <div>
          <form className={styles.formContent}>
            <label>Your Username Here!</label>
            <input type='text' value={name} placeholder='Enter Username' onChange={(e) => handleChange(e)} />
            <Link href='/'><button disabled={!name} onClick={handleSubmit}>
              Continue
                           </button>
            </Link>
          </form>
        </div>
      </div>

    </>
  )
}
export default userName
