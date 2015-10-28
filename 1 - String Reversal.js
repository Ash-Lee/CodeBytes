// 1 - String Reversal
// Create a function that returns a string argument in reversed order.


// Solution
function StringReverse(str) {
    str = str.split('').reverse().join('');
    return str;
}

// Output
console.log(StringReverse("Hello world!"));
// => "!dlrow olleH"