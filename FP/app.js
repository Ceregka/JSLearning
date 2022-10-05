let players;
let activePlayer; 
let nextPlayer;
let activeFigure;
const hand = document.querySelector('.hand');
const speaker = document.querySelector('.speaker');
const boardArr = [
    [
        [],[],[],[]
    ],
    [
        [],[],[],[]
    ],
    [
        [],[],[],[]
    ],
    [
        [],[],[],[]
    ]
];
const modalFormContainer = document.getElementById('modal-form-container');
const aboutFormContainer = document.getElementById('about-form-container');
const modalMessage = document.getElementById('modal-message');

document.querySelector('.set').addEventListener('click', chooseFigure);
document.querySelector('.board').addEventListener('click', putFigure);
document.querySelector('.new-game').addEventListener('click', ()=> {    
    document.location.reload();
});
document.querySelector('.about').addEventListener('click', ()=>{
    showAboutForm();
})
document.querySelector('.close').onclick = function(){
    closeModalForm();
}

document.querySelector('.close-about').onclick = function(){
    closeModalForm();
}

do{
players = +prompt('Скільки буде гравців? (від 2 до 4)',2);
}while (!(players>0 && players<5));
activePlayer = 1;
speak('оберіть фігуру для наступного гравця');


function chooseFigure(event){
    if(activeFigure) return;
    if(event.target.tagName != 'DIV') return;
    activeFigure = event.target;
    hand.append(activeFigure);
    activePlayer++;
    speak('зробіть Ваш хід');
}

function putFigure(e) {    
    const currentCell = e.target.closest('td');    
    if (currentCell.firstElementChild) return;
    if (!activeFigure) return;
    let x = currentCell.dataset.x;
    let y = currentCell.dataset.y;
    currentCell.append(activeFigure);
    let classes = currentCell.firstElementChild.classList;
    for (let i = 0; i < classes.length; i++ ){
        boardArr[x][y].push(classes[i]);
    }
       
    activeFigure = '';

    if (checkLine(x,y)) {
        showModalForm();
        document.querySelector('.set').removeEventListener('click', chooseFigure);
        // return;
    }

    
    speak('оберіть фігуру для наступного гравця');
    
    function checkLine(x, y) {
        let isLine;
        for (el of boardArr[x][y]){
            isLine = true;
            for (let i=0; i < 4; i++){
                if (!boardArr[x][i].includes(el)) isLine = false;            
            }
            if (isLine) return isLine;

            isLine = true;
            for (let i=0; i < 4; i++){
                if (!boardArr[i][y].includes(el)) isLine = false;           
            }
            if (isLine) return isLine;

        
            if (x==y){
                isLine = true;
                for (let i=0; i < 4; i++){
                    if (!boardArr[i][i].includes(el)) isLine = false;
                }
                if (isLine) return isLine;
            }
        
            if (+x + +y == 3){
                isLine = true;
                for (let i=0; i < 4; i++){
                    if (!boardArr[i][3-i].includes(el)) isLine = false;
                }
                if (isLine) return isLine;
            }
             
        }
        return isLine;
    }
        
}

document.querySelector('.new-game').addEventListener('click',()=>{
//    players = prompt('Скільки буде гравців?',2);
//    if (!players.match(/^[1-4]$/)) players=2;
//    activePlayer = 1;
//    speak();

})

function speak(txt){
    activePlayer = activePlayer > players? 1: activePlayer;
    speaker.innerHTML = `Гравець ${activePlayer}, ${txt}`;
}

function showModalForm(){
    const coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.append(coverDiv); 
    modalMessage.innerText = `Гравець ${activePlayer} виграв!!!`
    modalFormContainer.style.display = 'block';
}

function closeModalForm(){
    document.getElementById('cover-div').remove();            
    modalFormContainer.style.display = 'none'; 
    aboutFormContainer.style.display = 'none';
}

function showAboutForm(){
    const coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.append(coverDiv); 
    
    aboutFormContainer.style.display = 'block';
}
