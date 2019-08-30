var users = [
	admin = {
		name: 'Aдминистратор',
		login: 'admin',
		password: 'admin',
		getName: function(){
			return 'Здравствуйте, ' + this.name + '!'; 
		}
	},
	alex = {
		name: 'Александр',
		login: 'alex',
		password: 'alex',
		getName: function(){
			return 'Привет, ' + this.name + '!'; 
		}
	},
	roma = {
		name: 'Роман',
		login: 'roma',
		password: 'roma',
		getName: function(){
			return 'Добрый день, ' + this.name + '!'; 
		}
	}
]


var loginUser = prompt('Введите логин');
var passwordUser = prompt('Введите пароль');

alert(checkUsers());

function checkUsers() {
	for(loginUser in users) {
		if(passwordUser == users[loginUser].password) {
			return users[loginUser].getName();
		}
	}
	return 'Ошибка авторизации!';
}
