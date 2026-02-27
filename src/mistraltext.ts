import "dotenv/config";
import { Mistral } from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({apiKey: apiKey});

const chatResponse = await client.chat.complete({
  model: 'mistral-medium-latest',
  messages: [{role: 'user', content: 'What is the best French cheese?'}],
});

  console.log(chatResponse.choices?.[0]?.message?.content ?? 'No response');