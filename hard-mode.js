//game logic 
//hard mode:

const input = document.getElementById('input');
const submit = document.getElementById('submit-button');
const message = document.getElementById('message');

let gameActive = true;
let score = 0;


function getResult(){
    const playerInput = parseInt(input.value);
    const number = Math.floor(Math.random() * 51);

    if(playerInput === number){
        message.innerHTML = 'you guessed correctly';
        localStorage.setItem('score', score);
        score++;
    }else{
        message.innerHTML = `wrong guess, the number was ${number}. try again`;
    }

}


const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.alignItems = 'center';


const newButton = document.createElement('button');
newButton.classList.add('try-again');
newButton.style.display = 'none';
document.body.appendChild(newButton);


buttonContainer.appendChild(newButton);
document.body.appendChild(buttonContainer);



const endGameButton = document.getElementById('end-button');
endGameButton.addEventListener('click',()=>{
    localStorage.setItem('score', score);
    window.location.href = 'score.html';
})

submit.addEventListener('click',()=>{
    getResult();
    newButton.style.display = 'block';
})


newButton.addEventListener('click',()=>{
    window.location.reload();
    input.value = '';
})


export function updateScore(newScore){
    score = newScore;
}

export function getScore(){
    return score;
}

