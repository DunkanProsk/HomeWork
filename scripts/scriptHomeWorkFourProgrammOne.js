var globalDate = new Date();

var dateNow = globalDate.getDate(); 
var monthNow = globalDate.getMonth();
var yearNow = globalDate.getFullYear();
var dayNow = globalDate.getDay();
var hoursNow = globalDate.getHours();
var minutesNow = globalDate.getMinutes();
var secondsNow = globalDate.getSeconds();

// повторить с интервалом 2 секунды
var timerId = setInterval(() => outputConsole(), 1000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);


function outputConsole() {
	console.log(checkDeclensionMonth(monthNow) + (' ' + yearNow + ' года,') + checkDeclensionDay(dayNow));
	console.log(checkDeclensionHours(hoursNow) + ' ' + checkDeclensionMinutes(minutesNow) + ' ' + checkDeclensionSeconds(secondsNow));
}


function checkDeclensionDay(day) {
	var arrDay = [  ' Воскресенье',
	 				' Понедельник',
	  				' Вторник',
	   				' Среда',
	    			' Четверг',
	     			' Пятница',
	     			' Суббота' ];
	return arrDay[day];
}

function checkDeclensionMonth(month) {
	var arrMonth = [' Января',
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
	return 'Сегодня ' + dateNow + arrMonth[month];
}

function checkDeclensionHours(hours) {
	if((hours > 4) && (hours < 21)) {
		return hours + ' часов';
	} else if((hours == 1) || (hours == 21)) {
		return hours + ' час';
	} else {
		return hours + ' часа';
	}	
}

function checkDeclensionMinutes(minutes) {
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

function checkDeclensionSeconds(seconds) {
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
