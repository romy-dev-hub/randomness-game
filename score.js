

document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username') || 'Player'; // Default to 'Player' if missing
    const score = localStorage.getItem('score') || 0; // Default to 0 if missing

    const title = document.getElementById('title');
    const message = document.getElementById('message');

    title.innerText = `Dear ${username}!`;
    message.innerText = `Your final score is: ${score}`;

    const homeButton = document.getElementById('home');
    // Add click event listener
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
