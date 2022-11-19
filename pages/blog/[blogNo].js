import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import styles from '../../styles/blog.module.css'
const Blogs = () => {
    const router = useRouter();
    const queryParam = router.query;
    const blogName = queryParam.blogNo
    
    return (
        <>
            <Navbar />
            <h1 className={styles.heading}>{blogName} content</h1>
        </>
    )
}

export default Blogs;