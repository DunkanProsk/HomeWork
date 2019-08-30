alert('Какое число больше?');
var numberFirst = prompt('Введите первое число');
var numberSecond = prompt('Введите второе число');
var numFirst = Number(numberFirst);
var numSecond = Number(numberSecond);
if(numberFirst == '' || numberSecond == '') {
  alert('Пустая строка!');
} else if(numberFirst == null || numberSecond == null) {
  alert('Вы нажали отмена!');
} else if(!numberFirst.replace(/[^-0-9]/gim,'') || !numberSecond.replace(/[^-0-9]/gim,'')) {
  alert('Это не число!');
} else if(numFirst > numSecond) {
  alert('Первое число больше второго');
} else if(numFirst < numSecond) {
  alert('Второе число больше первого');
} else {
  alert('Числа равны!');
}
