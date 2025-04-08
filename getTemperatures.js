const apiKey = "AmpqFspNOVCRZdhjUXtuAOCWbKwT4Ok9"; // इथे तुमची API Key टाका

async function getTemperature(locationKey) {
  const response = await fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
  );
  const data = await response.json();
  return data[0]?.Temperature?.Metric?.Value ?? "--";
}

async function displayTemperatures() {
  const tableBody = document.getElementById("tempTable");
  tableBody.innerHTML = "";

  for (const taluka in locationKeys) {
    const key = locationKeys[taluka];
    const temp = await getTemperature(key);

    const row = document.createElement("tr");
    const talukaCell = document.createElement("td");
    const tempCell = document.createElement("td");

    talukaCell.textContent = taluka;
    tempCell.textContent = temp;

    row.appendChild(talukaCell);
    row.appendChild(tempCell);
    tableBody.appendChild(row);
  }
}

displayTemperatures();
