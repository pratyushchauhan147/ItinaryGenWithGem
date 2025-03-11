import React from 'react'
import { useState,useEffect } from 'react';
const BackgroundBubble = () => {
     const [rotate, setrotate] = useState(0);
        const [my, setmy] = useState();
        const [mx, setmx] = useState();
        useEffect(() => {
            window.addEventListener("mousemove", (e)=>{
                let mouseX = e.clientX;
                let mouseY = e.clientY;
                setmx(mouseX);
                setmy(mouseY);
                let deltaY =  mouseY - window.innerHeight/4;
                let deltaX = mouseX - window.innerWidth/4;
                var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI)
                setrotate(angle)
                
        
            })
            
           
        });
     
  return (
    <div className=' fixed top-0  z-[-999] '>
        <div style={{top:my,left:0 }} className=" z-[-10] absolute blur-xs  w-[100vw] bg-blue-600 h-[1px] "></div>
        <div style={{top:0, left:mx}} className=" z-[-10] absolute blur-xs  w-[1px] bg-blue-600 h-[100vh] "></div>

        
      
    </div>
  )
}

export default BackgroundBubble
