import "dotenv/config";
import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({ apiKey: apiKey });

const transcriptionResponse = await client.audio.transcriptions.complete({
  model: "voxtral-mini-latest",
  fileUrl: "https://docs.mistral.ai/audio/obama.mp3",
});

  console.log(transcriptionResponse);