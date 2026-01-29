import { useState } from "react";

export function useAiAssistantopenAi() {
  const [loading, setLoading] = useState(false);

  const main = async ({ label, input }) => {
    setLoading(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

    try {
      const cleanInput = (input || "").trim();

      const prompt = cleanInput
        ? `${cleanInput}\n\nBased on this input, here are four varied options for the "${label}" field, ranging from different perspectives:\n\nFormat each option as:\n* **CategoryName:** Description (60-100 characters each)`
        : `Generate four varied options for the "${label}" field:\n\nFormat each option as:\n* **CategoryName:** Description (60-100 characters each)`;

      const res = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
        signal: controller.signal,
      });

      // Try to read JSON safely
      let data = null;
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(text || "Unexpected server response.");
      }

      // Handle HTTP errors with message from server if available
      if (!res.ok) {
        throw new Error(
          data?.error || data?.message || `Request failed (${res.status})`,
        );
      }

      const out = (data?.text || "").trim();
      if (!out) throw new Error("No suggestion returned.");

      return out;
    } catch (err) {
      // Timeout / abort
      if (err?.name === "AbortError") {
        throw new Error("Request timed out. Please try again.");
      }

      // Network / other errors
      throw new Error(
        err?.message || "Something went wrong. Please try again.",
      );
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  return { main, loading };
}
