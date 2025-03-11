import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateResult = async (fea) => {
    const nprompt = `
        You are an expert travel itinerary planner. I will provide you with a destination (city, country, region, or general theme) and optional details like travel dates, preferred travel style (e.g., budget, luxury, adventure, relaxing), interests (e.g., history, food, nature, art), and duration of the trip.

        Your task is to generate a detailed and engaging travel itinerary based on the provided information **in JSON format**.

        The output must strictly follow this JSON structure (without Markdown formatting):

        {
            "destination": "[Destination Name]",
            "duration": "[Number] days / [Number] nights",
            "travelStyle": "[Style, if provided]",
            "interests": "[Interests, if provided]",
            "dates": "[Dates, if provided]",
            "itinerary": {
                "Day 1": {
                    "Morning": {
                        "Time": "[Time]",
                        "Activity/Location": "[Activity/Location]",
                        "Brief description": "[Brief description]"
                    },
                    "Afternoon": {
                        "Time": "[Time]",
                        "Activity/Location": "[Activity/Location]",
                        "Brief description": "[Brief description]"
                    },
                    "Evening": {
                        "Time": "[Time]",
                        "Activity/Location": "[Activity/Location]",
                        "Brief description": "[Brief description]"
                    },
                    "Night": {
                        "Time": "[Time]",
                        "Activity/Location": "[Activity/Location]",
                        "Brief description": "[Brief description]"
                    }
                },
                "Day 2": { /* Similar structure */ },
                "Day 3": { /* Similar structure */ }
            },
            "optionalNotes": {
                "transportation": "[Transportation details]",
                "culturalInsights": "[Cultural insights]",
                "food": "[Food recommendations]"
            }
        }

        Please ensure the output is:
        - **A valid JSON-parsable string** (without Markdown formatting).
        - **Well-structured & realistic**.
        - **Easy to follow and engaging**.
        - **Considerate of travel time between locations**.
        - **Formatted properly for easy parsing**.

        ---

        Now, generate an itinerary for the following:

        **Destination:** ${fea.country + " " + fea.city}  
        **Duration:** ${fea.days} days  
        **Travel Style:** ${fea.travelType}  
        **Interests:** ${fea.interest}  
        **Dates:** ${fea.date}
    `;

    try {
        const result = await model.generateContent(nprompt);
        let responseText = result.response.text();

        // **Sanitize response to ensure it's valid JSON**
        responseText = responseText.replace(/```json|```/g, "").trim(); // Remove Markdown code block
        return responseText
    } catch (error) {
        console.error("Error generating itinerary:", error);
        return null;
    }
};
