import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/navbar/Header/header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Appdownload from '../../components/AppDownload/Appdownload'

const Home = () => {
  const [category, setCategory] = useState('All')

  return (
    <div className="home">
      <Header />
      <ExploreMenu />
      <FoodDisplay category={category} setCategory={setCategory} />
      <Appdownload />
    </div>
  )
}

export default Home
