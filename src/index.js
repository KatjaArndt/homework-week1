/*wenn select element ausgewählt wird */
let cities = document.querySelector("#cities");
function selection() {
  let selectedCity = cities.value;
  alert(selectedCity);
}
let select = cities.addEventListener("change", selection);

/*alert */

/*timezone*/
