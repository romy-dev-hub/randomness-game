//info restore program

const submitButton = document.getElementById('submit');

let username;

function getInfo(){
    username = document.getElementById('input').value;
}

submitButton.addEventListener('click',()=>{
    window.location.href = 'mode.html';
})