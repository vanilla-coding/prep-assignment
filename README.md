# **Calendar**

**→ [github page](https://sounmind.github.io/prep-assignment/src/index.html)**

## 간단한 설명

각 날짜마다 할 일 목록을 조회/추가/수정/삭제 할 수 있는 캘린더입니다.

### 구현한 기능 목록

- 캘린더 기능
    - 최상단에 현재 날짜(요일, 일, 월 년)를 보여줍니다.
    - 현재 날짜에 해당하는 달력을 보여줍니다.
    - 달력 좌 우의 이동 버튼('<<','>>')을 누르면 이전 달과 다음 달의 달력을 볼 수 있습니다.
    - 달력의 **날짜를 클릭하면** **달력 상단에 현재 날짜와 얼마나 차이가 있는지** 출력합니다.
- 할 일 목록 기능
    - 달력의 **날짜를 클릭하면** 해당 날짜의 글자가 **파란색**으로 변하고, 해당 날짜에 할 일을 추가할 수 있는 **보드**를 캘린더 하단에서 볼 수 있습니다.
    - ADD 버튼을 누르면 할 일을 추가할 수 있는 폼이 나타나고 SUBMIT을 누르면 할 일이 보드에 등록됩니다.
    - 할 일은 상태, 내용, 버튼(업데이트, 삭제)를 갖습니다.
        - 상태 버튼 또는 업데이트 **버튼을 누르면 상태 버튼이 변화**(TODO → DOING → DONE)하며 **색깔**도 바뀝니다. TODO, DOING, DONE 순서로 할 일이 변경될 때마다 **정렬**됩니다.
        - **할 일의 텍스트를 클릭하면** input 엘리먼트가 생성됩니다. 그 안에 새로운 내용을 작성하고 엔터(enter)를 누르면 해당 할 일의 **내용을 수정**할 수 있습니다.
    - **할 일을 작성한 뒤**, 다른 날짜로 넘어가거나, 달력을 이동했다가 다시 해당 날짜로 돌아오면, 달력의 해당 날짜 **우측 상단에** 작은 글씨로 몇 개의 할 일이 있는지 **동그라미에 숫자**가 생깁니다.

## 소스 코드 구조

```
│
├─ 📁dist/js
└─ 📁src
	├─  📁css
	│   ├─ reset.css
	│   └─ style.css
	├─  📁images
	├─  📁js
	│   ├─ 📁board
	│   │  ├─ boardEventHandler.js
	│   │  ├─ Status.js
	│   │  └─ Task.js
	│   ├─ 📁calendar
	│   │  ├─ CalendarController.js
	│   │  ├─ calendarEventHandler.js
	│   │  ├─ CalendarViewer.js
	│   │  ├─ DateOfCalendar.js
	│   │  ├─ day.js
	│   │  ├─ Month.js
	│   │  ├─ Now.js
	│   │  ├─ SelectedDate.js
	│   │  ├─ Year.js
	│   │  └─ YearRepository.js
	│   ├─ element.js
	│   └─ index.js
	└─  index.html 
```

- `src/js` 폴더 안의 자바스크립트 소스 코드는 `babel`에 의해 트랜스파일 되고 `webpack`에 의해 합쳐져 `dist/js/bundle.js`가 됩니다. 이 프로젝트의 `src/index.html`은 이 `bundle.js`를 외부 스크립트 파일로 불러옵니다.

## 소스코드 간단한 설명

### src/board

- `DateOfCalendar` 객체에 의해 만들어져 프로퍼티가 되는 `Task`(할 일) 객체는 내부 프로퍼티로 `Status`(상태) 객체를 가집니다.

### src/calendar

- `index.js`에서 `CalendarController` 클래스의 인스턴스를 생성하면서 캘린더 프로그램이 시작됩니다.
- `CalendarController`는 `CalendarViewer`에게 캘린더를 출력하라고 요청합니다.
- `CalendarViewer`는 캘린더를 출력할 때 `YearRepository`에 현재 날짜가 속한 새로운 `Year`를 만들도록 요청합니다. `Year`는 생성될 때 `Month`를 생성해 내부에 저장하고, 각 `Month`는 생성될 때 `DateOfCalendar`를 생성해 내부 프로퍼티로 저장합니다.
- `CalendarViewer`는 이렇게 생성된 날짜 객체들에서 정보를 얻어 캘린더를 출력합니다.

## 배운 것과 아쉬운 점

### **새로 배운 것**

- [**코어 자바스크립트](http://www.yes24.com/Product/Goods/78586788), 클로저**

    프로젝트를 제출하고 나서 책 코어 자바스크립트를 읽었습니다. ES6 문법을 더 잘 이해하고 잘 사용하기 위한 ES5의 핵심들이 담긴 책이었습니다. 거기에 가장 유용하게 활용한 것은 이벤트리스너의 콜백 함수에서 외부 변수를 참조할 수 있도록 하는 클로저였습니다. 캘린더의 날짜 엘리먼트에 그 날짜에 해당하는 날짜 객체를 참조시켜 동작하도록 구현하는데 도움이 됐습니다.

- **babel, webpack**

    자바스크립트 클래스 문법을 사용해 프로그램을 객체지향 패러다임을 적용해 작성하고 싶었습니다. 그래서 ES6 문법을 사용해보려 했는데 node.js 환경에서 돌아가지 않아 babel와 webpack을 이용해 트랜스파일을 해봤습니다.

- **javascript class**

    java의 클래스 문법만 알고 있었는데, 객체지향적으로 프로그램을 작성하기 위해 javascript class 문법을 배웠습니다. private, public 프로퍼티를 ES6 구분하고 싶어 babel 플러그인을 추가해 트랜스파일을 했습니다.

### **아쉬운 점**

- **어색한 객체 지향 설계**

    제대로 객체 지향 설계를 한 것인지 피드백을 받지 않아 모르겠습니다. 구현하기에 급급해 SOLID 객체 지향 원칙, 상속 등 다양한 객체 지향 개념을 적용하지 못해 아쉬웠습니다.

- **테스트 코드 작성하려 시도했으나 실패**

    [javascript-koans](https://github.com/mrdavidlaing/javascript-koans)를 실습해보고, 이 프로젝트에 테스트 코드를 작성하며 개발하고 싶었습니다. 하지만 JEST, CYPRESS 등 테스트 코드 문법이 익숙하지 않았고, DOM 정보를 어떻게 가져와서 비교하는데 어려움이 있었습니다. 그래서 익숙한 방식대로 프로그램을 구현했습니다. 하지만 새로운 도전을 하지 않았기에 아쉬웠습니다. 다음 프로젝트에는 꼭 테스트 코드를 작성할 것입니다.

- **로컬스토리지에 데이터를 저장하고 불러오는 방식을 구현하지 않음.**

    새로고침을 했을 때 모든 데이터가 초기화되는 것은 이 프로젝트의 단점입니다. 저는 각 날짜 객체의 저장소에 할 일들을 저장하고 매번 불러오는 방식으로 구현했었습니다. 하지만 제한 시간내에 제대로 작동하는 로컬 스토리지 저장, 불러오기 로직을 구현하지 못할 것 같아 구현하지 않았습니다.

- 현재 node 버전이 업그레이드 되어 [트랜스파일 도구 없이 자체적으로 ES 모듈을 사용](https://www.daleseo.com/js-node-es-modules/)할 수 있다고 하는데, babel을 사용하는 옛날 방식(?)을 사용하게 되어 아쉬웠습니다.
- **불규칙적인 커밋 메시지**

    커밋메시지가 이전(객체지향 적용하기 이전)에 비해 촘촘하지 않고 엉성합니다. 커밋 로그를 보고 개발 역사를 구분하고 싶었는데 이미 전체적으로 객체지향 구조화가 이뤄진 상태에서 커밋을 하게 되어 진행 과정이 생략되어 이후 보기에 불편할 것 같습니다.

- **크로스 브라우징**

    CSS도 SCSS/SASS를 활용해 모든 웹 환경 또는 모바일 환경에서도 정상 작동하도록 보여주고 싶었으나 하지 못했습니다. 

### 커밋 메시지

- [AngularJS의 커밋 메시지 컨벤션](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)을 따르려 노력했습니다.

### 추가 작업
- 화면
  - [x] 할 일(task)을 추가/삭제할 때 즉시 캘린더 해당 날짜에 변화가 반영된 알림 심볼 생기도록 하기
  - [x] 할 일 내용이 범위를 벗어날 때 아래로 줄바뀜되도록 하기
  - [x] 예외 처리: 할 일 내용이 공백일 경우 경고창 띄우고 입력되지 않도록 하기
- 구현
  - [ ] 로컬 스토리지에 데이터 저장하기
  - [ ] 전달된 값이 유효한지 내부적으로 확인하는 코드 작성하기
- 네이밍
  - [x] 엘리먼트 변수 이름 앞에 $ 붙이기
  - [ ] 변수 이름 일관성 있게 바꾸기
    - [x] dateObject와 dateNumber 구분하기
  - [ ] 값 할당을 하드코딩 하지 않고 상수화 시키기
- 시멘틱 웹
  - [ ] html img 에 alt 값 넣기
  - [ ] h1, h2, h3 순서대로 배치하기. h1은 페이지 당 하나만 사용하기
- [ ] 페이지 시연 영상 readme에 삽입하기
- 객체 지향 원칙 더 잘 적용하기
  - [x] 클래스 나누기 (확장성과 향후 유지보수를 고려하기)
  - [ ] 클래스 내부의 쓸데 없는 메서드 없애기

