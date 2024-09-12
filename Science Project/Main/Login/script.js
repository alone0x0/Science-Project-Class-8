const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    // Optionally, show registration form
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    // Optionally, show login form
});

document.getElementById('signInButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin@gmail.com' && password === '0909') {
        alert('Login successful!');
        window.location.replace('/Main/home/index.html'); // Correct relative path
    } else {
        alert('Invalid username or password');
    }
});
