var timerId = setInterval(() => outputConsole(), 1000);
setTimeout(() => { clearInterval(timerId); console.log('STOP'); }, 5000);

function outputConsole() {
	console.log(checkMonth() + (' ' + getDate(1) + ' года,') + checkDay());
	console.log(getDate(3) + checkTime(getDate(3), [' час', ' часа', ' часов']) + ' ' +
                getDate(4) + checkTime(getDate(4), [' минута', ' минуты', ' минут']) + ' ' +
                getDate(5) + checkTime(getDate(5), [' секунда', ' секунды', ' секунд']));
}

function getDate(x){
    let globalDate = new Date(); 
    let arrDay =  [ globalDate.getMonth(),
                    globalDate.getFullYear(),
                    globalDate.getDate(),
                    globalDate.getHours(),
                    globalDate.getMinutes(),
                    globalDate.getSeconds(),
                    globalDate.getDay() ];

    return arrDay[x];            
}

function checkDay() {
	let arrDay = [  ' Воскресенье',
	 				' Понедельник',
	  				' Вторник',
	   				' Среда',
	    			' Четверг',
	     			' Пятница',
	     			' Суббота' ];
	return arrDay[getDate(6)];
}

function checkMonth() {
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
	return 'Сегодня ' + getDate(2) + arrMonth[getDate(0)];
}

function checkTime(n, titles) {
    let globalDate = new Date();
    return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
}
