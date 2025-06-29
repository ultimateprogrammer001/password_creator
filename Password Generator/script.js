function userRequest() {
  function generatePassword(
    length,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  ) {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@#~+=*&^%$£!";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    if (length <= 5 || length > 12)
      alert(`Password length must be greater than 5 and lessthan 12`);
    if (allowedChars.length == 0) alert(`Please select atleast one option`);

    for (let i = 0; i < length; i++) {
      randomIndex = Math.floor(Math.random() * allowedChars.length);

      password += allowedChars[randomIndex];
    }
    return password;
  }

  const length = Number(document.getElementById("passwordLength").value);
  const includeLowerCase = document.getElementById("lowerCaseChars").checked;
  const includeUpperCase = document.getElementById("upperCaseChars").checked;
  const includeSymbols = document.getElementById("symbols").checked;
  const includeNumbers = document.getElementById("numbers").checked;

  let password = generatePassword(
    length,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );

  userPassword = document.getElementById("password").innerHTML = password;
}
