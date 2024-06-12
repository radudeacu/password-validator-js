document.getElementById('passForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let password = document.getElementById('pass').value;
    let messageElement = document.getElementById('message');

    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordRegex.test(password)) {
        messageElement.textContent = 'Parola Valida.';
        messageElement.className = 'valid';
    } else {
        messageElement.textContent = 'Minim o litera mica si mare si caracter special';
        messageElement.className = 'error';
    }
});
