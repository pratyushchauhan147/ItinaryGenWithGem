import React from 'react'
import Home from '../screens/Home'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
const AppRoutes = () => {
  return (
    <div><BrowserRouter>
    <Routes>
        <Route path='/'  element={<Home/>} />
    </Routes>
    </BrowserRouter></div>
    
  )
}

export default AppRoutes
