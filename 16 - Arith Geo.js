// 16 - Arith Geo
// Create a function that takes an array of numbers and returns the string "Arithmetic" if the
// sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern.
// If the sequence doesn't follow either pattern return "-1".
// (Arithmetic sequence - difference between each of the numbers is consistent - [2, 4, 6, 8] = n + 2)
// (Geometric sequence - each term after the first is multiplied by some constant ratio - [2, 6, 18, 54] = n * 3)


// Solution
function arithGeo(arr) {
    var arithmetic = false,
        geometric = false,
        aDiff = arr[0],
        gRatio = arr[1] / arr[0];
 
    // Arithmetic Sequence
    for (var i = 1; i < arr.length; i++) {
        if (aDiff + arr[i - 1] === arr[i]) {
            arithmetic = true;
        } else {
            arithmetic = false;
            break;
        }
    }
    
    // Counter (0 / 0) = NaN
    if (!gRatio) {
        gRatio = 0
    }
    
    // Geometric Sequence
    for (var i = 1; i < arr.length; i++) {
        if (gRatio * arr[i - 1] === arr[i]) {
            geometric = true;
        } else {
            geometric = false;
            break;
        }
    }

    return ((arithmetic && geometric) ? "Arithmetic and Geometric" : (arithmetic) ? "Arithmetic" : (geometric) ? "Geometric" : "-1");
}

// Output
console.log(arithGeo([2, 4, 6, 8, 10]));
// => "Arithmetic"

console.log(arithGeo([2, 6, 18, 54, 162]));
// => "Geometric"

console.log(arithGeo([2, 2, 2, 2, 2]));
// => "Geometric"

console.log(arithGeo([0, 0, 0, 0, 0]));
// => "Arithmetic and Geometric"

console.log(arithGeo([2, 28, 30, 12, 0, 4]));
// => "-1"