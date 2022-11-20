import styles from '../../styles/Home.module.css'
import Navbar from '../Navbar/Navbar'
const Header = () => {

    return (
        <header className={styles.header}>
        <div className={styles.container}>
          <Navbar/>
          <div className={styles.headerContent}>
            <h4 className={styles.headerSubtitle}>Welcome to Next Js Overview Session</h4>
            <h1 className={styles.headerTitle}>By Team Magic</h1>
            <h6 className={styles.headermono}></h6>
          </div>
        </div>
      </header>
    )
}

export default Header;