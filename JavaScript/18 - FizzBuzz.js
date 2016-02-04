/* JavaScript ========================================================================================
    18 - FizzBuzz
    Write a function called fizzbuzz that accepts a single argument n.
    Fizzbuzz should return "Fizz" if n is a multiple of 3, "Buzz" if n is a multiple of 5,
    and n if n is a multiple of neither 3 nor 5.
=================================================================================================== */

// Solution
function fizzbuzz(n) {
    var output = "";
    if (n % 3 === 0) output += "Fizz";
    if (n % 5 === 0) output += "Buzz";
    return (output ? output : n); 
}

// Output
console.log(fizzbuzz(3));
// => "Fizz"

console.log(fizzbuzz(5));
// => "Buzz"

console.log(fizzbuzz(15));
// => "FizzBuzz"

console.log(fizzbuzz(4));
// => "4"