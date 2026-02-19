import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";

const apiKey = process.env.ANTHROPIC_API_KEY;

const client = new Anthropic({ apiKey: apiKey });

const message = await client.messages.create({
  model: "claude-opus-4-6",
  max_tokens: 1000,
  messages: [
    {
        role: "user",
        content: "What should I search for to find the latest developments in renewable energy?"
    }
  ]
});

  console.log(message);