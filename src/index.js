/*wenn select element ausgewählt wird */
/*let cities = document.querySelector("#cities");
function selection() {
  let selectedCity = cities.value;
  alert(selectedCity);
}
let select = cities.addEventListener("change", selection);*/

let cities = document.querySelector("#cities");
let selectedCity = cities.value;
function selection() {
  let newSelectedCity = cities.value;
  let timeInNewSelectedCity = moment().format("dddd, MMMM D, YYYY, h:mm A");
  alert("It is " + timeInNewSelectedCity + " in " + newSelectedCity);
}

let select = cities.addEventListener("change", selection);
/*alert */

/*timezone*/
