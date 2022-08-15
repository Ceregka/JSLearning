let theBoard = [
    [1,2,2],
    [2,1,1],
    [2,2,2]
];

function checkBoard (board) {
    let winner = 0;
    if (isWinner(board)) return winner;
    
    if (isFinished(board)) return 0;

    return -1;
    
    function isWinner (board) {
    if (board[0][0] == board[0][1] && board[0][0] == board[0][2]) {winner = board[0][0]; return winner;};
    if (board[1][0] == board[1][1] && board[1][0] == board[1][2]) {winner = board[1][0]; return winner;};
    if (board[2][0] == board[2][1] && board[2][0] == board[2][2]) {winner = board[2][0]; return winner;};


    if (board[0][0] == board[1][0] && board[0][0] == board[2][0]) {winner = board[0][0]; return winner;};
    if (board[0][1] == board[1][1] && board[0][1] == board[2][1]) {winner = board[0][1]; return winner;};
    if (board[0][2] == board[1][2] && board[0][2] == board[2][2]) {winner = board[0][2]; return winner;}; 

    if (board[0][0] == board[1][1] && board[0][0] == board[2][2]) {winner = board[0][0]; return winner;};
    if (board[2][0] == board[1][1] && board[2][0] == board[0][0]) {winner = board[2][0]; return winner;};
    return false;    
    }

    function isFinished (board){
        
    for (let i=0; i<3; i++){
        for (let j=0; j<3; j++) {
            if (board[i][j] == 0) return false;            
        }
    }
    return true;
    } 
} 

console.log(checkBoard(theBoard));