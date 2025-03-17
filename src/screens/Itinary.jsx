import React, { useState } from "react";
import { generateResult } from "../services/ai.service.js";
import Header from "../components/Header.jsx";
import { motion } from "framer-motion";
import BackgroundBubble from "../components/BackgroundBubble.jsx";
import ItineraryDisplay from "../components/itinaryRes.jsx";
const Itinerary = () => {
  const [date, setDate] = useState("");
  const [days, setDays] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [interest, setInterest] = useState("");
  const [travelType, setTravelType] = useState("");
  const [response, setResponse] = useState("## Enter Details and Click Show , or Just Click Show for Random itinary");
  const [Jresponse, setJresponse] = useState(null);

  async function submitHandle(e) {
    e.preventDefault();
    const fea = { city, date, days, country, interest, travelType };
    setResponse("## Loading...");

    try {
      const res = await generateResult(fea);
      if (typeof res === "string") {
        const jsonData = JSON.parse(res); // Convert response to JSON
        setJresponse(jsonData);
        setResponse("## Itinerary Loaded Successfully!");
      } else {
        setResponse("## Error: Invalid response format.");
      }
      console.log(Jresponse)
    } catch (error) {
      console.error("Error parsing JSON:", error);
      setResponse("## Error generating itinerary. Please try again.");
    }
  }

  return (
    <div>
      <Header />
      <BackgroundBubble></BackgroundBubble>
    



      <div>
        <motion.form  className="flex md:flex-col justify-center items-center">
          <div className="r1 flex flex-col md:flex-row">
            <motion.input   initial={{scale:0}} animate={{scale:1}} transition={{duration:0.2, type:"spring",delay:0}}  className="bg-zinc-800 p-2 rounded-md m-2 md:w-[15vw]" placeholder="Date" type="text" value={date} onChange={(e) => setDate(e.target.value)} />
            <motion.input  initial={{scale:0}} animate={{scale:1}} transition={{duration:0.2, type:"spring",delay:0.1}}   className="bg-zinc-800 p-2 rounded-md m-2 md:w-[15vw]" placeholder="Days" type="text" value={days} onChange={(e) => setDays(e.target.value)} />
            <motion.input  initial={{scale:0}} animate={{scale:1}} transition={{duration:0.2, type:"spring",delay:0.2}}   className="bg-zinc-800 p-2 rounded-md m-2 md:w-[15vw]" placeholder="Travel Type" type="text" value={travelType} onChange={(e) => setTravelType(e.target.value)} />

          </div>

          <div className="r1  flex flex-col md:flex-row">
            <motion.input   initial={{scale:0}} animate={{scale:1}} transition={{duration:0.2, type:"spring",delay:0.3}}  className="bg-zinc-800 p-2 rounded-md m-2 md:w-[15vw]" placeholder="City" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <motion.input  initial={{scale:0}} animate={{scale:1}} transition={{duration:0.2, type:"spring",delay:0.4}}   className="bg-zinc-800 p-2 rounded-md m-2 md:w-[15vw]" placeholder="Country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
            <motion.input  initial={{scale:0}} animate={{scale:1}} transition={{duration:0.2, type:"spring",delay:0.5}}   className="bg-zinc-800 p-2 rounded-md m-2 md:w-[15vw]" placeholder="Interest" type="text" value={interest} onChange={(e) => setInterest(e.target.value)} />
             </div>
          <motion.input initial={{width:'100vw',display:'none'}} animate={{scale:1,width:'8vw',display:'block'}}  transition={{duration:0.7, type:"spring"}} className="bg-blue-500 w-[8vw] p-2 mb-1.5 rounded-md text-white cursor-pointer" type="button" value="Show" onClick={submitHandle} />
          
          
        </motion.form>
        
      </div>

      <div>
        <h2>Response:</h2>
        <pre className="bg-gray-800 text-white p-4 mb-4 rounded-md">{response}</pre>

        {Jresponse && <ItineraryDisplay itineraryData={Jresponse} />}
      </div>
    </div>
  );
};

export default Itinerary;
