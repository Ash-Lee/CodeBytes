/* JavaScript ========================================================================================
    17 - Powers of Two
    Create a function which returns string "True" if the parameter passed is a power of two.
    If it's not, return string "False".
=================================================================================================== */


// Solution
function powersofTwo(num) { 
    const base = 2;
    
    var exponent = 0,
        count = 0;
    
    if (isNaN(num)) {
        return "Invalid Input";
    }
  
    while (count < num) {
        count = Math.pow(base, exponent);
        exponent += 1;
    
        if (count === num) {
            return "True";
        }
      
        if (count > num) {
            return "False";
        }
    }
}

// Output
console.log(powersofTwo(16));
// => "True"

console.log(powersofTwo(22));
// => "False