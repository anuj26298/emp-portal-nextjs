import Link from "next/link";
const Navbar = (styles) => {
    console.log(styles)
    return (
        <ul className='navbarMenu'>
                <li className='navbarItems'><Link href='/'>Home</Link></li>
                <li className='navbarItems'><Link href='/about'>About</Link></li>
                <li className='navbarItems'><Link href='/contact'>Contact</Link></li>
                <li className='navbarItems'><Link href='/blog'>Blog</Link></li>
        </ul>
    )
}

export default Navbar;