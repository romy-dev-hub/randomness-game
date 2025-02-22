import { getScore } from "./easy-mode.js";
import { name } from "./intro.js";

const title = document.getElementById('title');
const message = document.getElementById('message');
const homeButton = document.getElementById('home');

title.innerHTML = `dear player ${name}`;
message.innerHTML = `your score is: ${getScore()}`;

function goBack(){
    homeButton.addEventListener('click', ()=>{
        window.location.href = 'index.html';
    })

    setTimeout(() => {
    window.location.href = "index.html";
    } , 800);
}