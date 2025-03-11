import React from 'react'
import {motion} from 'framer-motion'
const Marque = () => {

  return (
   
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className=' z-20 w-full rounded-t-lg py-10 bg-[#0647B7]'>
        <div className=' flex  gap-10 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:20}} className='text-[7vw] font-semibold uppercase '>Say goodbye to travel stress! Our AI-powered itinerary generator creates the perfect trip based on your style, interests, and budget—instantly!</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:20}} className='text-[7vw]  font-semibold uppercase '>Say goodbye to travel stress! Our AI-powered itinerary generator creates the perfect trip based on your style, interests, and budget—instantly!</motion.h1>
           
           
        </div>
      
    </div>
  )
}

export default Marque
