import React from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react'
const Header = () => {
  const navigate = useNavigate();
  return (
    
    
    <div className=' h-[10vh] top-0  mb-[10vh] flex justify-between items-center'>
    

      <motion.h1 initial={{ scale: 0.5 ,rotate:5 }} animate={{ rotate: 0, scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20}} className=' text-[10vw] md:text-[4vw] leading-[1] p-3 font-bold'>GemTrav</motion.h1>
      <motion.div initial={{ width:"1vw"}} animate={{ width:"auto"}}  whileHover={{scale:0.9,backgroundColor:'black'}  } transition={{type:"spring", stiffness: 260, damping: 20}} className='nav links bg-[#0647B7] h-full flex items-center  '>
      <motion.h1 onClick={()=>navigate('/')} whileHover={{scale:0.9,color:"#0647B7"}  }  initial={{ scale: 0.5 ,rotate:0 }} animate={{ rotate: 0, scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20}} className=' text-[5vw] md:text-[2vw] p-3 leading-[1] font-bold'>Home</motion.h1>
      
      </motion.div>
      
    
    </div>
  )
}

export default Header
