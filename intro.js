//info restore program

const submitButton = document.getElementById('submit');

function getInfo() {
    const username = document.getElementById('input').value.trim();
    
    if (username) {
        localStorage.setItem('username', username); // Store the name
        window.location.href = 'mode.html'; // Redirect
    } else {
        alert('Please enter your name before proceeding!');
    }
}

submitButton.addEventListener('click', getInfo);
