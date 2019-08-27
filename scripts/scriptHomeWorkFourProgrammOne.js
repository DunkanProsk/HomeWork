var timerId = setInterval(() => outputConsole(), 1000);
setTimeout(() => { clearInterval(timerId); console.log('STOP'); }, 5000);

function outputConsole() {
	console.log(checkDeclensionMonth() + (' ' + checkDeclensionYear() + ' года,') + checkDeclensionDay());
	console.log(checkDeclensionHours() + ' ' + checkDeclensionMinutes() + ' ' + checkDeclensionSeconds());
}

function checkDeclensionYear() {
    let globalDate = new Date();
    let yearNow = globalDate.getFullYear();
    return yearNow;

}

function checkDeclensionDay() {
    let globalDate = new Date();
    let day = globalDate.getDay();
	let arrDay = [  ' Воскресенье',
	 				' Понедельник',
	  				' Вторник',
	   				' Среда',
	    			' Четверг',
	     			' Пятница',
	     			' Суббота' ];
	return arrDay[day];
}

function checkDeclensionMonth() {
    let globalDate = new Date();
    let month = globalDate.getMonth();
    let date = globalDate.getHours();
	let arrMonth = [' Января',
	 				' Февраля',
	  				' Марта',
	   				' Апреля',
	    			' Мая',
	     			' Июня',
	     			' Июля',
	       			' Августа',
	        		' Сентября',
	         		' Октября',
	          		' Ноября',
	           		' Девабря'];
	return 'Сегодня ' + date + arrMonth[month];
}

function checkDeclensionHours() {
    let globalDate = new Date();
    let hours = globalDate.getHours();
	if((hours > 4) && (hours < 21)) {
		return hours + ' часов';
	} else if((hours == 1) || (hours == 21)) {
		return hours + ' час';
	} else {
		return hours + ' часа';
	}	
}

function checkDeclensionMinutes() {
    let globalDate = new Date();
    let minutes = globalDate.getMinutes();
	if( (minutes == 1) ||
	   (minutes == 21) ||
	   (minutes == 31) ||
	   (minutes == 41) ||
	   (minutes == 51) ) {
		return minutes + ' минута';
	} else if( (minutes == 2) ||
			   (minutes == 3) ||
			   (minutes == 4) ||
			  (minutes == 22) ||
			  (minutes == 23) ||
			  (minutes == 24) ||
			  (minutes == 32) ||
			  (minutes == 33) ||
			  (minutes == 34) ||
			  (minutes == 42) ||
			  (minutes == 43) ||
			  (minutes == 44) ||
			  (minutes == 52) ||
			  (minutes == 53) ||
			  (minutes == 54)) {
		return minutes + ' минуты';
	} else {
		return minutes + ' минут';
	}
}

function checkDeclensionSeconds() {
    let globalDate = new Date();
    let seconds = globalDate.getSeconds();
	if( (seconds == 1) ||
	   (seconds == 21) ||
	   (seconds == 31) ||
	   (seconds == 41) ||
	   (seconds == 51) ) {
		return seconds + ' секунда';
	} else if( (seconds == 2) ||
			   (seconds == 3) ||
			   (seconds == 4) ||
			  (seconds == 22) ||
			  (seconds == 23) ||
			  (seconds == 24) ||
			  (seconds == 32) ||
			  (seconds == 33) ||
			  (seconds == 34) ||
			  (seconds == 42) ||
			  (seconds == 43) ||
			  (seconds == 44) ||
			  (seconds == 52) ||
			  (seconds == 53) ||
			  (seconds == 54)) {
		return seconds + ' секунды';
	} else {
		return seconds + ' секунд';
	}
}
