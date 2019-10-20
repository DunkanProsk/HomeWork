function User(firstName, lastName){
  this.firstName = firstName,
  this.lastName = lastName,
  this.regDate = getDate()
}

function getDate(){
	let globalDate = new Date(); 
	let arrDay =  [ globalDate.getDate(),
					globalDate.getMonth(),
                    globalDate.getFullYear(),
                    globalDate.getHours(),
                    globalDate.getMinutes(),
                    globalDate.getSeconds() ];
    return String(arrDay[0]) + '.' +
    	   String(arrDay[1]) + '.' + 
    	   String(arrDay[2]) + ' ' + 
    	   String(arrDay[3]) + ':' +
    	   String(arrDay[4]) + ':' +
    	   String(arrDay[5]);            
}

console.log(getDate());