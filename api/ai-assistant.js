import OpenAI from "openai";

export default async function handler(req, res) {
  console.log("API Key:", process.env.OPENAI_API_KEY);
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const { prompt } = req.body;

  const r = await client.responses.create({
    model: "gpt-3.5-turbo",
    input: prompt,
  });

  res.status(200).json({ text: r.output_text });
}
