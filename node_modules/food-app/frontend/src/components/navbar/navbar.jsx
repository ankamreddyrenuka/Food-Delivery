import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({ showLogin, setShowLogin }) => {
  const [activeMenu, setActiveMenu] = useState('home')

  const handleContactClick = () => {
    setActiveMenu('contact us')
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="Logo" />
      </Link>
      <ul className='navbar-menu'>
        <li className={activeMenu === 'home' ? 'active' : ''} onClick={() => setActiveMenu('home')}><Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>home</Link></li>
        <li className={activeMenu === 'menu' ? 'active' : ''} onClick={() => setActiveMenu('menu')}><Link to="/menu" style={{textDecoration: 'none', color: 'inherit'}}>menu</Link></li>
        <li className={activeMenu === 'mobile-app' ? 'active' : ''} onClick={() => setActiveMenu('mobile-app')}><Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>mobile-app</Link></li>
        <li className={activeMenu === 'contact us' ? 'active' : ''} onClick={handleContactClick}>contact us</li>
      </ul>
      <div className='navbar-right'>
        <Link to="/cart" style={{textDecoration: 'none'}}>
          <img src={assets.search_icon} alt="Search" />
        </Link>
        <div className='navbar-search-icon'>
          <Link to="/cart" style={{textDecoration: 'none'}}>
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          <div className='dot'></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
