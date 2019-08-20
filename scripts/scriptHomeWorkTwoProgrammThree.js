var a = 0;
for(var b = 0; a != null;) {
  if(a.toString().replace( /[^-0-9]/gim,'')) {
    a = prompt('Введите число');
    b = b + Number(a);
  }
}
alert(b);
