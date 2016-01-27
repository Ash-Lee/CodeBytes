/* JavaScript ===============================================================
    2 - Factorials
    Create a function that returns the factorial of a number.
========================================================================== */


// Solution 1 - Iteration
function factorial(num) {
    var n = {
        value: num,
        factorial: "",
        result: 1
    };
    
    if (num < 0) {
        n.factorial = "Negative factorial";
        n.result = "Invalid input";
    }
    
    if (num === 0) {
        n.factorial = 0;
    }  
    
    for (var i = 1; i <= num; i++) {
        n.factorial += i;
        if (i !== num) {
            n.factorial += "*";
        }
        n.result *= i; 
    }

    return n; 
}

// Output
var output = factorial(4);
console.log(output.value + "! = " + output.factorial + " = " +  output.result);
// => "4! = 1*2*3*4 = 24"

var output = factorial(0);
console.log(output.value + "! = " + output.factorial + " = " +  output.result);
// => "0! = 0 = 1"

var output = factorial(-4);
console.log(output.value + "! = " + output.factorial + " = " +  output.result);
// => "-4! = Negative factorial = Invalid input"





// Solution 2 - Recursion
function factorial(num) {
    // Termination condition - prevent infinite recursion
    if (num < 0) {
        return console.log("Negative factorial - Invalid input");
    }
    
    // Base case - condition to end recursion
    if (num === 0) {
        return 1;
    }
    
    // Recursive case - run until n = 0
    num *= factorial(num - 1);
    return num;
}

// Output
console.log(factorial(4));
// => 24

console.log(factorial(0));
// => 1

console.log(factorial(-4));
// => "Negative factorial - Invalid input"





// Solution 3 - Recursion
var n = {
    value: 0,
    result: 1,
    display: "Enter a factorial",
        
    factorial: function(num) {
        this.value = num;
        this.result = this.calculateFactorial(num);
        this.display = this.createDisplay(num);
        return this.result;
    },
    
    calculateFactorial: function(num) {
        // Termination condition
        if (num < 0) {
            return console.log("Negative factorial - Invalid input");
        }

        // Base case
        if (num === 0) {
        return 1;
        }

        // Recursive case - Run until num = 0
        num *= this.calculateFactorial(num - 1);
        return num;
    },

    createDisplay: function(num) {
        var formula = "";
        
        if (num === 0) {
            formula = "0";
        } else if (num < 0) {
            return "Nothing to display";
        } else {
            for (var i = 1; i <= num; i++) {
                formula += i;
                if (i !== num) {
                    formula += "*";
                }
            }
        }
        
        return this.value + "! = " + formula + " = " + this.result;
    }
};

// Output
console.log(n.factorial(4));
console.log(n.display);
// => 24
// => "4! = 1*2*3*4 = 24"

console.log(n.factorial(0));
console.log(n.display);
// => 1
// => "0! = 0 = 1"

console.log(n.factorial(-4));
console.log(n.display);
// => "Negative factorial - Invalid input"
// => "Nothing to display"