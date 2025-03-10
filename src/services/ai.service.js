
import { GoogleGenerativeAI } from "@google/generative-ai"
const genAI = new GoogleGenerativeAI("AIzaSyBS5AGVtbINSlReTMNEY9ytuH5OW2lY80g");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
 
export const  generateResult = async (prompt)=>{

const result = await model.generateContent(prompt);
return result.response.text()

}
