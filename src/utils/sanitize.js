export const sanitizeResponse = (responseContent) => {
  try {
    // Attempt to parse the response as JSON
    return JSON.parse(responseContent);
  } catch (initialError) {
    console.warn("Initial parsing failed, attempting to sanitize response...");

    // Remove backticks and "json" prefix if present
    const sanitizedContent = responseContent.replace(/```json|```/g, "").trim();

    try {
      // Attempt to parse again after sanitizing
      return JSON.parse(sanitizedContent);
    } catch (finalError) {
      // If it still fails, throw a custom error
      throw new Error(
        "API response is not valid JSON. Check the response content."
      );
    }
  }
};
