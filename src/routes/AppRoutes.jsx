import React from 'react'
import Home from '../screens/Home'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Itinary from '../screens/Itinary'
const AppRoutes = () => {
  return (
    <div><BrowserRouter>
    <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='//itinerary'  element={<Itinary/>} />
    </Routes>
    </BrowserRouter></div>
    
  )
}

export default AppRoutes