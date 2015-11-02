// 10 - Alphabet Soup
// Create a function that returns a string with the letters in alphabetical order (i.e. hello = ehllo).
// Numbers, spaces and punctuation symbols should not be included in the string.


// Solution
function alphabetSoup(str) { 
    return str = str.toLowerCase()
                    .replace(/[^a-z]/g, "")
                    .split('')
                    .sort()
                    .join('');
}

// Output
console.log(alphabetSoup("qwertyuiopasdfghjklzxcvbnm"));
// => "abcdefghijklmnopqrstuvwxyz"

console.log(alphabetSoup("Grumpy wizards make toxic brew for the evil Queen and Jack"));
// => "aaaabccddeeeeeefghiiijkklmmnnoopqrrrrsttuuvwwxyz"

/*
 * Notes
 *
 * .replace(/[^a-z]/g, "") - Replace anything that is not an alphabetic character with an empty string.
 *
 */