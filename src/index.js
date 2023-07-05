function _updateTime(){
    //London info
    let londonElement = document.getElementById("city-London");
    if (londonElement){
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTimeInfo = moment().tz("Europe/London")
    londonDateElement.innerHTML = londonTimeInfo.format("dddd MMMM/DD/YYYY");
    londonTimeElement.innerHTML = londonTimeInfo.format("HH:mm:ss [<small>]A[</small>]");
    }

    //Hongkong info
    let HongKongElement = document.getElementById("city-Hongkong");
    if (HongKongElement){
    let HongKongDateElement = HongKongElement.querySelector(".date");
    let HongKongTimeElement = HongKongElement.querySelector(".time");
    let HongKongTimeInfo = moment().tz("Asia/Hong_Kong")
    HongKongDateElement.innerHTML = HongKongTimeInfo.format("dddd MMMM/DD/YYYY");
    HongKongTimeElement.innerHTML = HongKongTimeInfo.format("HH:mm:ss [<small>]A[</small>]");
    }
    //Hongkong info
    let BuenosAiresElement = document.getElementById("city-BuenosAires");
    if (BuenosAiresElement){
    let BuenosAiresDateElement = BuenosAiresElement.querySelector(".date");
    let BuenosAiresTimeElement = BuenosAiresElement.querySelector(".time");
    let BuenosAiresTimeInfo = moment().tz("America/Buenos_Aires")
    BuenosAiresDateElement.innerHTML = BuenosAiresTimeInfo.format("dddd MMMM/DD/YYYY");
    BuenosAiresTimeElement.innerHTML = BuenosAiresTimeInfo.format("HH:mm:ss [<small>]A[</small>]");
    }
    //show current time city and date
    let currentTimezone = moment.tz.guess();
    let currentDate = moment().tz(currentTimezone).format("dddd MMMM/DD/YYYY")
    let topTimeDisplay = document.getElementById("mainTime").innerHTML = moment().tz(currentTimezone).format("HH:mm:ss [<small>]A[</small>]")
    let topCityAndDateDisplay = document.getElementById("locationAndDate").innerHTML = `${currentTimezone}, ${currentDate}`;
}
//refresh evey one sec
// setInterval(_updateTime, 1000);
let interval = setInterval(_updateTime, 1000)

// List display
document
  .getElementById("selectCity")
  .addEventListener("change", function _selectFunction(event) {
    let selectCityName = event.target.value;
    if (selectCityName === "current-Location") {
      selectCityName = moment.tz.guess();
    }
    listCities.push(selectCityName);
    //push means add something
    let selectTimeDisplay = document.getElementById("cityListContainer");
    let addedCitiesElement = document.getElementById("addedCities");
    if (addedCitiesElement) {
      addedCitiesElement.remove();
      //remove content
    }
    let newCity = document.createElement("div");
    newCity.id = "addedCities";
    selectTimeDisplay.appendChild(newCity);
    updateAddedCities();

    clearInterval(interval);
    interval = setInterval(() => {
      _updateTime();
      updateAddedCities();
    }, 1000);
    document.getElementById("cleanBtn").innerHTML = "Clean Cities";
  });

function updateAddedCities() {
  let citiesElement = "";
  listCities.forEach((city) => {
    let cityName = city.replace("_", " ").split("/")[1];
    let cityTimeZoneName = moment().tz(city);
    citiesElement += `<div class="cityList">
            <div class="cityList-left">
                <p class="cityName">${cityName}</p>
                <p class="date">${cityTimeZoneName.format(
                  "dddd MMMM/DD/YYYY"
                )}</p>
            </div>
                <div class="cityList-right">
                <span class="time">${cityTimeZoneName.format(
                  "HH:mm:ss [<small>]A[</small>]"
                )}</span>
            </div>
        </div>
        `;
  });
  document.querySelector("#addedCities").innerHTML = citiesElement;
}

let listCities = [];