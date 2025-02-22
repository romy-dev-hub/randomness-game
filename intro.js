//info restore program

const userInput = document.getElementById('input');
const submitButton = document.getElementById('submit');

function getInfo(){
    const name = parent.document.getElementById('input').value;
    const info = localStorage.getItem(name);
}

submitButton.addEventListener('click',()=>{
    window.location.href = 'mode.html';
})