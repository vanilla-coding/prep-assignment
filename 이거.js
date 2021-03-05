let today = new Date();

//오늘의 현재 요일 표기
let dayweek = today.getDay();
let week = new Array(
    "SUN",
    'MON',
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT");
let day_of_week = week[dayweek]

//오늘의 현재 날짜 표기
let dd = today.getDate();

//오늘의 현재 월 표기
let mm = today.getMonth();+1
let month = new Array(
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec");
let year_of_month = month[mm]

//오늘의 현재 연도 표기
let yyyy = today.getFullYear();

//캘린더 요일과 일 표기
document.getElementById('current-day').innerText = day_of_week;
document.getElementById('current-date').innerText = dd;

//캘린더 월/년 표기 ---------이 두개 나란하게 표시 어떻게 해야하나요?
document.getElementById('current-mon').innerText = year_of_month;
document.getElementById('current-yr').innerText = yyyy;



//달력만들기
//top = th 요일 tr = 1,2,3,4,5,week , td = day
function createCalendar(elem, year, month) {

    let mon = month - 1; // months in JS are 0..11, not 1..12
    let d = new Date(year, mon);

    let table = 
    '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';


    // spaces for the first row
    // from Monday till the first day of the month
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    // <td> //현재 월의 마지막 날짜까지 달력에 표기하기
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    
    //현재 월의 마지막 날짜까지 달력에 표기하기
    // 왜 28일까지만 표시가 되는거죠ㅜㅜ?
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td>29</td><td>30</td>';
      }
    }

    // 테이블닫기
    table += '</tr></table>';

    elem.innerHTML = table;
  }
  //현재 월의 1일이 무슨 요일인지 판별하고, 해당 요일 라벨링에 1일 표기하기

  function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
    let day = date.getDay();
    if (day == 0) day = 7; // make Sunday (0) the last day
    return day - 1;
  }

  createCalendar(calendar, yyyy, mm);










//버튼 
//---??만들기는 만들었는데 안넘어가요
//좌측 화살표를 클릭 했을때, 이전 달의 요일 및 날짜 표기
function button1_click(){
    today = new Date(yyyy, mm -1, dayweek);
}
//우측 화살표를 클릭 했을때, 다음 달의 요일 및 날짜 표기
function button2_click(){
    today = new Date(yyyy,mm+1,dayweek);
}