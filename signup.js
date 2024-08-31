document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupFormElement');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const userId = document.getElementById('userId').value;

        const user = { firstName, lastName, userId };
        localStorage.setItem(`user_${userId}`, JSON.stringify(user));

        window.location.href = 'login.html';
    });
});
