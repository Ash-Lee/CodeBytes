// 9 - Time Convert
// Create a function that converts a parameter into hours and minutes.
// Separate the hours and minutes with a colon.
// (i.e. if num = 63 then the output should be 1:3)


// Solution - Modulo Operator
function timeConvert(num) { 
    var hours = Math.floor(num / 60),
        mins = num % 60;
    
    return ((num >= 0) ? (hours + ":" + mins) : "Invalid Input");
}

// Output
console.log(timeConvert(-30));
// => "Invalid Input"

console.log(timeConvert(0));
// => "0:0"

console.log(timeConvert(30));
// => "0:30"

console.log(timeConvert(60));
// => "1:0"

console.log(timeConvert(90));
// => "1:30"

console.log(timeConvert(120));
// => "2:0"