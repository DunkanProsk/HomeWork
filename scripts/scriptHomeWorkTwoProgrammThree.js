var a = 0;
for(var b = 0; a != null;) {
  a = prompt('Введите число');
  if((a != null) && ((a + 1) != NaN)) {
    if(a.toString().replace(/[^-0-9]/gim,'')) {
    b = b + Number(a);
    }
  }
}
alert(b);
