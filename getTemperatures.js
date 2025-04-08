
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

// तापमान मिळवणारी स्क्रिप्ट
const apiKey = "तुमचा_API_KEY"; // ← इथे तुमचा AccuWeather API Key टाका

async function fetchTemperatures() {
  const results = [];

  for (const taluka in locationKeys) {
    const key = locationKeys[taluka];
    const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apiKey}`);
    const data = await response.json();
    if (data && data[0]) {
      const temp = data[0].Temperature.Metric.Value;
      results.push({ taluka, temp });
    }
  }

  // टेम्परेचरच्या आधारावर sort करा – सर्वात जास्त वर
  results.sort((a, b) => b.temp - a.temp);

  // स्क्रीनवर टाकणे
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h3>🌡️ तालुक्यानुसार कमाल तापमान:</h3>";
  results.forEach(({ taluka, temp }) => {
    outputDiv.innerHTML += `<p><strong>${taluka}</strong>: ${temp}°C</p>`;
  });
}

// पेज लोड झाल्यावर कॉल करतो
window.onload = fetchTemperatures;

