import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category, setCategory }) => {
  const { food_list } = useContext(StoreContext)
  const categories = ['All', ...new Set(food_list.map((item) => item.category))]

  const filtered =
    category && category !== 'All'
      ? food_list.filter((item) => item.category === category)
      : food_list

  return (
    <section className="food-display">
      <div className="food-display-header">
        <div>
          <h2>Top dishes near you</h2>
          <p>Select a category to narrow down the list.</p>
        </div>
        <div className="food-display-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === category ? 'active' : ''}
              onClick={() => setCategory(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="food-display-grid">
        {filtered.map((item, index) => (
          <FoodItem
            key={item._id ?? index}
            id={item._id ?? index}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
            rating={item.rating ?? 4.5}
          />
        ))}
      </div>
    </section>
  )
}

export default FoodDisplay
