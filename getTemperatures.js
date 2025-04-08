
// Fetch current temperature for each location key
const fetch = require('node-fetch');

const locationKeys = {
  "Jalgaon": "PLACEHOLDER_KEY", "Bhusawal": "PLACEHOLDER_KEY",
  "Amalner": "PLACEHOLDER_KEY", "Chopda": "PLACEHOLDER_KEY",
  "Yaval": "PLACEHOLDER_KEY", "Raver": "PLACEHOLDER_KEY",
  "Pachora": "PLACEHOLDER_KEY", "Jamner": "PLACEHOLDER_KEY",
  "Bodwad": "PLACEHOLDER_KEY", "Erandol": "PLACEHOLDER_KEY",
  "Parola": "PLACEHOLDER_KEY", "Dharangaon": "PLACEHOLDER_KEY",
  "Chalisgaon": "PLACEHOLDER_KEY", "Bhadgaon": "PLACEHOLDER_KEY",
  "Muktainagar": "PLACEHOLDER_KEY"
};

const apiKey = "AmpqFspNOVCRZdhjUXtuAOCWbKwT4Ok9";

async function getTemperatures() {
  let results = [];
  for (const [taluka, key] of Object.entries(locationKeys)) {
    const res = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apiKey}`);
    const data = await res.json();
    if (data && data[0]) {
      results.push({ taluka, temperature: data[0].Temperature.Metric.Value });
    }
  }
  results.sort((a, b) => b.temperature - a.temperature); // sort descending
  console.log(results);
}

getTemperatures();
