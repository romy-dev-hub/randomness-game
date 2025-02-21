function goBack(){
    window.location.href = "index.html";
    container.classList.add('flip-out');

    setTimeout(() => {
    window.location.href = "index.html";
    } , 800);
}

import { getScore } from "./game.js";

const title = document.getElementById('title');
const message = document.getElementById('message');

title.innerHTML = `dear player ${name}`;
message.innerHTML = `your score is: ${getScore()}`;