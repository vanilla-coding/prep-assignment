console.log("hello, vanilla.");
const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

document.querySelector('.month-year').textContent = `${viewMonth + 1}\n${viewYear} `;

//이번달을 불러올때 해당 달을 숫자가 아닌 영문 줄임말로 대체 하는 구문 난관.
//var monthList = ['JAM','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];


//function solution(monthList) {
    //for (let i = 0; i <= monthlist.length; i++) {
        //if (monthlist[i] === 'Kim')
        //return `${i}`
//    }
//}
//날짜 가져오기
const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

const dates = prevDates.concat(thisDates, nextDates);
dates.forEach((date, i) => {
  dates[i] = `<div class="date">${date}</div>`;
})

document.querySelector('.dates').innerHTML = dates.join('');
