import Navbar from '../../components/Navbar/Navbar'
import styles from '../../styles/about.module.css'
import Image from 'next/image'
import Head from 'next/head'
const About = () => {
  return (
    <>
      <Head><title>About</title></Head>
      <Navbar />
      <div className={styles.aboutPage}>
        <h1 className={styles.heading}>
          Employee Management Portal
        </h1>
        <p>This Application is Created using NEXT JS.</p>
        <Image src='/demo1.png' width='500' height='300' />
        <Image
          src='https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          width='500' height='300'
        />

      </div>
    </>
  )
}

export default About
