/*wenn select element ausgewählt wird */

function selection() {
  let cities = document.querySelector("#cities");
  let selectedCity = cities.options[cities.selectedIndex];
  console.log(selectedCity);
}
let select = cities.addEventListener("change", selection);

/*alert */

/*timezone*/
