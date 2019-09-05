(function() {
 
    var n = 0;
    var x = 0;
    var j = getRandomInt(0, 1000);
    
    window.start = function() {
    	let i = 0;
        if(n == 10) {
            return;
        }
        n++;
        
		if(n <= 9) {
			if(x !== 1) {
				i = prompt('Число');
				num(i, j);
				start();
			} else {
				questEnd();
			}
		} else if(x !== 1) {
				alert('Последняя попытка');
				i = prompt('Число');
				numEnd(i, j);
				start();
			} else {
				questEnd();
			}		
	}	

    function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	function cheakAttempt() {
	  	let attemp = 0;
		return function() {
		    ++attemp;
		    return attemp;
		};
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
			i = 0;
			x = 0;
			n = 0;
			j = getRandomInt(0, 1000);
			start();
		} else {
			alert('Хорошего дня!');
		}
	}

})();