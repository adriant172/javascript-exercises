const palindromes = function (string) {
    let newString = [];
    for (char of string) {
        if ((/[a-zA-Z]/).test(char) === true) {
            newString += char.toLowerCase();
        } else {
            continue;
        }
    }
    const stopPoint = Math.ceil(newString.length / 2)
    for (let i = 1; i < stopPoint; i++) {
        if (newString[i - 1] !== newString[newString.length - i]) {
            return false;
        } 
        
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;


//Palindrome length has to be an odd number since center character has not duplicate