import "dotenv/config";
import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

const client = new OpenAI({ apiKey: apiKey });

const completion = await client.chat.completions.create({
  model: "gpt-4o",
  max_tokens: 1000,
  messages: [
    {
      role: "user",
      content: "What should I search for to find the latest developments in renewable energy?"
    }
  ]
});

console.log(completion.choices[0]?.message.content);