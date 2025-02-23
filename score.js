import { getScore } from "./easy-mode.js";
import { username } from "./intro.js";

const title = document.getElementById('title');
const message = document.getElementById('message');
const homeButton = document.getElementById('home');

title.innerHTML = `dear player ${username}`;
message.innerHTML = `your score is: ${getScore()}`;

function goBack(){
    homeButton.addEventListener('click', ()=>{
        window.location.href = 'index.html';
    })
}