const date = document.querySelector(".js-date");
const day = document.querySelector(".js-day");
const monthYear = document.querySelector(".js-monthYear");
const jsCalendar = document.querySelector(".js-calendar");
const tbody = jsCalendar.querySelector("tbody");

const leftArrow = document.querySelector(".left"),
    rightArrow = document.querySelector(".right")

const DAY = new Date();
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function nowDay() { // 요일
    date.innerText = week[DAY.getDay()];
}

function nowDate() { // 일
    day.innerText = DAY.getDate();
}

function nowMonthYear() {
    monthYear.innerText = month[DAY.getMonth()] +" "+ DAY.getFullYear();
}

function clickDate(set) {
    if (set > 0) {
        DAY.setDate(set)
        day.innerText = set;
        date.innerText = week[DAY.getDay()];
    }
}

function weekCreate() {
    const tr = document.createElement('tr');
    for (var i = 0; i < 7; i++){
        const td = document.createElement('td');
        tr.appendChild(td)
        td.setAttribute("onclick", "clickDate(this.innerText)")
    }
    tbody.appendChild(tr)
    tr.className = "tr";
    tr.setAttribute("align", "center")
}

function toDay(i, j, k) {
    if (DAY.getMonth() == new Date().getMonth()) {
        if (j == new Date().getDate()) {
            tbody.children[k].children[i].setAttribute("style", "color:red")
        }
    }
}

function calendar() {
    var days;
    var month = DAY.getMonth();
    switch (month) {
        case 0: case 2: case 4: case 6: case 7: case 9: case 11:
            days = 31;
            break;
        case 3: case 5: case 8: case 10:
            days = 30;
            break;
        case 1:
            days = 28;
            break;
    }
    DAY.setDate(1);
    var i = DAY.getDay();
    for (var k = 1, j = 1; j < days+1; k++) {
        weekCreate();
        for (; i < 7; i++, j++){
            if (j < days+1) {
                tbody.children[k].children[i].innerText = j
                toDay(i, j, k);
            } else {
                break;
            }
        }
        i = 0;
    }
}

function remove() {
    const tr = tbody.querySelector(".tr");
    tbody.removeChild(tr)
}

function thisMonth() {
    if (DAY.getMonth() == new Date().getMonth()){
        DAY.setDate(new Date().getDate())
    }
    nowDay();
    nowDate();
}

function left() {
    var left = DAY.getMonth() - 1;
    DAY.setMonth(left);
    for (var i = tbody.childElementCount; i > 1;){
        remove();
        i = tbody.childElementCount
    }
    thisMonth();
    nowMonthYear();
    calendar();
}

function right() {
    var right = DAY.getMonth() + 1;
    DAY.setMonth(right)
    for (var i = tbody.childElementCount; i > 1;){
        remove();
        i = tbody.childElementCount
    }
    thisMonth();
    nowMonthYear();
    calendar();
}

function init() {
    nowDay();
    nowDate();
    nowMonthYear();
    calendar();
    leftArrow.addEventListener("click", left);
    rightArrow.addEventListener("click", right);
}

init();