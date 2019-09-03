
function start() {
	var x = 0;
	var randomazer = genRandomNumber();

	for(var n = 0; n < 10; n++) {
	if(n <= 8) {
		if(x !== 1) {
			i = prompt('Число');
			num(i, randomazer());
		} else {
			break;
		}
	} else {
		if(x !== 1) {
			alert('Последняя попытка');
			i = prompt('Число');
			numEnd(i, randomazer());
		} else {
			break;
		}
	}
	}

	questEnd();

	function genRandomNumber() {
		let random = 0;
		return function() {
			return random = Math.floor(Math.random() * (1000 - 0)) + 0;
		}
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

	function questEnd() {
		let quest = confirm('Хотите начать заново?');
		if(quest === true) {
			getNum();
		} else {
			alert('Хорошего дня!');
		}
	}
}
