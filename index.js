const today = document.querySelector("#today");
const calendar = document.querySelector("#calendar");
const calendar2 = document.querySelector("#calendar2");
const button = document.querySelectorAll("button");
const before = document.querySelector("#before");
const after = document.querySelector("#after");

let now = new Date(), y = now.getFullYear(), m = now.getMonth(), d = now.getDate();

function getLastday(y, m) {
    var lastDay;
    switch(m+1) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            lastDay = 31;
            break;
        case 4: case 6: case 9: case 11 :
            lastDay = 30;
            break;
        case 2:
            lastDay = ((y %4 === 0 && y %100 !== 0) || y %400 === 0) ? 29: 28;
    }
    return lastDay
}

function paintToday() {
    const nowStr = now.toDateString();
    const nowArr = nowStr.split(" ");
    const toDay = nowArr[0];
    const toMonth = nowArr[1];
    const toDate = nowArr[2];
    const toYear = nowArr[3];

    const today1 = document.createElement("h2");
    today1.id = "day";
    const today2 = document.createElement("h2");
    today2.id = "date";
    const today3 = document.createElement("h3");
    today3.id = "YnM";

    today1.innerText = toDay.toUpperCase();
    today2.innerText = (toDate[0] === "0") ? toDate[1] : toDate;
    today3.innerText = `${toMonth} ${toYear}`
    today.appendChild(today1);
    today.appendChild(today2);
    today.appendChild(today3);

    paintCalendar(y, m);
}

function paintCalendar(year, month) {
    const days = ["SUN", "MON","TUE","WED","THU","FRI","SAT"];
    days.forEach(function (i){
        const addDiv = document.createElement("div");
        const addDiv2 = document.createElement("div")        
        addDiv.classList.add("days");
        addDiv2.classList.add("days")
        addDiv2.id = i;
        const day = document.createElement("h4");
        day.innerText = i;
        addDiv.appendChild(day);
        calendar.appendChild(addDiv);
        calendar2.appendChild(addDiv2);
    })

    const lastDay = getLastday(year, month);

    const firstDate = new Date(year, month, 1);
    const firstDay = firstDate.getDay();

    if (firstDay !== 0) {
        for (var i = 0; i < firstDay; i++) {
            var space = calendar2.querySelector(`#${days[i]}`);
            var blank = document.createElement("br");
            space.appendChild(blank);
        }
    }

    for (var i = 1; i <= lastDay; i++) {        
        var day = new Date(year, month, i);
        var start = calendar2.querySelector(`#${days[day.getDay()]}`);
        var date = document.createElement("button");
        date.addEventListener("click", paintClicked);
        date.innerText = day.getDate();
        start.appendChild(date);
    }
}

function paintClicked() {
    const dd = (this.innerText !== undefined) ? this.innerText: d;
    const clickedDate = new Date(y, m, dd);
    const Str = clickedDate.toDateString();
    const Arr = Str.split(" ");
    const toDay = Arr[0];
    const toMonth = Arr[1];
    const toDate = Arr[2];
    const toYear = Arr[3];

    const today1 = today.querySelector("#day");
    const today2 = today.querySelector("#date");
    const today3 = today.querySelector("#YnM");

    today1.innerText = toDay.toUpperCase();
    today2.innerText = (toDate[0] === "0") ? toDate[1] : toDate;
    today3.innerText = `${toMonth} ${toYear}`
}

function clearCalendar() {
        while (calendar.firstChild !== null){
        calendar.removeChild(calendar.firstChild);
    }
    while (calendar2.firstChild !== null){
        calendar2.removeChild(calendar2.firstChild);
    }   
    while (today.firstChild !== null) {
        today.removeChild(today.firstChild);
    }
}

function goAfter(){
    if(m === 11){
        y += 1;
        m = 0;
    } else {
        m += 1;
    }

    now = new Date(y, m);
    clearCalendar();
    paintToday();
}

function goBefore(){
    if(m === 0){
        y -= 1;
        m = 11;
    } else {
        m -= 1;
    }

    now = new Date(y, m)
    clearCalendar();
    paintToday();
}

function init() {
    paintToday();
    after.addEventListener("click", goAfter);
    before.addEventListener("click", goBefore);
}

init();