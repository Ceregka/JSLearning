const l = +prompt('Введіть довжину офісу');
const w = +prompt('Введіть ширину офісу');
const h = +prompt('Введіть висоту офісу');

const s = (l+w)*2*h;
const n = Math.ceil(s/16);
alert(`Потрібно ${n} банок фарби`);