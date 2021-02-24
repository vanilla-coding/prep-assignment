var body = document.body;
var number = [];
var inputNumberArr = [];
var wrongCount = 0;

function randomNumberGenerlator()
{
  var index = 0;
  while (index < 3)
  {
    number[index] = Math.floor(Math.random() * 10) + "";

    var IsDuplicate = false;

    for (i = 0; i < index; i++)
    {
      if (number[index] === number[i])
      {
        IsDuplicate = true;
        break;
      }
    }

    if (!IsDuplicate)
    {
      index++;
    }
  }
  wrongCount = 0;
}

randomNumberGenerlator();


var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
input.type = 'text';
input.maxLength = 3;
form.append(input);
var button = document.createElement('button');
button.textContent = 'Input';
form.append(button);


form.addEventListener("submit", function(event)
{
  event.preventDefault();
  if (input.value * 1 < 100)
  {
    alert("세자리 수를 입력하세요.");
  }
  else
  {
    var inputNumber = input.value;
    if (inputNumber === number.join(''))
    {
      result.textContent = "정답";
      input.value = '';
      input.focus();
      randomNumberGenerlator();
    }
    else
    {
      inputNumberArr = inputNumber.split('');
      var strike = 0;
      var ball = 0;
      wrongCount++;

      if (wrongCount > 10)
      {
        result.textContent = '실패! 정답 : ' + number;
        input.value = '';
        input.focus();
      }
      else
      {
        for (i = 0; i < 3; i++)
        {
          for (j = 0; j < 3; j++)
          {
            if (number[i] === inputNumberArr[j])
            {
              if (i === j)
              {
                strike++;
              }
              else
              {
                ball++;
              }
            }
          }
        }
        result.textContent = 'Strike : ' + strike + ' Ball : ' + ball;
        input.value = '';
        input.focus();
      }
    }
}
});