const calendarContainer = document.querySelector(".calendar-container");
const todayContainer = calendarContainer.querySelector(".current-day");
const todaysDate = todayContainer.querySelectorAll("p")[0]
const todaysDateNum = todayContainer.querySelectorAll("p")[1]
const currentMonth = calendarContainer.querySelector(".current-month");
const calendarBody = document.querySelector(".calendar-body");

//현재 날짜
let today = new Date();
let thisYear = today.getFullYear();
let nowMonth = today.getMonth();
let nowDay = today.getDay(); //요일
let nowDate = today.getDate(); //날짜

const monthEng = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekdayEng = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//const weekdayKr = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

todaysDate.innerHTML = weekdayEng[nowDay];
todaysDateNum.innerHTML = nowDate;
currentMonth.innerText = monthEng[nowMonth] + " " + thisYear;

//현재 년의 월 일 1일의 일과 요일 표시
let firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
let firstDayName = firstDay.getDay();

let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//현재월 마지막 일
let lastDay = monthDays[today.getMonth()];
//달력의 필요한 행의 갯수
let row = Math.ceil(((lastDay + firstDayName) / 7));

function printCalendar() {
    let monthCount = 1;
    let dayDefault = 1;
    let year = today.getFullYear();
    let month = today.getMonth();
    const date = new Date();

    if ((today.getFullYear() % 4 == 0 && today.getFullYear() % 100 != 0) || (today.getFullYear() % 400 == 0)) {
        monthDays[1] = 29;
    }
    for (i = 0; i < row; i++) {
        let monthTr = document.createElement("tr");
        monthTr.setAttribute("id", monthCount);
        //열 만들기 월1일 이전 + 월마지막일 이후 = 빈칸
        for (j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDayName || dayDefault > monthDays[firstDay.getMonth()])) {
                let dayTd = document.createElement("td");
                monthTr.appendChild(dayTd);
            }
            else {
                let dayTd = document.createElement("td");
                dayTd.innerText = dayDefault;
                monthTr.appendChild(dayTd);
                dayTd.setAttribute("id", dayDefault);
                dayDefault++;

                if (dayTd.innerText == date.getDate() && year == date.getFullYear() && month == date.getMonth()) {
                    dayTd.style.color = "tomato";
                    dayTd.style.backgroundColor = "yellow";
                    dayTd.style.borderRadius = "50%";
                }
            }
        }
        monthCount++;
        calendarBody.appendChild(monthTr);
    }
}


function removeCalendar() {
    let removeCount = 1;
    for (i = 1; i < 6; i++) {
        let removeTr = document.getElementById(removeCount);
        removeTr.remove()
        removeCount++;
    }
}

const nextBtn = document.querySelector(".button-next");
const prevtBtn = document.querySelector(".button-prev");

function prevMonth() {
    today = new Date(today.getFullYear(), (today.getMonth() - 1), today.getDate());

    if (today.getMonth() === 1) {
        today = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    }
    firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    firstDayName = firstDay.getDay();
    // 현재 월의 1일의 날짜 초기화 셋팅과 라벨링
    todaysDate.innerHTML = weekdayEng[firstDayName];
    todaysDateNum.innerHTML = firstDay.getDate();
    currentMonth.innerText = monthEng[today.getMonth()] + " " + today.getFullYear();
    // 달력 업데이트
    removeCalendar();
    printCalendar(today);
    handleClicked();
}


function nextMonth() {
    today = new Date(today.getFullYear(), (today.getMonth() + 1), today.getDate());

    //index settings
    if (today.getMonth() === 12) {
        today = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
    }
    firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    firstDayName = firstDay.getDay();
    // 현재 월의 1일의 날짜 초기화 셋팅과 라벨링
    todaysDate.innerHTML = weekdayEng[firstDayName];
    todaysDateNum.innerHTML = firstDay.getDate();
    currentMonth.innerText = monthEng[today.getMonth()] + " " + today.getFullYear();
    // 달력 업데이트
    removeCalendar();
    printCalendar(today);
    handleClicked();
}



//let clickedDate1 = document.getElementById(today.getDate());
//console.log(clickedDate1);
//clickedDate1.classList.toggle("") 클래사그 존재하면 제거 없으면 추가

let dateG = [];

function handleClicked() {
    let calendarDates = calendarBody.querySelectorAll("tbody td");

    for (i = 0; i < calendarDates.length; i++) {
        //dateG[i] = document.getElementById(i);
        calendarDates[i].addEventListener('click', function (event) {
            let clickedData = event.currentTarget;
            let firstDay = new Date(today.getFullYear(), today.getMonth(), clickedData.id);


            if (clickedData.id !== "") {
                todaysDateNum.innerHTML = firstDay.getDate();
                todaysDate.innerHTML = weekdayEng[firstDay.getDay()];
            }
        });

    }
}

function init() {
    printCalendar();
    nextBtn.addEventListener("click", nextMonth);
    prevtBtn.addEventListener("click", prevMonth);
    handleClicked();
}
init();





