// Варіант 1

function getShortestLength (text) {
    let words = text.split(' ');
    let shortestLength = 1;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortestLength) 
            shortestLength = words[i].length;        
    }
    return shortestLength;
}



//Варіант 2

function getShortestLength (text) {
    let words = text.split(' ');
    words.sort((a,b) => a.length - b.length);
    return words[0].length;

}



let text = "i want to travel the world writing code one day";
console.log(getShortestLength(text));
