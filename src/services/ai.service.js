
import { GoogleGenerativeAI } from "@google/generative-ai"
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
 
export const  generateResult = async (fea)=>{
    const nprompt = `
    You are an expert travel itinerary planner. I will provide you with a destination (city, country, region, or general theme) and optional details like travel dates, preferred travel style (e.g., budget, luxury, adventure, relaxing), interests (e.g., history, food, nature, art), and duration of the trip. 
    
    Your task is to generate a detailed and engaging travel itinerary based on the provided information **in Markdown format**.
    
    Here's the format you should follow:
    
    ### Destination: [Destination Name]  
    **Duration:** [Number] days / [Number] nights (by default, take 4 nights)  
    **Travel Style:** [Style, if provided]  
    **Interests:** [Interests, if provided]  
    **Dates:** [Dates, if provided]
    
    ---
    
    ### Itinerary:
    
    #### Day 1:
    - [Time] - [Activity/Location] - [Brief description]  
    - [Time] - [Activity/Location] - [Brief description]  
    - [Time] - [Activity/Location] - [Brief description]  
    - **Restaurant Suggestion (Optional):** [Name and brief description]  
    
    #### Day 2:
    - [Time] - [Activity/Location] - [Brief description]  
    - [Time] - [Activity/Location] - [Brief description]  
    - [Time] - [Activity/Location] - [Brief description]  
    - **Restaurant Suggestion (Optional):** [Name and brief description]
    
    ---
    
    (Continue for all days)
    
    ---
    
    ### Optional Notes:
    - [Include any helpful travel tips, transportation suggestions, or cultural insights.]
    
    Please ensure the itinerary is:
    - Realistic and feasible.
    - Well-organized and easy to follow.
    - Varied and engaging, catering to the provided interests.
    - Considerate of travel time between locations.
    - Provide links to the main attractions if possible.
    
    ---
    
    Now, please generate an itinerary for the following:
    
    **Destination:** ${fea.country + " " + fea.city}  
    **Duration:** ${fea.days} days  
    **Travel Style:** ${fea.travelType}  
    **Interests:** ${fea.interest}  
    **Dates:** ${fea.date}
    
    Ensure the output is in **Markdown format**. 
    `;
    
   
//var prompt = `Create a Itinary for Travelling to ${fea.city}  ${fea.country}  on date ${fea.date} for ${fea.days} days give me a point vise in a markdown format and just the itinary part `
const result = await model.generateContent(nprompt);
return result.response.text()

}
