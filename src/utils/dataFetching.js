import { sanitizeResponse } from "./sanitize";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const fetchTarotResponse = async ({ systemPrompt, userPrompt }) => {
  console.log("RUNNING FETCHING FUNC ...");
  console.time("API Call Duration");
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Recommend using gpt-4 for nuanced outputs
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });
    console.timeEnd("API Call Duration");

    // console.log("The response is here ! ", response);
    if (!response.choices[0].message.content) {
      throw new Error("Messed Up");
    }
    console.log(sanitizeResponse(response.choices[0].message.content));
    return sanitizeResponse(response.choices[0].message.content);
  } catch (error) {
    console.log(error);
  }
};
