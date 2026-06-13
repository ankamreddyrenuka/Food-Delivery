import React from 'react'
import './header.css'
import { assets } from '../../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="header">
      <img src={assets.header_img} alt="Header" className="header-image" />
      <div className="header-content">
        <h1 className="header-title">Order Your Favourite Food Here</h1>
        <p className="header-description">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button onClick={() => navigate('/menu')} className="header-button">View Menu</button>
      </div>
    </div>
  )
}

export default Header
