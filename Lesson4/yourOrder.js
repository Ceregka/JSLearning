function getSortedString(str) {
    let sortedString = [];

    for (let word of str.split(' ')) {
        for (let symbol of word.split('')) {
            if (isFinite(symbol)) 
                sortedString[symbol-1] = word;
        }        
    }
    return sortedString.join(' ');
}

console.log(getSortedString('4of Fo1r pe6ople g3ood th5e the2'));