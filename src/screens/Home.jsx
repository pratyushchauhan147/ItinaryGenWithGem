import React from 'react'
import { useState,useEffect } from 'react';
import { generateResult } from '../services/ai.service.js';
import Markdown from 'react-markdown'
import axios from '../configs/axios.config.js';
const Home = () => {
const [inputmes, setinputmes] = useState("");
const [date, setdate] = useState();
const [days, setdays] = useState();
const [city, setcity] = useState();
const [country, setcountry] = useState();
const [response, setresponse] = useState();
     async function  submitHandle(e){
        e.preventDefault()
        var mes = `Create a Itinary for Travelling to ${city} of country ${country}  on date ${date} for ${days} days give me a point vise in a markdown format and just the itinary part 
          `
        var res =  await generateResult(mes);
        setresponse(res);


       
    }

  return (
    <div>
      <form >
        <input placeholder='date'  type="text" value={date} onChange={(e)=>{setdate(e.target.value);console.log(inputmes)}} />
        <input placeholder='city' type="text" value={city} onChange={(e)=>{setcity(e.target.value);console.log(inputmes)}} />
        <input placeholder='coutry' type="text" value={country} onChange={(e)=>{setcountry(e.target.value);console.log(inputmes)}} />
        <input placeholder='days' type="text" value={days} onChange={(e)=>{setdays(e.target.value);console.log(inputmes)}} />

        <input type="button" value='show' onClick={submitHandle} />
      </form>
    
        <Markdown>{response}</Markdown>
    </div>
  )
}

export default Home
