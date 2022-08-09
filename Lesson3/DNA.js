function DNA_strand (line) {
    let line2 = [];  
    for (i=0; i<line.length; i++){
        switch (line[i]) {
            case 'A':
                line2.push('T'); 
                break;
            case 'T':
                line2.push('A'); 
                break;    
            case 'C':
                line2.push('G'); 
                break;
            case 'G':
                line2.push('C'); 
                break;                     
        }
    }
    return line2.join('');
}

console.log(DNA_strand('ATTGC'));
