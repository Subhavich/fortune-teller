import { sanitizeResponse } from "./sanitize";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const fetchTarotResponse = async ({ systemPrompt, userPrompt }) => {
  console.time("API Call Duration");
  try {
    // const simulateError = true; // Set this to `true` to simulate an error

    // if (simulateError) {
    //   // Simulate an API-like asynchronous error
    //   return await Promise.reject(
    //     new Error(
    //       "Insufficient funds: Your OpenAI account balance is too low to process this request."
    //     )
    //   );
    // }

    const response = await openai.chat.completions.create({
      model: "gpt-4o", // Recommend using gpt-4 for nuanced outputs
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    console.timeEnd("API Call Duration");

    if (!response.choices[0].message.content) {
      throw new Error("Messed Up");
    }

    return sanitizeResponse(response.choices[0].message.content);
  } catch (error) {
    console.error("API Error:", error.message);

    // Handle insufficient funds simulation
    if (error.message.includes("Insufficient funds")) {
      return {
        error: true,
        message:
          "Your OpenAI account balance is too low. Please add funds to continue.",
      };
    }

    // General error handling
    return {
      error: true,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
};
