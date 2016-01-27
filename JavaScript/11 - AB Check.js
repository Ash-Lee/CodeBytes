/* JavaScript ===========================================================================================================
    11 - AB Check
    Create a function that returns the string "true" if the characters a and b are separated by exactly 3 places
    anywhere in the string at least once. Otherwise return string "false". (i.e. "lane borrowed" = true - 'ane b')
====================================================================================================================== */


// Solution
function abCheck(str) {
    var passCheck = "",
        passes = 0; 

    str = str.split('');
    
    for (var i = 0; i < str.length; i++) {
           if (str[i] === "a" && str[i + 4] === "b") {
               passCheck = "True";
               passes += 1;
            }
    }
    
    return ((passCheck) ? (passCheck + ": " + passes + " times") : "False");   
}

// Output
console.log(abCheck("Lara sobs"));
// => "True: 1 times"

console.log(ABCheck("Lara sobs and Layla sobs"));
// => "True: 2 times"

console.log(ABCheck("after badly"));
// => "False"