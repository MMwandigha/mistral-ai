import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY environment variable is not set");
}

const client = new GoogleGenAI({ apiKey });

const message = await client.models.generateContent({
  model: "gemini-3-flash-preview",
  contents: "Explain how AI works in a few words"
});

  console.log(message.text);
  console.log(message);