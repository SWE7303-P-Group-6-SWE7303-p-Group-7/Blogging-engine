document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginFormElement');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        const { firstName, lastName } = currentUser;
        document.getElementById('welcomeMessage').innerText = `Hi, ${firstName} ${lastName}. Welcome to your blogging engine!`;
        document.getElementById('loginForm').style.display = 'none';
        return;
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userId = document.getElementById('userId').value;

        const user = JSON.parse(localStorage.getItem(`user_${userId}`));

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'index.html';
        } else {
            alert('User ID not found. Please sign up.');
        }
    });
});
