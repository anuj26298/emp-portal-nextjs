import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import styles from '../../styles/contact.module.css'
const Contact = () => {

    return (<>
    <Head><title>Contact</title></Head>
    <Navbar />
        <h1 className={styles.heading}>Contact Page</h1>
    </>)
}

export default Contact;