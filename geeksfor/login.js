const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields');
    } else {
        // Here you would typically send a request to your server to authenticate the user
        // For this example, we'll just log the username and password to the console
        console.log(`Username: ${username}, Password: ${password}`);
    }
});