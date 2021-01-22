var DAYS = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT'
];

var MONTHS = [
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

var calendarDates = document.querySelectorAll('tbody td');
var currentDay = document.querySelectorAll('.current-day p');
var displayedMonth;
var displayedYear;
var selectedDateString;

function displayCalendar(today) {
  displayedMonth = today.getMonth();
  displayedYear = today.getFullYear();

  if (displayedMonth !== nowMonth || displayedYear !== nowYear) {
    today.setDate(1);
  }

  var date = today.getDate();
  var day = today.getDay();

  var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  var currentMonth = document.querySelector('.current-month');

  currentMonth.textContent = MONTHS[displayedMonth] + ' ' + displayedYear;

  var dayIndex = day;

  if (displayedMonth === nowMonth && displayedYear === nowYear) {
    currentDay[0].textContent = DAYS[nowDay];
    currentDay[1].textContent = nowDate;
  } else {
    currentDay[0].textContent = DAYS[day];
    currentDay[1].textContent = 1;
  }

  for (var i = 0; i < calendarDates.length; i++) {
    calendarDates[i].textContent = '';
  }

  for (var i = 1; i <= lastDate; i++) {
    calendarDates[dayIndex].textContent = i;
    calendarDates[dayIndex].style.color = 'black';

    if (i === date && displayedYear === nowYear && displayedMonth === nowMonth) {
      calendarDates[dayIndex].style.color = 'red';
    }

    updateSelectedDay(dayIndex, day);

    dayIndex++;
  }
}

function updateSelectedDay (currentIndex, firstDay) {
  calendarDates[currentIndex].addEventListener('click', function (ev) {
    if (!ev.target.textContent) {
      return;
    }

    if (currentIndex < 7) {
      currentDay[0].textContent = DAYS[currentIndex];
    } else {
      currentDay[0].textContent = DAYS[currentIndex % 7];
    }

    var selectedDate = currentIndex - firstDay + 1;
    currentDay[1].textContent = selectedDate;

    selectedDateString = displayedYear + '-' + (displayedMonth + 1) + '-' + selectedDate;
    showTodoList();
  });
}

var TODO_LIST = {};
var todoId = 0;
var todoInput = document.querySelector('.todo-input input');
var todoListElement = document.querySelector('.todo-list ul');

todoInput.addEventListener('change', function (ev) {
  var todoList = TODO_LIST[selectedDateString];

  if (!todoList) {
    TODO_LIST[selectedDateString] = [];
    todoList = TODO_LIST[selectedDateString];
  }

  todoList.push({
    id: todoId,
    text: ev.target.value,
    completed: false
  });

  var incompletedCount = 0;

  for (var i = 0; i < todoList.length; i++) {
    if (!todoList[i].completed) {
      incompletedCount++;
    }
  }

  itemCount.textContent = `${incompletedCount} items left`;

  (function (date, id) {
    var todo = document.createElement('li');
    var html = `
    <div data-id="${todoId}">
      <p>${ev.target.value}</p>
      <span>X</span>
    </div>
  `;
    todo.innerHTML = html;

    todo.addEventListener('click', function toggleStatus() {
      var todoList = TODO_LIST[date];
      var todoData = todoList.find(function (item) {
        return item.id === id;
      });

      todoData.completed = !todoData.completed;

      var incompletedCount = 0;

      for (var j = 0; j < todoList.length; j++) {
        if (!todoList[j].completed) {
          incompletedCount++;
        }
      }

      itemCount.textContent = `${incompletedCount} items left`;

      if (todoData.completed) {
        todo.classList.add('done');
      } else {
        todo.classList.remove('done');
      }
    });

    var deleteTodoButton = todo.querySelector('span');
    deleteTodoButton.addEventListener('click', function (ev) {
      ev.stopPropagation();

      var todoList = TODO_LIST[date];
      var todoData = todoList.find(function (item) {
        return item.id === id;
      });
      var index = todoList.indexOf(todoData);
      todoList.splice(index, 1);
      showTodoList();
    });

    todoListElement.appendChild(todo);
  })(selectedDateString, todoId);

  ev.target.value = '';

  todoId++;
});

var todoFooter = document.querySelector('.todo-footer');
var itemCount = todoFooter.querySelector('p');
var todoFilter = todoFooter.querySelector('ul').children;
var clear = todoFooter.querySelectorAll('p')[1];

clear.addEventListener('click', function () {
  delete TODO_LIST[selectedDateString];
  itemCount.textContent = 'No items left';
  todoListElement.innerHTML = '';
});

for (var j = 0; j < todoFilter.length; j++) {
  todoFilter[j].addEventListener('click', function (ev) {
    var filter = ev.target.textContent.toLowerCase();
    showTodoList(filter);
  });
}

function showTodoList (status) {
  if (!status) {
    status = 'all';
  }

  var todoList = TODO_LIST[selectedDateString];

  todoListElement.innerHTML = '';

  if (!todoList || !todoList.length) {
    itemCount.textContent = 'No items left';
    return;
  }

  var incompletedCount = 0;

  for (var j = 0; j < todoList.length; j++) {
    if (!todoList[j].completed) {
      incompletedCount++;
    }
  }

  itemCount.textContent = `${incompletedCount} items left`;

  var html = '';

  for (var i = 0; i < todoList.length; i++) {
    var isCompleted = todoList[i].completed;

    if (status === 'all') {
      html += `
        <li class="${isCompleted ? 'done' : ''}">
          <div data-id="${todoList[i].id}">
            <p>${todoList[i].text}</p>
            <span>X</span>
          </div>
        </li>
      `;
    } else if (status === 'completed' && isCompleted) {
      html += `
        <li class="done">
          <div data-id="${todoList[i].id}">
            <p>${todoList[i].text}</p>
            <span>X</span>
          </div>
        </li>
      `;
    } else if (status === 'active' && !isCompleted) {
      html += `
        <li>
          <div data-id="${todoList[i].id}">
            <p>${todoList[i].text}</p>
            <span>X</span>
          </div>
        </li>
      `;
    }
  }

  todoListElement.innerHTML = html;

  for (var i = 0; i < todoListElement.children.length; i++) {
    (function (date) {
      var todo = todoListElement.children[i].querySelector('div');
      var id = Number(todo.dataset.id);

      todo.addEventListener('click', function toggleStatus() {
        var todoList = TODO_LIST[date];
        var todoData = todoList.find(function (item) {
          return item.id === id;
        });

        todoData.completed = !todoData.completed;

        var incompletedCount = 0;

        for (var j = 0; j < todoList.length; j++) {
          if (!todoList[j].completed) {
            incompletedCount++;
          }
        }

        itemCount.textContent = `${incompletedCount} items left`;

        if (todoData.completed) {
          todo.parentElement.classList.add('done');
        } else {
          todo.parentElement.classList.remove('done');
        }
      });

      var deleteTodoButton = todo.querySelector('span');
      deleteTodoButton.addEventListener('click', function (ev) {
        ev.stopPropagation();

        var todoList = TODO_LIST[date];
        var todoData = todoList.find(function (item) {
          return item.id === id;
        });
        var index = todoList.indexOf(todoData);
        todoList.splice(index, 1);
        showTodoList();
      });
    })(selectedDateString);
  }
}

var prevButton = document.querySelector('.button.prev');
var nextButton = document.querySelector('.button.next');

prevButton.addEventListener('click', function () {
  var currentMonth = d.getMonth();
  d.setMonth(currentMonth - 1);

  if (d.getMonth() === nowMonth && d.getFullYear() === nowYear) {
    d = new Date();
  }

  displayCalendar(d);
});

nextButton.addEventListener('click', function () {
  var currentMonth = d.getMonth();
  d.setMonth(currentMonth + 1);

  if (d.getMonth() === nowMonth && d.getFullYear() === nowYear) {
    d = new Date();
  }

  displayCalendar(d);
});

var d = new Date();
var nowYear = d.getFullYear();
var nowMonth = d.getMonth();
var nowDate = d.getDate();
var nowDay = d.getDay();

selectedDateString = nowYear + '-' + (nowMonth + 1) + '-' + nowDate;
displayCalendar(d);
