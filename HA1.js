//strings in js 

function reverseString(str) {
    let chars = str.split("");
    let reverse = "";

    for (let i = chars.length - 1; i >= 0; i--) {
        reverse = reverse + chars[i];
    }

    console.log(`Reverse of the String - ${reverse}`);
}

reverseString("Automation");

function isPalindrome(str) {
    let letters = str.split("");
    let reverse = "";

    for (let i = letters.length - 1; i >= 0; i--) {
        reverse = reverse + letters[i];
    }

    return str === reverse;
}

console.log(isPalindrome("test"));
console.log(isPalindrome("Automation")); 