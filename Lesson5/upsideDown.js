function getTurnedString (str) {
    
    return str
       .split('') 
       .map(
           el => (+el || el == '0')? '_':
           el == el.toUpperCase()? el.toLowerCase() : el.toUpperCase()
        )
       .join('');

}

console.log(getTurnedString('It\'s a simple Example #2. My goal is to test my code. 17/08/22'));