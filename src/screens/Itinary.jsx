import React from 'react'
import { useState,useEffect } from 'react';
import Markdown from 'react-markdown'
import { generateResult } from '../services/ai.service.js';
import Header from '../components/Header.jsx';
const Itinary = () => {
    const [inputmes, setinputmes] = useState("");
const [date, setdate] = useState();
const [days, setdays] = useState();
const [city, setcity] = useState();
const [country, setcountry] = useState();
const [interest, setinterest] = useState();
const [travelType, settravelType] = useState();
const [response, setresponse] = useState();
     async function  submitHandle(e){
        e.preventDefault()
        var fea = {city,date,days,country,interest,travelType}
          setresponse("## Loading")
        var res =  await generateResult(fea);
        setresponse(res);
 
    }

  return (
    
    <div >
        <Header></Header>
        <div>
        <form className='flex flex-col justify-center items-center' >
            <div className='r1'>
            <input className='bg-zinc-800 p-2 rounded-md m-2 w-[15vw] ' placeholder='date'  type="text" value={date} onChange={(e)=>{setdate(e.target.value);}} />
            <input className='bg-zinc-800 p-2 rounded-md m-2 w-[15vw] '  placeholder='days' type="text" value={days} onChange={(e)=>{setdays(e.target.value);}} />
            <input className='bg-zinc-800 p-2 rounded-md m-2 w-[15vw] '  placeholder='travel type' type="text" value={travelType} onChange={(e)=>{settravelType(e.target.value);}} />
           
            </div>

            <div className='r1'>
            <input className='bg-zinc-800 p-2 rounded-md m-2 w-[15vw] '  placeholder='city' type="text" value={city} onChange={(e)=>{setcity(e.target.value);}} />
            <input className='bg-zinc-800 p-2 rounded-md m-2 w-[15vw] '  placeholder='coutry' type="text" value={country} onChange={(e)=>{setcountry(e.target.value);}} />
            <input className='bg-zinc-800 p-2 rounded-md m-2 w-[15vw] '  placeholder='interest' type="text" value={interest} onChange={(e)=>{setinterest(e.target.value);}} />
            
            </div>
            
            <input className="" type="button" value='show' onClick={submitHandle} />
          </form>
        </div>
    <div> <Markdown>{response}</Markdown></div>
        
           
      
    </div>
  )
}

export default Itinary

