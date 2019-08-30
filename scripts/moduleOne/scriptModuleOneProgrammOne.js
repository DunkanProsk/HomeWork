alert('Приветствие');
var today = new Date();
var year = today.getUTCFullYear();
var yourName = prompt('Как вас зовут?');
var yourLastName = prompt('Ваша фамилия?');
var yearOfBirth = prompt('Год рождения');
var oldYear = (year - yearOfBirth);
if(yearOfBirth == '' || yourName == '' || yourLastName == '') {
  alert('Пустая строка!');
} else if(oldYear == null || yourName == null || yourLastName == null) {
  alert('Вы нажали отмена!');
} else if(!oldYear.toString().replace( /[^-0-9]/gim,'')) {
  alert('Это не число!');
} else if(oldYear < 18) {
  alert('Привет, ' + yourLastName + ' ' + yourName + '!');
} else {
  alert('Здравствуйте, ' + yourLastName + ' ' + yourName + '!');
}
