import React from 'react'
import {motion} from 'framer-motion'
import Eyes from './Eyes';
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react'





const Landing = () => {
  const navigate = useNavigate();
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
    <div data-scroll data-scroll-speed='-.3' className=' mt-10 z-[-999]  h-[80vh] flex flex-col md:flex-row md:justify-between'>

<div
        className="absolute z-[-1] inset-0 bg-cover bg-center pointer-events-none mix-blend-color-dodge "
        style={{
          backgroundImage: `url('./map.jpg')`,
          WebkitMaskImage: `radial-gradient(circle 30vw at ${mx}px ${my}px, rgb(7, 84, 143) 10%, rgba(0, 0, 0, 0) 40%)`,
          maskImage: `radial-gradient(circle 20vw at ${mx}px ${my}px,  rgb(0, 0, 0) 5%, rgba(5, 5, 5, 0.26) 15%, rgba(0, 0, 0, 0) 40%)`,
          transition: "mask-image 0.05s ease, -webkit-mask-image 0.05s ease",
        }}
      />

        

        <div className="left p-10 md:p-20">
      <h1 className=' text-[10vw] md:text-[4vw] leading-[1] font-bold'>WhereGo</h1>
      <div className="texttruct">
      {['Love To Travel?','Get Your Plans Ready','with AI'].map((item,index)=>{
        return(<div className='masker'>
            <div className="w-fit flex items-end overflow-hidden">
            <h1 className='  tracking-tight text-[8vw] md:text-[4vw]  leading-[1] font-thin'>{item}</h1>
            </div>
        </div>)
        
      })}

      <motion.button  initial={{scale:2}} animate={{scale:1}} whileHover={{scale: 1.2,transition:{duration:0.1}}} onClick={()=>navigate('/itinary')}    className=' flex  justify-center mt-4   items-center bg-[#0647B7]' ><h1  className='p-2 text-[8vw] md:text-[2vw]  leading-[1] '>Make a Plan</h1></motion.button>
      </div>
      
      </div>
      <div className='right w-1/2'>
        <Eyes></Eyes>
        
        
        
      </div>
    </div>
  )
}

export default Landing
