const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match');
    } else {
        // Here you would typically send a request to your server to create a new user
        // For this example, we'll just log the user's details to the console
        console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
    }
});