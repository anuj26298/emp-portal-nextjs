import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
const ErrorPage = () => {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/')
  }
  useEffect(() => {
    setTimeout(() => {
      handleRedirect()
    }, 5000)
  })
  return (
    <>
      <header className='header'>
        <div className='container'>
          <Navbar />
          <div className='headerContent'>
            <h1 className='headerSubtitle'>404</h1>
            <h3 className='headerTitle'>Page Not Found</h3>
            <Link href='/'><h6 className='link_404'>Go back to Home</h6> </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default ErrorPage
