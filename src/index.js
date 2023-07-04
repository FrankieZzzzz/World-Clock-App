
function _updateTime(){
    //London info
    let londonElement = document.getElementById("city-London");
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTimeInfo = moment().tz("Europe/London")
    londonDateElement.innerHTML = londonTimeInfo.format("dddd MMMM/DD/YYYY");
    londonTimeElement.innerHTML = londonTimeInfo.format("HH:mm:ss [<small>]A[</small>]");

    //Beijing info
    let HongKongElement = document.getElementById("city-Hongkong");
    let HongKongDateElement = HongKongElement.querySelector(".date");
    let HongKongTimeElement = HongKongElement.querySelector(".time");
    let HongKongTimeInfo = moment().tz("Asia/Hong_Kong")
    HongKongDateElement.innerHTML = HongKongTimeInfo.format("dddd MMMM/DD/YYYY");
    HongKongTimeElement.innerHTML = HongKongTimeInfo.format("HH:mm:ss [<small>]A[</small>]");
}
setInterval(_updateTime, 1000)