import { Grid, Paper } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar/Navbar'
import PostCard from '../../components/PostCard/PostCard'
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  return {
    props: {
      data
    }
  }
}
const Posts = ({ data }) => {
  return (
    <>
      <Head><title>Posts</title></Head>
      <Navbar />
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={12}>
            {
              data && data.slice(0, 10).map((item, index) => {
                return (
                  <Grid key={index} item >
                    <Paper>
                    <Link href={`/post/${item.id}`}><PostCard id={item.id} title={item.title} /></Link>
                    </Paper>
                    </Grid>
                )
              })
            }
        </Grid>
      </Grid>
      </Grid>
    </>
  )
}

export default Posts
