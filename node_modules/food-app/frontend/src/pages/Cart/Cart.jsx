import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../components/context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cart, addToCart, removeFromCart, removeAllFromCart, getQuantity, food_list } = useContext(StoreContext)
  const [promoCode, setPromoCode] = useState('')
  const navigate = useNavigate()

  const cartItems = Object.values(cart).filter(item => item.quantity > 0)
  const subtotal = cartItems.reduce((sum, item) => sum + (item.item.price * item.quantity), 0)
  const deliveryFee = subtotal === 0 ? 0 : 2
  const total = subtotal + deliveryFee

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty-container">
        <div className="cart-empty">
          <img src={assets.basket_icon} alt="Empty cart" className="cart-empty-icon" />
          <h2>Your cart is empty</h2>
          <p>Add some delicious food to get started!</p>
        </div>
      </div>
    )
  }

  const handleCheckout = () => {
    navigate('/placeOrder')
  }

  return (
    <div className='cart-container'>
      <h1 className="cart-heading">Shopping Cart</h1>
      <div className='cart'>
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Image</p>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Action</p>
          </div>
          <div className="cart-divider"></div>
          {cartItems.map((cartItem) => {
            const item = cartItem.item
            const quantity = cartItem.quantity
            return (
              <div key={item._id} className='cart-items-item'>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-name">{item.name}</div>
                <div className="item-price">₹{item.price.toFixed(2)}</div>
                <div className="quantity-controls">
                  <button onClick={() => removeFromCart(item._id)} className="qty-btn qty-decrease">−</button>
                  <span className="qty-display">{quantity}</span>
                  <button onClick={() => addToCart(item)} className="qty-btn qty-increase">+</button>
                </div>
                <div className="item-total">₹{(item.price * quantity).toFixed(2)}</div>
                <button onClick={() => removeAllFromCart(item._id)} className="remove-btn">×</button>
              </div>
            )
          })}
        </div>

        <div className="cart-bottom">
          <div className="cart-left">
            <div className="cart-promocode">
              <h3>Promo Code</h3>
              <p>If you have a promo code, enter it here</p>
              <div className="cart-promocode-input">
                <input 
                  type="text" 
                  placeholder="Enter promo code" 
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button>Apply</button>
              </div>
            </div>
          </div>

          <div className="cart-right">
            <div className="cart-total">
              <h2>Order Summary</h2>
              <div className="totals-container">
                <div className="total-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="total-divider"></div>
                <div className="total-row total-final">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                PROCEED TO CHECKOUT
              </button>
              <button className="continue-shopping-btn" onClick={() => navigate('/menu')}>
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart