// 15 - Palindrome
// Create a function which returns true if the parameter is a palindrome. 
// (Palindrone = A string which is the same forward as it is backward)


// Solution
function palindrome(str) { 
    var reverse = str.replace(/[\s]/g, "").split('').reverse().join('');
    str = str.replace(/[\s]/g, "");
   
    return (str === reverse ? true : false);        
}

// Output
console.log(palindrome("racecar"));
// => true

console.log(palindrome("never odd or even"));
// => true

console.log(palindrome("eye spy"));
// => false

/*
 * Notes
 *
 * .replace(/[\s]/g, "") - Replace all whitespaces with an empty string.
 *
 */