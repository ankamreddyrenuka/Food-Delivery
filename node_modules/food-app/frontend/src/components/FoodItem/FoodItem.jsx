import React, { useContext } from 'react'
import './FoodItem.css'
import { StoreContext } from '../context/StoreContext'
import { assets } from '../../assets/assets'

const starString = (rating) => {
  const filled = Math.round(rating)
  const maxStars = 5
  return Array.from({ length: maxStars }, (_, idx) => (idx < filled ? '★' : '☆')).join('')
}

const FoodItem = ({ id, name, price, image, description, rating }) => {
  const { addToCart, removeFromCart, getQuantity } = useContext(StoreContext)
  const quantity = getQuantity(id)

  return (
    <div className="food-item" data-id={id}>
      <div className="food-item-image">
        <img src={image} alt={name} />
        <button
          className="image-cart-btn image-cart-add"
          onClick={() => addToCart({ _id: id, name, price, image })}
          type="button"
          aria-label="Add to cart"
        >
          +
          {quantity > 0 && <span className="image-cart-qty">{quantity}</span>}
        </button>
        {quantity > 0 && (
          <button
            className="image-cart-btn image-cart-remove"
            onClick={() => removeFromCart(id)}
            type="button"
            aria-label="Remove from cart"
          >
            −
          </button>
        )}
      </div>
      <div className="food-item-body">
        <h4 className="food-item-name">{name}</h4>
        <p className="food-item-price">₹{price.toFixed(2)}</p>
        <p className="food-item-description">{description}</p>
        <div className="food-item-rating">
          <span className="food-item-rating-stars">{starString(rating)}</span>
          <span className="food-item-rating-text">{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
