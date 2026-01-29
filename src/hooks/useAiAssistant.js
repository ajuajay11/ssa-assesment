import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

export function useAiAssistant() {
  const [loading, setLoading] = useState(false);

  const main = async ({ label, input }) => {
    try {
      setLoading(true);

      const ai = new GoogleGenAI({
        apiKey: `AIzaSyBpfnVkUTtSc2V3rLBd2U-6dsV30G-kSps`,
      });

      const cleanInput = (input || "").trim();

      // ✅ very simple prompt logic
      const prompt = cleanInput
        ? `${cleanInput}\n\nBased on this input, here are four varied options for the "${label}" field, ranging from different perspectives:\n\nFormat each option as:\n* **CategoryName:** Description (60-100 characters each)`
        : `Generate four varied options for the "${label}" field:\n\nFormat each option as:\n* **CategoryName:** Description (60-100 characters each)`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      return response.text;
    } catch (err) {
      console.error("Gemini error:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { main, loading };
}
