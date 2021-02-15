const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");


function getTime() {
    const nowTime = new Date();
    const minutes = nowTime.getMinutes();
    const hours = nowTime.getHours();
    const seconds = nowTime.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime()
    setInterval(getTime, 1000);
}


init();

//if (calendarDates[i].classList.contians("clicked")) {
  //  clickedData.classList.remove('clicked');/
//}