import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar/Navbar'
import styles from '../../styles/post.module.css'

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  const paths = data.map((item) => {
    console.log(item)
    return {
      params: {
        postNo: item.id.toString()
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async (context) => {
  const id = context.params.postNo
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}
const Post = ({ data }) => {
  const router = useRouter()
  const queryParam = router.query
  const postId = queryParam.postNo
  const { id, title, body } = data
  return (
    <>
      <Head><title>Post </title></Head>
      <Navbar />
      <div className='blog-item blog-item-inside'>
        <h3>{id}</h3>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      {/* <h1 className={styles.heading}>{postId} content</h1> */}
    </>
  )
}

export default Post
