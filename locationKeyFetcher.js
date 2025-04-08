const talukas = [
  "Jalgaon", "Bhusawal", "Amalner", "Chopda", "Yaval", "Raver", "Pachora", "Jamner",
  "Bodwad", "Erandol", "Parola", "Dharangaon", "Chalisgaon", "Bhadgaon", "Muktainagar"
];

const apiKey = "AmpqFspNOVCRZdhjUXtuAOCWbKwT4Ok9";

async function fetchLocationKeys() {
  for (const taluka of talukas) {
    const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${taluka}%20Jalgaon`);
    const data = await response.json();
    const key = data[0]?.Key ?? "Not found";
    console.log(`"${taluka}": "${key}",`);
  }
}

fetchLocationKeys();
