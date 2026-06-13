import React, { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/Footer/footer'
import LoginPopup from './components/LoginPopup/loginPopup'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Menu from './pages/Menu/Menu'
import Auth from './pages/Auth/Auth'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  console.log('App rendering')
  return (
    <div className="app">
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
