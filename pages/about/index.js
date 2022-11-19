import Navbar from "../../components/Navbar/Navbar";
import styles from '../../styles/about.module.css'
import Image from "next/image";
const About = () => {

    return (
        <>
        <Navbar />
        <div className={styles.aboutPage}>
        <h1 className={styles.heading}>About page</h1>
        <Image src="/demo1.png" width="500" height="300"></Image>
        <Image 
        src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        width="500" height="300"
        ></Image>

        </div>
        </>
    )
}

export default About;