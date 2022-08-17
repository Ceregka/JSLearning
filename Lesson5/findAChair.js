function meeting(rooms, need) {
    
    if (!need) return 'Game On';

    let availableChairs = [];
    for (room of rooms) {
        let x = (room[1] - room[0].length) > 0? room[1] - room[0].length : 0;
        availableChairs.push(x);
    }

    let allAvChs = availableChairs.reduce((a,b)=>a+b);
    
    if ( allAvChs < need ) return 'Not enough!';

    let result = [];
    do {
        let x = Math.min(need, availableChairs[0])
        result.push(x);
        need -=x;
        availableChairs.shift();
    } while (need);
    return result;
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 0));