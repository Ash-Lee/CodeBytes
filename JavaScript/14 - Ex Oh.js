/* JavaScript ========================================================================================
    14 - Ex Oh
    Create a function that returns the string "true" if there is an equal number of x's and o's.
    (i.e. "xooxxxxooxo" = "false" - 6 x's vs 5 o's)
=================================================================================================== */


// Solution
function exOh(str) {
    var x = 0,
        o = 0;

    str = str.toLowerCase().replace(/[^xo]/g, "");

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === "x") {
            x += 1;
        } else {
            o += 1;
        }
    }

    return ((x === o) ? "True" : "False");
}

// Output
console.log(exOh("xxoo"));
// => "True"

console.log(exOh("xxxo"));
// => "False"

console.log(exOh("Xylophone"));
// => "False"