const apiKey = "AmpqFspNOVCRZdhjUXtuAOCWbKwT4Ok9";

async function getTemperature(locationKey) {
  const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data[0]?.Temperature?.Metric?.Value ?? "--";
}

async function displayTemperatures() {
  const tableBody = document.getElementById("tempTable");
  tableBody.innerHTML = "";

  for (const [taluka, key] of Object.entries(locationKeys)) {
    const temp = await getTemperature(key);
    const row = `<tr><td>${taluka}</td><td>${temp} °C</td></tr>`;
    tableBody.innerHTML += row;
  }
}

displayTemperatures();
