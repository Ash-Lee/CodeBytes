/* JavaScript ============================================================================
    8 - Check Numbers
    Create a function that compares two numbers.
    Return string "true" if num2 is greater than num1, otherwise return "false".
    If the parameter values are equal, return string "-1".
======================================================================================= */


// Solution 1 - Ternary Operator
function checkNumbers(num1, num2) { 
    if (num1 === num2) {
        return "-1";
    } else {
        return ((num2 > num1) ? "True" : "False");
    }
}

// Solution 2 - Ternary Chaining
function checkNumbers(num1, num2) { 
    return ((num2 === num1) ? "-1" : (num2 > num1) ? "True" : "False");
}

// Output
console.log(checkNumbers(1, 2));
// => "True"

console.log(checkNumbers(2, 1));
// => "False"

console.log(checkNumbers(1, 1));
// => "-1"