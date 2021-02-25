# **Calendar**

## Description

Interactive Calendar built with html, css and javascript

### Functions

- 첫 페이지가 새로고침되면 현재 날짜(요일, 일, 월, 년)와 현재 시각에 맞는 달력이 상단에 출력됩니다. 현재 날짜는 달력에 빨간 색으로 표시했습니다.
- 캘린더 좌우에 있는 '<<','>>' 버튼을 눌러 이전, 다음 달의 달력을 볼 수 있습니다.
- 달력의 날짜를 클릭하면 색깔이 파란 색으로 바뀌면서 달력 상단에 **현재 날짜와 얼마나 차이가 있는지** 출력합니다.

### Features to make

- [x]  날짜 클릭하면 TO DO 조회/추가/수정/삭제 할 수 있도록 만들기
  - [x]  TASK 엘리먼트를 클릭하면 TASK의 내용을 수정할 수 있도록 하기
- [x]]  TASK를 등록날 날은 날짜 옆에 몇 개의 TASK가 있는지 알림 표시가 생기도록 만들기


### Refactoring

- [x]  객체 지향 패러다임 적용하기
- [x]  캘린더의 테이블의 요일(MON, TUE ...) 하드코딩하지 않고 javascript로 제어하기
- [x]  모든 함수를 익명 함수 표현식으로 재정의하기


### 새로 배운 것
- babel, webpack
- javascript class

### 아쉬운 점
- 로컬스토리지에 데이터를 저장하고 불러오는 방식을 구현하지 못했습니다.

### Commit Message Rule

- I tried to follow these([Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#commit-message-conventions)) rules.