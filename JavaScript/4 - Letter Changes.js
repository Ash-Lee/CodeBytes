/* JavaScript ===============================================================================================================
    4 - Letter Changes
    Create a function that modifies a string according to the following algorithm:
    Replace every letter in the string with the letter following it in the alphabet (i.e. c becomes d, z becomes a).
    Capitalise every vowel in this new string.
========================================================================================================================== */


// Solution
function letterChanges(str) {
    var abc = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        bcd = [" ", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a"],
        code = "";

    str = str.toLowerCase();

    // Letter replacement
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < abc.length; j++) {
            if (str.charAt(i) === abc[j]) {
                code += bcd[j];
            }
        }
    }
    
    // Capitalise vowels
    for (var i = 0; i < code.length; i++) {
        if (code.charAt(i) === "a" || code.charAt(i) === "e" || code.charAt(i) === "i" || code.charAt(i) === "o" || code.charAt(i) === "u") {
            var vowel = code.charAt(i).toUpperCase();
            code = code.substring(0, i) + vowel + code.substring(i + 1);
        }
    }

    return code;
}

// Output
console.log(letterChanges("Super secret code"));
// => "tvqfs tfdsfU dpEf"

/*
 * Notes
 *
 * code.substring(indexStart[, indexEnd])
 * substring() extracts characters from indexStart up to 'but not including' indexEnd.
 * Strings are immutable - hence the need to create a new string with substring().
 *
 * The capitalise vowels code is not strictly necessary.
 * Could have placed capitalised vowels directly into the 'bcd' array.
 *
 * Possible Alternative Solutions
 * String.prototype.replace() and Regex.
 *
 */