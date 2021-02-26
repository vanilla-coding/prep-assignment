const show = document.querySelector(".show"),
      startButton = document.querySelector(".start-btn"),
      noShow = document.querySelector(".no-show"),
      retryButton = document.querySelector(".retry-btn"),
      writeNum = document.querySelector(".write-num"),
      resultList = document.querySelector(".result-list"),
      message = document.querySelector(".message");

let tryNum = 0;

function genNum() {
   let randomNum = `${Math.floor(Math.random() * 1000)}`;

   const a = Number(randomNum.substr(0, 1));
   const b = Number(randomNum.substr(1, 1));
   const c = Number(randomNum.substr(2, 1));

   show.classList.add("no-show");
   noShow.classList.remove("no-show");

   if(randomNum.length === 1) {
      randomNum = `00${randomNum}`;
   } else if(randomNum.length === 2) {
      randomNum = `0${randomNum}`;
   } else {
      randomNum = randomNum;
   }

   function saveNum(num) {
      localStorage.setItem("Random Number", num);
   }

   if((a !== b) && (b !== c) && (c !== a)) {
      saveNum(randomNum);
   } else {
      genNum();
   }
}

function init() {
   startButton.addEventListener("click", genNum);
}

init();

function retry() {
   genNum();

   tryNum = 0;

   writeNum.value = "";

   message.innerText = "";

   writeNum.removeAttribute("readonly");

   writeNum.setAttribute("placeholder", "반드시 '세 자리' 숫자를 입력해 주세요.");

   while(resultList.hasChildNodes()) {
      resultList.removeChild(resultList.firstChild);
   }
}

function compare() {
   const userNum = writeNum.value;
   const ranNum = localStorage.getItem("Random Number");

   function fail() {
      message.innerText = `이미 10회 시도하셨습니다.\n이번 게임의 정답은 "${ranNum}"입니다.\n재시작 버튼을 눌러 새로운 정답을 맞혀주세요!`;

      writeNum.value = "입력하실 수 없습니다.";

      writeNum.setAttribute("readonly", "");
   }

   if(tryNum < 10) {
      userNum.length === 3 ? game() : reWrite()
   } else {
      fail();
   }

   function game() {
      const userNumArray = userNum.split("");
      const ranNumArray = ranNum.split("");

      let strikeNum = 0;
      let ballNum = 0;
      let outNum = 0;
      let outMessage = "이 아닙니다.";

      tryNum = tryNum + 1;

      function print(p, q, r, s) {
         const li = document.createElement("li");
         resultList.appendChild(li);
         li.innerText = `⎪${p}회차⎪ 입력한 수 : ${userNum}, 결과 : ${q}S / ${r}B / Out${s}`;
      }

      function correct() {
         message.innerText = "👏👏👏 정답입니다 👏👏👏";

         writeNum.setAttribute("readonly", "");

         writeNum.setAttribute("placeholder", "");
      }

      function strike() {
         for(var i = 0; i < ranNumArray.length; i++) {
            if(userNumArray[i] == ranNumArray[i]) {
               strikeNum += 1;
            }
         }
      }

      function ball() {
         for(var i = 0; i < ranNumArray.length; i++) {
            userNumArray.filter(function(x) {
               if(x == ranNumArray[i]){
                  ballNum += 1;
               }
            });
         }
         ballNum = ballNum - strikeNum;
      }

      function out() {
         userNumArray.filter(function(x) {
            if((x !== ranNumArray[0]) && (x !== ranNumArray[1]) && (x !== ranNumArray[2])) {
               outNum += 1;
            }
         })
         if(outNum === 3) {
            outMessage = "입니다."
         } else {

         }
      }

      strike();
      ball();
      out();

      print(tryNum, strikeNum, ballNum, outMessage);

      writeNum.value = "";

      if(strikeNum === 3) {
         correct();
      }
   }

   function reWrite() {
      alert("입력하신 수의 자릿수를 확인해 주세요.");
   }
}