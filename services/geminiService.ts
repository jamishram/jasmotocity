import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// The API key must be provided in the environment variable API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMotoAdvice = async (userQuery: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const systemInstruction = `
      You are "Jasmotocity AI", an expert motorcycle mechanic and modification specialist working for Jasmotocity.
      Your tone is professional, enthusiastic, and knowledgeable about bikes (especially track bikes and modifications).
      
      Shop Details:
      - Name: Jasmotocity
      - Contact: 9599760305
      - Specialties: Track tyres, performance parts, custom modifications.
      
      Goal:
      Answer the user's question about motorcycle parts, modifications, or tyres. 
      Always recommend they visit the shop or call 9599760305 for booking at the end of your advice.
      Keep answers concise (under 150 words) and helpful.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I'm currently tuning an engine and can't answer right now. Please call the shop directly!";
  } catch (error) {
    console.error("Error fetching advice:", error);
    return "Sorry, our AI connection is having a pit stop. Please try again later or call us directly.";
  }
};
