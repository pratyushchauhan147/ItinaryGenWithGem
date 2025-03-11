import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";
const FlashlightSection = ({ backgroundImage }) => {
  const [mouseX, setMouseX] = useState(window.innerWidth / 2);
  const [mouseY, setMouseY] = useState(window.innerHeight / 2);
  const navigate = useNavigate();
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden ">
      {/* Flashlight Background Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none mix-blend-color-dodge  "
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          WebkitMaskImage: `radial-gradient(circle 30vw at ${mouseX}px ${mouseY}px, rgba(0,0,0,1) 10%, rgba(0, 0, 0, 0) 40%)`,
          maskImage: `radial-gradient(circle 30vw at ${mouseX}px ${mouseY}px, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.57) 15%, rgba(113, 113, 113, 0) 40%)`,
          transition: "mask-image 0.05s ease, -webkit-mask-image 0.05s ease",
        }}
      />

      {/* Text Content */}
      <div className="relative z-10 text-white text-center flex items-center flex-col">
        <h1 className="text-5xl font-bold">Explore the Unknown</h1>
        <p className="mt-4 text-lg">Make Your Itinary Now!</p>
        <motion.button  initial={{scale:2}} animate={{scale:1}} whileHover={{scale: 1.2,transition:{duration:0.1}}} onClick={()=>navigate('/itinary')}    className=' flex  justify-center mt-4  rounded-lg  items-center bg-[#0647B7]' ><h1  className='p-2 text-[8vw] md:text-[2vw]  leading-[1] '>Make a Plan</h1></motion.button>
      
      </div>
    </section>
  );
};

export default FlashlightSection;
