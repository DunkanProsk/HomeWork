function User(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.regDate = this.getDate(),
    this.fullInfo = function() {
  	   return this.firstName + ' ' + this.lastName + ' ' + this.regDate;
    }
}

User.prototype.getDate = function() {
	let globalDate = new Date(); 
	let arrDay =  [ globalDate.getDate(),
					globalDate.getMonth(),
                    globalDate.getFullYear(),
                    globalDate.getHours(),
                    globalDate.getMinutes(),
                    globalDate.getSeconds() ];
    return String(arrDay[0]) + '.' +
    	   String(arrDay[1] + 1) + '.' + 
    	   String(arrDay[2]) + ' ' + 
    	   String(arrDay[3]) + ':' +
    	   String(arrDay[4]) + ':' +
    	   String(arrDay[5]);            
}

function UserList() {
    this.ArrayUserList = [];
}

UserList.prototype.getAllUsers = function() {
    for(var obj of this.ArrayUserList) {
        console.log(obj.fullInfo());
    }
}

UserList.prototype.add = function(firstName, lastName) {
    this.ArrayUserList.push(new User(firstName, lastName));   
}


var userList = new UserList();

do {    
    var fullName = prompt('Введите имя и фамилию пользователя');
    if (fullName !== null) {
        var arrFullName = fullName.split(' ');
        var firstName = arrFullName[0];
        var lastName = arrFullName[1];
        userList.add(firstName, lastName);
    }
} while (fullName !== null);

userList.getAllUsers();