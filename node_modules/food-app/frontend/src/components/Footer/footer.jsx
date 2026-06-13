import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Left Section - Logo and Description */}
        <div className='footer-left'>
          <img src={assets.logo} alt="Hungry Logo" className='footer-logo' />
          <p>Welcome to Hungry - Your favorite food delivery app</p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Middle Section - Company Links */}
        <div className='footer-middle'>
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/">About us</a></li>
            <li><a href="#/">Delivery</a></li>
            <li><a href="#/">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Section - Get In Touch */}
        <div className='footer-right'>
          <h3>GET IN TOUCH</h3>
          <p className='phone'>+91 9123457687</p>
          <p className='email'>contact@hungry.com</p>
          <p className='copyright'>Copyright 2026 @ Hungry. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
