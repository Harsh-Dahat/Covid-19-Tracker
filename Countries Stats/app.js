const countriesUrl = "https://disease.sh/v3/covid-19/countries";

async function fetchCountries() {
  const response = await fetch(countriesUrl);
  const countries = await response.json();
  const select = document.getElementById("country-select");

  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.country;
    option.textContent = country.country;
    select.appendChild(option);
  });
}

async function fetchCountryData(country) {
  const response = await fetch(`${countriesUrl}/${country}`);
  const data = await response.json();
  document.getElementById("active").innerHTML = data.active;
  document.getElementById("total").innerHTML = data.cases;
  document.getElementById("critical").innerHTML = data.critical;
  document.getElementById("death").innerHTML = data.deaths;
  document.getElementById("recover").innerHTML = data.recovered;
  document.getElementById("test").innerHTML = data.tests;
}
document
  .getElementById("country-select")
  .addEventListener("change", (event) => {
    const country = event.target.value;
    if (country) {
      fetchCountryData(country);
    }
  });

fetchCountries();
fetchCountryData();
