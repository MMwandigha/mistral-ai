// example.mts
import { ElevenLabsClient, play } from "@elevenlabs/elevenlabs-js";
import "dotenv/config";

const apiKey = process.env.ELEVENLABS_API_KEY;

if (!apiKey) {
  throw new Error("ELEVENLABS_API_KEY environment variable is not set");
}

const elevenlabs = new ElevenLabsClient({apiKey: apiKey});

const audioUrl =
  "https://storage.googleapis.com/eleven-public-cdn/audio/marketing/fin.mp3";
const response = await fetch(audioUrl);
const audioBlob = new Blob([await response.arrayBuffer()], {
  type: "audio/mp3",
});

const audioStream = await elevenlabs.audioIsolation.convert({
  audio: audioBlob,
});

await play(audioStream);


