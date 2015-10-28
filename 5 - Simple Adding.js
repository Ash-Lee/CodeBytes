// 5 - Simple Adding
// Create a function that adds up all numbers from 1 to num.


// Solution 1 - For Loop
function simpleAdding(num) { 
    var i,
        result = 0;
    
    for (i = 1; i < num + 1; i++) {
      result += i; 
    }

    return result; 
}

// Output
console.log(simpleAdding(12));
// => 78

/*
 * Notes
 *
 * Defining the variable 'result' inside the for loop gives a 'SyntaxError: missing ; before statement' error.
 * Attempts to declare a new 'result' variable with every loop.
 *
 * for-loops do not have block level scope.
 * Variable declaration of 'i' is hoisted to the top of the function by the interpreter (even if declared as part of the for loop).
 * Manually declaring 'i' first removes any confusion over block level scope.
 * The 'i' variable can be accessed anywhere within the current function scope.
 * Douglas Crockford - http://javascript.crockford.com/code.html#variable%20declarations
 *
 */





// Solution 2 - While Loop
function simpleAdding(num) {
    var count = 0,
        result = 0;
   
    while (count < num + 1) {
        result += count;
        count += 1;
    }
    
    return result;
}

// Output
console.log(simpleAdding(12));
// => 78