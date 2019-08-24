alert('Угадайте число от 0 до 1000, методом - больше, меньше');
var j = getRandomInt(0, 1000);
var x = 0;

for(var n = 0; n < 5; n++) {
	if(n <= 3) {
		if(x !== 1) {
			i = prompt('Число');
			num(i, j);
		} else {
			break;
		}
	} else {
		if(x !== 1) {
			alert('Последняя попытка');
			i = prompt('Число');
			numEnd(i, j);
		} else {
			break;
		}
	}
}	

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function num(i, j) {
	if(i === null) {
		alert('Отмена!');
		return x = 1;
	} else if(i == '') {
		alert('Пустая строка!');
		return x = 1;
	} else if(i > j) {
		alert('Меньше!');
		return x = 2;
	} else if(i < j) {
		alert('Больше!');
		return x = 2;
	} else if(i == j) {
		alert('Молодец!');
		return x = 1;
	} else {
		alert('Некорректные данные!');
		return x = 1;
	}
}

function numEnd(i, j) {
	if(i === null) {
		alert('Отмена!');
		return x = 1;
	} else if(i == '') {
		alert('Пустая строка!');
		return x = 1;
	} else if(i > j) {
		alert('Неверно!');
		return x = 2;
	} else if(i < j) {
		alert('Неверно!');
		return x = 2;
	} else if(i == j) {
		alert('Молодец!');
		return x = 1;
	} else {
		alert('Некорректные данные!');
		return x = 1;
	}
}