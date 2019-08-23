alert('Угадывание числа, методом - больше, меньше');

var i = prompt('Угадай число, которое я загадал');
var j = getRandomInt(0, 1000);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function num(i, j) {
	if(i === null) {
		alert('Отмена!');
	} else if(i == '') {
		alert('Пустая строка!');
	} else if(i === undefined){
		alert('Некорректные данные!');
	}else if(i > j) {
		alert('Меньше!');
		num(i = prompt('Еще попытка!'), j);
	} else if(i < j) {
		alert('Больше!');
		num(i = prompt('Еще попытка!'), j);
	} else if(i == j) {
		alert('Молодец!');
	} else {
		alert('Некорректные данные!');
	}
}

num(i, j);