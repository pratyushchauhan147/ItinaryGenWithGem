import React from 'react'
import { useState,useEffect } from 'react';
import { generateResult } from '../services/ai.service.js';
import Landing from '../components/Landing.jsx';
import Marque from '../components/Marque.jsx';
import {motion} from 'framer-motion'
import FlashlightSection from '../components/FlashlightBackground.jsx';
import Markdown from 'react-markdown'
import Info from '../components/Info.jsx';
import Eyes from '../components/Eyes.jsx';
import axios from '../configs/axios.config.js';
const Home = () => {
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
    <div className=''>
      
    <Landing></Landing>
    <Marque></Marque>
    <Info></Info>
    <FlashlightSection backgroundImage="./map.jpg" ></FlashlightSection>

      <form >
        <input placeholder='date'  type="text" value={date} onChange={(e)=>{setdate(e.target.value);}} />
        <input placeholder='city' type="text" value={city} onChange={(e)=>{setcity(e.target.value);}} />
        <input placeholder='coutry' type="text" value={country} onChange={(e)=>{setcountry(e.target.value);}} />
        <input placeholder='days' type="text" value={days} onChange={(e)=>{setdays(e.target.value);}} />
        <input placeholder='travel type' type="text" value={travelType} onChange={(e)=>{settravelType(e.target.value);}} />
        <input placeholder='interest' type="text" value={interest} onChange={(e)=>{setinterest(e.target.value);}} />

        <input type="button" value='show' onClick={submitHandle} />
      </form>
    
        <Markdown>{response}</Markdown>
    </div>
  )
}

export default Home
