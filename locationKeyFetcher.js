
// Fetch location keys for each taluka using AccuWeather API
const fetch = require('node-fetch');

const talukas = [
  "Jalgaon", "Bhusawal", "Amalner", "Chopda", "Yaval", "Raver", "Pachora", "Jamner",
  "Bodwad", "Erandol", "Parola", "Dharangaon", "Chalisgaon", "Bhadgaon", "Muktainagar"
];

const apiKey = "AmpqFspNOVCRZdhjUXtuAOCWbKwT4Ok9";
const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";

async function getLocationKeys() {
  let keys = {};
  for (let i = 0; i < talukas.length; i++) {
    const name = talukas[i];
    const res = await fetch(`${baseUrl}?apikey=${apiKey}&q=${name},IN`);
    const data = await res.json();
    if (data && data.length > 0) {
      keys[name] = data[0].Key;
    }
    await new Promise(r => setTimeout(r, 500)); // avoid rate limit
  }
  console.log(keys);
}

getLocationKeys();
