import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import styles from '../../styles/post.module.css'

export const getStaticProps = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data  = await response.json();

    return {
        props: {
            data
        }
    }
}
const Posts = ({data}) => {

    return (
        <>
        <Head><title>Posts</title></Head>
        <Navbar />
        {
            data && data.slice(0,10).map((item,index) => {
                return <div key={index} className="blog-item">
                    <h3>{item.id}</h3>
                    <Link href={`/post/${item.id}`}><h2 >{item.title}</h2></Link>
                </div>
            })
        }
        </>
    )
}

export default Posts;