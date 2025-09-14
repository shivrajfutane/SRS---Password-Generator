const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const lengthValueSpan = document.getElementById('lengthValue');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

// Update length display
lengthInput.addEventListener('input', () => {
    lengthValueSpan.textContent = lengthInput.value;
});

// Generate password
generateButton.addEventListener('click', generatePassword);

function generatePassword() {
    const length = parseInt(lengthInput.value);
    let characters = '';
    let newPassword = '';

    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (lowercaseCheckbox.checked) characters += lowercaseChars;
    if (numbersCheckbox.checked) characters += numberChars;
    if (symbolsCheckbox.checked) characters += symbolChars;

    if (characters === '') {
        alert('Please select at least one character type.');
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        newPassword += characters[randomIndex];
    }
    passwordInput.value = newPassword;
}

// Copy password to clipboard
copyButton.addEventListener('click', () => {
    passwordInput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});

// Initial password generation
generatePassword();