/* JavaScript ==========================================================================================
    7 - Simple Symbols
    Create a function which determines if the parameter being passed is of an acceptable sequence.
    The string parameter will be composed of + and = symbols with several letters between them.
    For the string to be true each letter must be surrounded by a + symbol.
    The string will not be empty and will have at least one letter.
    (i.e. "++d+===+c++==a" = "False")
===================================================================================================== */


// Solution 1
function simpleSymbols(str) { 
    var result = "True";

    str = str.split('');
  
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "=" || str[i] === "+") {
            continue;
        }
    
        if (str[i - 1] !== "+" || str[i + 1] !== "+") {
            result = "False";
        }
    }

    return result; 
}

// Output
console.log(simpleSymbols("+==f++d+"));
// => "False"

console.log(simpleSymbols("h+==f++d+"));
// => "False"

console.log(simpleSymbols("+==f++d+s"));
// => "False"

console.log(simpleSymbols("==+f+=+d+="));
// => "True"





/* Extended Challenge =========================================================================
    The string parameter can also include other none acceptable characters (i.e numbers).
    The string may also contain no letters.
============================================================================================ */


// Solution 2 - String
function simpleSymbols(str) { 
    // Check for alphabetic characters at start or end of string
    if (str.charAt(0).match(/[a-z]/i) || str.charAt(str.length - 1).match(/[a-z]/i)){
        return "False";
    }
    
    // Check for alphabetic characters
    if (str.search(/[a-z]/gi) === -1) {
        return "Invalid input";
    }
    
    // Check sequence logic
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i).match(/[a-z]/i)) {
            if (str.charAt(i - 1) !== "+" || str.charAt(i + 1) !== "+") {
                return "False";
            }
        }
    }

    return "True";
}

// Solution 2 - Array
function simpleSymbols(str) { 
    // Check for alphabetic characters
    if (str.search(/[a-z]/gi) === -1) {
        return "Invalid input";
    }
    
    // Convert string to array
    str = str.split('');
    
    // Check for alphabetic characters at start or end of string
    if (str[0].match(/[a-z]/i) || str[str.length - 1].match(/[a-z]/i)){
        return "False";
    }
    
    // Check sequence logic
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            if (str[i - 1] !== "+" || str[i + 1] !== "+") {
                return "False";
            }
        }
    }

    return "True";
}

// Outputs
console.log(simpleSymbols("+==f++d+"));
// => "False"

console.log(simpleSymbols("h+==f++d+"));
// => "False"

console.log(simpleSymbols("+==f++d+s"));
// => "False"

console.log(simpleSymbols("+++s=+++3333"));
// => "False"

console.log(simpleSymbols("==+f+=+d+="));
// => "True"

console.log(simpleSymbols("====++++"));
// => "Invalid Input"

/*
 * Notes
 *
 * .match(/[a-z]/i) - match any alphabetic character.
 *
 * i flag = makes whole expression case-insensitive - Only applies to an individual character - Returns true or false.
 * 
 * g flag = allows subsequent searches to start from the end of the previous match - applies to the whole string.
 * RegExr only searches for a single match when the global flag is disabled to avoid infinite match errors. 
 *
 * gi flag = case insensitive full string search
 *
 *
 * .search = index of first matching integer or -1
 * .match = array of matched results or null
 *
 */