function calc(x,y, operator) {
    switch (operator) {
        case '+':
            return +x + +y;
        case '-':
            return x-y;
        case '*':
            return x*y;
        case '/':
            return x/y;                    
    }
}

alert(calc(12, 4, '+'));
alert(calc(1, 4, '-'));
alert(calc(12, 5, '/'));
alert(calc(1.2, 3, '*'));
