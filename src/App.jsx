import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'

function App() {

  return (
    <div className=''>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </div>
  )
}

{/* <div className="grid grid-cols-12 gap-4 p-4 bg-gray-100 min-h-screen" style={{ height: '100vh', gridTemplateRows: '50% 25% 20%' }}>
      
   
      <div className="col-span-2 bg-red-300 p-4 rounded-lg">
        <div className="mb-4">Menu Item 1</div>
        <div className="mb-4">Menu Item 2</div>
        <div className="mb-4">Menu Item 3</div>
        <div className="mb-4">Menu Item 4</div>
      </div>

      <div className="col-span-10 grid grid-cols-4 gap-4">
        <div className="bg-blue-300 p-4 rounded-lg">Revenue</div>
        <div className="bg-green-300 p-4 rounded-lg">Total Sales</div>
        <div className="bg-yellow-300 p-4 rounded-lg">Sales Health Indicator</div>
        <div className="bg-purple-300 p-4 rounded-lg">Team Leaderboard</div>
      </div>


      <div className="col-span-10 bg-orange-300 p-4 rounded-lg">Revenue This Year</div>
      <div className='col-span-2 bg-black rounded-lg'></div>

      <div className="col-span-5 bg-pink-300 p-4 rounded-lg">Current Progress</div>
      <div className="col-span-5 bg-teal-300 p-4 rounded-lg">Sales Past Year</div>
      <div className="col-span-2 bg-indigo-300 p-4 rounded-lg">Cost Breakdown</div>
      
    </div> */}

export default App
