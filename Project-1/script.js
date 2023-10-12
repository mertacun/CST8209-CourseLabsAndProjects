function generateCode(length = 6, includeNumbers = false) {
    let startUppercase = 'A'.codePointAt(0);
    let startNumber = '0'.codePointAt(0);
    
    let charset = String.fromCodePoint(
        ...Array.from({ length: 26 }, (_, i) => i + startUppercase),
        ...(includeNumbers ? Array.from({ length: 10 }, (_, i) => i + startNumber) : [])
    );

    let code = '';

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        code += charset.charAt(randomIndex);
    }

    console.log(code);
    let displayCode = document.getElementById('generatedCode');
    displayCode.textContent = code;
}
    generateCode();
