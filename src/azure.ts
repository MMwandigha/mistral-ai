// translate.ts
import "dotenv/config";

const key = process.env.AZURE_TRANSLATOR_KEY;
const region = process.env.AZURE_TRANSLATOR_REGION;

if (!key || !region) {
  throw new Error("AZURE_TRANSLATOR_KEY or AZURE_TRANSLATOR_REGION not set");
}

const translate = async () => {
  const response = await fetch(
    'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=nya&to=en',
    {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': key!,
        'Ocp-Apim-Subscription-Region': region!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{ Text: 'Moni, muli bwanji?' }]),
    }
  );

  const data = await response.json() as any;
  console.log(JSON.stringify(data, null, 2));
  console.log(data[0]?.translations?.[0]?.text);
};

translate();