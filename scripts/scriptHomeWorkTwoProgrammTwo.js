alert('Високосные года в диапозоне');
var yearLeapBegin = prompt('Введите год с которого начать отсчет, от 1900 до 2019');
var yearLeapEnd = prompt('Введите год которым закончить отсчет, от 1900 до 2019');
if(yearLeapBegin > yearLeapEnd) {
  alert('Первое число не может быть больше второго!');
} else if(!(yearLeapBegin >= 1900 && yearLeapBegin <= 2019)) {
  alert('Число не входит в диапозон!');
} else {
  for(yearLeapBegin; yearLeapBegin < yearLeapEnd; yearLeapBegin++) {
    if(yearLeapBegin % 4 == 0) {
      console.log(yearLeapBegin);
    }
  }
  alert('Готово! Смотрите в консоль.')
}
