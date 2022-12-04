import { useSelector } from 'react-redux'
import styles from '../../styles/Home.module.css'
import Navbar from '../Navbar/Navbar'
const Header = () => {
  const username = useSelector((states) => states.users.users)
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.headerContent}>
          <h4 className={styles.headerSubtitle}>Employee Management Portal</h4>
          <h1 className={styles.headerTitle}>By Team Magic</h1>
          <h6 className={styles.headermono} />
        </div>
      </div>
    </header>
  )
}

export default Header
