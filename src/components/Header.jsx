import { Link } from 'react-router-dom'
import LogoImg from '../img/logo.png'

export default function Header() {
  return (
    <header className='header'>
      <Link className='icon' to={"/"}><img src={LogoImg} alt=''></img></Link>
      <nav className='navbar'>
        <Link to={"/"}>Productos</Link>
        <Link to={"/favoritos"}>Favoritos</Link>
      </nav>
    
    </header>
  )
}
