const dateHead = document.querySelector(".cal-date"),
    dayHead = document.querySelector(".cal-day"),
    monthYear = document.querySelector(".cal-monthyear"),
    calBody = document.querySelector(".cal-body");

let today = new Date(),
    y = today.getFullYear(),
    m = today.getMonth(),
    date = today.getDate(),
    day = today.getDay();
    firstDay = (new Date(y, m)).getDay(),
    lastDay = 32 - new Date(y, m, 32).getDate();

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function renderCalHead() {
    dayHead.innerText = week[today.getDay()];
    dateHead.innerText = today.getDate();
    monthYear.innerText = month[today.getMonth()] + " " + today.getFullYear();
}

function renderCal(m, y) {
    // calBody.innerHTML = "";
    let date2 = 1;
    for (let i = 0; i < 6; i++){
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date2 > lastDay){
                break;
            } else {
                let cell = document.createElement("td");
                let cellText = documnet.createTextNode(date2);
            }
            cell.appendChild(cellText);
            row.appendChild(cell);
            date2++;
        }
    }
    calBody.appendChild(row);
}

function next() {
    y = (m === 11) ? y + 1 : y;
    m = (m + 1) % 12;
    renderCal(m, y);
}

function previous() {
    y = (m === 0) ? y - 1 : y;
    m = (m === 0) ? 11 : m - 1;
    renderCal(m, y);
}

init() {
    renderCal();
    renderCalHead();
    next();
    previous();
}


