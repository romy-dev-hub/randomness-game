//game logic 
//easy mode:

const input = document.getElementById('input');
const submit = document.getElementById('submit-button');
const message = document.getElementById('message');

let gameActive = true;
//let score = 0;

let score = parseInt(localStorage.getItem('score')) || 0; // Load existing score at the start

console.log("Initial score from localStorage:", score); // Debugging



function getResult(){
    const playerInput = parseInt(input.value);
    const number = Math.floor(Math.random() * 10) + 1;

    if(playerInput === number){
        message.innerHTML = 'you guessed correctly';
        score++;
        localStorage.setItem('score', score);
        //addition for test
        console.log("Updated score saved to localStorage:", score);

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
    console.log("Final score before navigating to score.html:", score);
    localStorage.setItem('score', score);
    window.location.href = 'score.html';
    //some changes 
})

submit.addEventListener('click',()=>{
    getResult();
    newButton.style.display = 'block';
})


newButton.addEventListener('click',()=>{
    window.location.reload();
    input.value = '';
})

/*
export function updateScore(newScore){
    score = newScore;
}

export function getScore(){
    return score;
}

*/

