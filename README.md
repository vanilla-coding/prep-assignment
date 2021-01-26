# 프렙 사전과제 제출방법

## 1. Fork 하기

페이지 우측 상단에 Fork 버튼을 눌러주세요. (로그인 창이 뜨면 로그인해 주세요.)

<img width="1552" alt="스크린샷 2021-01-25 오후 06 46 36" src="https://user-images.githubusercontent.com/69792673/105689142-bc327800-5f3d-11eb-8058-1f0d74490f8b.png">

로그인 하신 후 다시 Fork 버튼을 누르시면 이런 화면이 뜰텐데요. 해당 계정으로 저장소를 복사해간다고 생각하시면 됩니다. 자신의 계정을 꾹 눌러주세요.

<img width="1552" alt="스크린샷 2021-01-25 오후 06 49 02" src="https://user-images.githubusercontent.com/69792673/105689395-0ca9d580-5f3e-11eb-94a9-adf0597f3e32.png">

## 2. Fork 한 저장소를 로컬에 클론하기

<img width="1552" alt="스크린샷 2021-01-25 오후 06 50 07" src="https://user-images.githubusercontent.com/69792673/105689508-2fd48500-5f3e-11eb-9aff-5cd84cba6a41.png">

아까 보던 화면과 똑같아보이지만, 왼쪽 상단에 보시면 저장소의 이름이 vanilla-coding 에서 leo-vanilla 로 변경된 것을 확인하실 수 있죠? 이제 나의 로컬(컴퓨터)로 클론을 해볼거예요.

<img width="1552" alt="스크린샷 2021-01-25 오후 06 50 52" src="https://user-images.githubusercontent.com/69792673/105689598-4ed31700-5f3e-11eb-9ced-ebc835bc3000.png">

위 그림처럼 초록색 Code 버튼을 누르시고, HTTPS가 맞는지 확인하신 뒤에 복사해주세요.

이제 Terminal(윈도우는 CMD)를 켜시고, 클론을 해볼까요?

<img width="1244" alt="스크린샷 2021-01-26 오전 10 39 32" src="https://user-images.githubusercontent.com/69792673/105788238-6ef8e980-5fc3-11eb-856f-5e15286b7c30.png">

`cd Desktop` 은 바탕화면으로 이동한다는 의미이고, 이동하신 후에는 `git clone "저장소 URL"` 을 입력해주세요. (URL 주소는 따옴표 없이 위의 그림처럼 그냥 입력하시면 됩니다.) 

<img width="1244" alt="스크린샷 2021-01-26 오전 10 39 57" src="https://user-images.githubusercontent.com/69792673/105788291-8afc8b00-5fc3-11eb-867f-f6a8286a7567.png">

자 이제 바탕화면에 `prep-assignment` 라는 폴더가 생성되었어요. 이제 과제를 시작하시고, 마무리한 과제의 파일들을 이 폴더에 넣어주세요.

## 3. 과제 하기

사전학습가이드에서 다운받은 파일들을 이용해서 과제를 해결해주세요. 모두 해결하고 난 뒤에 작성한 파일들을 바탕화면에 `prep-assignment` 폴더에 넣어주세요! (README.md 는 삭제하셔도 괜찮습니다.)

<img width="1032" alt="스크린샷 2021-01-26 오전 10 46 43" src="https://user-images.githubusercontent.com/69792673/105788401-cc8d3600-5fc3-11eb-9c49-e1e9a55f4383.png">

## 4. 과제 저장소에 업로드(푸시)하기

이제 과제를 제출해보겠습니다. 다시 Terminal이나 CMD를 켜주시고, `prep-assignment` 폴더로 이동해 주세요. (터미널에서 과제 폴더로 이동하는 법은 위에서 했던 대로 `cd Desktop`, `cd prep-assignment` 를 이용해주세요)

이제 차근차근 따라해보세요.

`git add .`  (마지막에 . 을 꼭 붙여주세요.) git에 저장할 준비를 하는 단계입니다.

`git commit -m "커밋 메시지"` 이제 저장소에 보내기 전 지금까지 작업 내용을 담아 저장해두는 과정입니다.(커밋 메시지는 " " 를 빼고 해당 자리에 메시지만 적으시면 됩니다. 아래 사진을 확인해주세요)

`git push origin master` 이제 Github 저장소로 저장하겠다는 메시지입니다.

아래 사진도 첨부했으니 확인해주세요.

<img width="1244" alt="스크린샷 2021-01-26 오전 10 53 20" src="https://user-images.githubusercontent.com/69792673/105788936-c8ade380-5fc4-11eb-9d6d-852403b37f1a.png">

## 5. 과제 제출하기

이제 다 왔어요. Github에 있는 자신의 저장소/prep-assignment 를 찾아서 들어가주세요. 

<img width="1552" alt="스크린샷 2021-01-26 오전 11 00 14" src="https://user-images.githubusercontent.com/69792673/105789466-d44dda00-5fc5-11eb-9c35-e2d3e2e406f0.png">

화면에 있는 여러 탭 중 두 번째 `Pull requests` 탭을 눌러주세요. 그리고 오른쪽에서 `New pull request` 버튼을 찾아주세요.

<img width="1552" alt="스크린샷 2021-01-26 오전 11 03 39" src="https://user-images.githubusercontent.com/69792673/105789728-4cb49b00-5fc6-11eb-9dc3-ad3ef6b63523.png">

그럼 이런 페이지가 나올건데요. 내가 올린 파일과 내가 Fork 했던 저장소를 비교하는 그런 내용입니다. 오른쪽에 `Create pull request` 를 눌러주세요.

<img width="1552" alt="스크린샷 2021-01-26 오전 11 05 14" src="https://user-images.githubusercontent.com/69792673/105791069-be8de400-5fc8-11eb-913b-8431cc4e9c08.png">

이제 제출이 눈 앞입니다! `Title`(필수), `Leave a Comment`(필수 아님) 를 입력해주시면 오른쪽 아래 `Create pull request` 버튼이 초록색으로 바뀌고 제출가능 상태가 됩니다. 이제 그 버튼을 누르고 나면...!

<img width="1552" alt="스크린샷 2021-01-26 오전 11 26 04" src="https://user-images.githubusercontent.com/69792673/105791583-b4b8b080-5fc9-11eb-8082-a2b083a0db46.png">
<img width="1552" alt="스크린샷 2021-01-26 오전 11 26 46" src="https://user-images.githubusercontent.com/69792673/105791442-7622f600-5fc9-11eb-874a-eab8f69a7801.png">
<img width="1552" alt="스크린샷 2021-01-26 오전 11 32 03" src="https://user-images.githubusercontent.com/69792673/105791956-285abd80-5fca-11eb-8747-0080e0734a52.png">

![](https://media2.giphy.com/media/eKfovWZOlOpbTDEX9F/giphy.gif)

## 제출이 완료되었습니다!

수고하셨습니다. <br/>
이제 프렙 코스가 시작되기 전까지 사전학습가이드의 [[사전학습가이드 완료 후](https://book.vanillacoding.co/starter-kit/summary/summary)] 파트를 참고하여 부족한 부분을 좀 더 학습하는 시간을 가져보세요! :) 

## 사전과제 제출 관련 이슈 발생 시
사전과제 제출 중 문제가 있다면 prep@vanillacoding.co 혹은 [바닐라코딩 채널톡](vanillacoding.channel.io) 을 이용해주세요!

항상 건강 잘 챙기시고, 곧 뵙겠습니다! :)
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
![font_logo_black](https://user-images.githubusercontent.com/69792673/105793627-cf405900-5fcc-11eb-9180-e43db8cb114e.png)








