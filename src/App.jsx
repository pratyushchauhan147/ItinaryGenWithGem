import React from 'react'
import AppRoutes from './routes/AppRoutes'
import './App.css'
import LocomotiveScroll from 'locomotive-scroll';

import { AnimatePresence } from "framer-motion";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    
      <AnimatePresence> < AppRoutes /></AnimatePresence>
       
    
  )
}

export default App
