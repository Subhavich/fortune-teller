import { sanitizeResponse } from "./sanitize";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const fetchTarotResponse = async ({ systemPrompt, userPrompt }) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4", // Recommend using gpt-4 for nuanced outputs
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });
    if (!response.choices[0].message.content) {
      throw new Error("Messed Up");
    }
    return sanitizeResponse(response.choices[0].message.content.reading[0]);
  } catch (error) {
    console.log(error);
  }
};
