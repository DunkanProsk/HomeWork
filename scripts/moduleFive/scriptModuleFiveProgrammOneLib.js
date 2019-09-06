(function() {
	
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

    var randomNum = getRandomInt(0, 1000);
    var attempts = 10;
    
    window.start = function() {

    	function questionRestart() {
			var que = confirm('Хотите начать заново?');
			if(que == true) {
				randomNum = getRandomInt(0, 1000);
				start();
			} else {
				alert('Хорошего дня!');
			}
		}

    	alert('Угадайте число от 0 до 1000, методом - больше, меньше');
		let i = 0;

		do {
			i++;
			var inputNum = prompt('Введите число');

			if (inputNum === null) {
				alert('Отмена!');
				break;
			}

      		if (isNaN(parseInt(inputNum))) {
				alert('Введите число!');
			} else if (inputNum > randomNum) {
				alert('Меньше!');
			} else if (inputNum < randomNum) {
				alert('Больше!');
			} else {
				alert('Правильно!');
				questionRestart();
				break;
			}

			if (i == (attempts - 1)) {
				alert('Последняя попытка!');
			}

			if (i == attempts) {
				alert('Вы исчерпали все попытки!');
				questionRestart();
				break;
			} 
		} while((inputNum != randomNum) && (i <= attempts));
	}
})();