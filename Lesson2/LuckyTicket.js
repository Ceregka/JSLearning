const num = prompt('Введіть номер квитка');

if ((+num[0]+ +num[1] + +num[2]) == (+num[3]+ +num[4] + +num[5])) {
    alert('ВІТАЮ! У Вас щасливий квиток');
}
else { 
    alert('Можливо, пощастить наступного разу');
}