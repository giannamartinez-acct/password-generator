function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
  
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";
  
    let validChars = "";
    if (includeUppercase) validChars += uppercase;
    if (includeLowercase) validChars += lowercase;
    if (includeNumbers) validChars += numbers;
    if (includeSymbols) validChars += symbols;
  
    let password = "";
  
    if (validChars.length === 0) {
      alert("Please select at least one character type.");
      return;
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }
  
    document.getElementById('result').value = password;
  }
  