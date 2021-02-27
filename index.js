console.log('hello, vanilla.');
const days = [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT'
];
const MONTHS = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
];
//죄송합니다..ㅠ_ㅠ 이부분은 잘 모르겠어요..ㅠㅠ//
function print_calendar(date){ 
    var real_now = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();



} 
function today(date){
    document.getElementById('Day_Date').innerText = days[date.getDay()] + '\n' + date.getDate();
    document.getElementById('Month_Year').innerText = MONTHS[date.getMonth()] + ' ' + date.getFullYear();
}

var date = new Date();
today(date);
//print_calendar(date);