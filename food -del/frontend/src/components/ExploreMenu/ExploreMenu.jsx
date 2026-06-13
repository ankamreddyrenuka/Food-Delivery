import React from 'react'
import { Link } from 'react-router-dom'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <section className="explore">
      <div className="explore-header">
        <h1>Explore Our Menu</h1>
        <p>Choose from a delicious selection of favorites crafted to satisfy every craving.</p>
      </div>

      <div className="explore-grid">
        {menu_list.map((item, index) => (
          <div key={index} className="explore-card">
            <div className="explore-image-wrapper">
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="explore-image"
              />
            </div>
            <h3 className="explore-title">{item.menu_name}</h3>
          </div>
        ))}
      </div>

      <div className="explore-footer">
        <Link to="/menu" className="explore-cta">
          View Full Menu
        </Link>
      </div>
    </section>
  )
}

export default ExploreMenu
