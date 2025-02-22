import { getScore } from "./game.js";
import { name } from "./intro.js";

const title = document.getElementById('title');
const message = document.getElementById('message');

title.innerHTML = `dear player ${name}`;
message.innerHTML = `your score is: ${getScore()}`;

function goBack(){
    const homeButton = document.getElementById('home');
    homeButton.addEventListener('click', ()=>{
        window.location.href = 'index.html';
    })

    setTimeout(() => {
    window.location.href = "index.html";
    } , 800);
}