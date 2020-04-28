let randomCharString = "";
let charSet = [
  {
    char: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    name: "Special Characters",
    use: false
  },
  {
    char: "0123456789",
    name: "Number Characters",
    use: false
  },
  {
    char: "abcdefghijklmnopqrstuvwxyz",
    name: "Lowercase Letters",
    use: false
  },
  {
    char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    name: "Uppercase Letters",
    use: false
  }
]

//prompt user to pick a password length between 8 and 128 characters


const generate = () => {
  let passwordLength = parseInt(prompt("Please select a password length between 8 and 128 characters."));
  let passwordString = "";

  //check if password is long enough
  if (passwordLength > 8 && passwordLength < 128) {
    charSet.forEach(set => {
      const useChar = (prompt(`Do you want to use ${set.name}?`)).toLowerCase();
      if (useChar === "yes" || useChar === "y") {
        set.use = true;
      }
      if (set.use) {
        randomCharString = randomCharString + set.char;
      }
    });
    console.log(JSON.stringify(charSet))
  }
  else {
    alert("Your password does not meet the requirements. Please refresh and try again.");
  }

  //generate random password based on characters the user wants to use 
  if (randomCharString !== "") {
    for (i = 1; i <= passwordLength; i++) {
      passwordString = passwordString + randomCharString.charAt(Math.floor(Math.random() * Math.floor((randomCharString.length) - 1)));
    }

    document.getElementById("password").value = passwordString;
  }
  else {
    alert("You must use at least one kind of character. Please refresh and try again.");
  }
}
