const lineLength = +prompt('Введіть довжину лінії');
const symbol = prompt('Яким символом малювати?');
let line = '';

for (i=0; i<lineLength; i+=1){
    line +=symbol;
}

console.log(line);