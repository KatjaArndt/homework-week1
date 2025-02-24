let cities = document.querySelector("#cities");
let selectedCity = cities.value;
function selection() {
  let newSelectedCity = cities.value;

  let timeInTokyo = moment()
    .tz("Asia/Tokyo")
    .format("dddd, MMMM D, YYYY, h:mm A");
  let timeInParis = moment()
    .tz("Europe/Paris")
    .format("dddd, MMMM D, YYYY, h:mm A");
  let timeInSydney = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM D, YYYY, h:mm A");
  console.log(newSelectedCity);
  if (newSelectedCity === "tokyo") {
    alert("It is " + timeInTokyo + " in " + newSelectedCity);
  } else if (newSelectedCity === "paris") {
    alert("It is " + timeInParis + " in " + newSelectedCity);
  } else if (newSelectedCity === "sydney") {
    alert("It is " + timeInSydney + " in " + newSelectedCity);
  }
}

let select = cities.addEventListener("change", selection);
