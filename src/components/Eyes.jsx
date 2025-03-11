import React from 'react'
import { useEffect,useState } from 'react'
const Eyes = () => {
   const [rotate, setrotate] = useState(0);
useEffect(() => {
    window.addEventListener("mousemove", (e)=>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let deltaY =  mouseY - window.innerHeight/2;
        let deltaX = mouseX - window.innerWidth*(3/4);
        var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI)
        setrotate(angle)
        

    })
    
   
});

  return (
    <div className='eyes  w-full  md:h-screen overflow-hidden p-4 '>
        
        
      <div className=" relative w-full  h-[20vh]   md:h-[60vh] bg-center   ">
        <div className='absolute flex  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>

        <div className=' flex items-center justify-center  w-[15vw] h-[15vw] bg-white rounded-full '>
            <div className='w-2/3 h-2/3  relative rounded-full bg-black '>
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)` }} className={`line w-full flex justify-end p-2  absolute top-1/2 left-1/2 x-2 h-10 `}>
            <div className='w-[3vw] h-[3vw]  rounded-full bg-white '></div>
            </div>
            </div>
        </div>

        <div className=' flex items-center justify-center  w-[15vw] h-[15vw] bg-white rounded-full '>
            <div className='w-2/3 h-2/3  relative rounded-full bg-black '>
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)` }} className={`line w-full flex justify-end p-2  absolute top-1/2 left-1/2 x-2 h-10 `}>
            <div className='w-[3vw] h-[3vw]   rounded-full bg-white '></div>
            </div>
            </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Eyes
