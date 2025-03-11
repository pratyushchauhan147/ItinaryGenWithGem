import React from 'react'
import { useState,useEffect } from 'react';
import { generateResult } from '../services/ai.service.js';
import Landing from '../components/Landing.jsx';
import Marque from '../components/Marque.jsx';
import {motion} from 'framer-motion'
import FlashlightSection from '../components/FlashlightBackground.jsx';
import Markdown from 'react-markdown'
import Info from '../components/Info.jsx';


 



const Home = () => {


  return (
    
    <div  className=''>
      
    <Landing ></Landing>
    <Marque ></Marque>
    <Info></Info>
    <FlashlightSection backgroundImage="./map.jpg" ></FlashlightSection>

      
    </div>
  )
}

export default Home
