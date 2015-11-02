// 12 - Vowel Count
// Create a function that returns the number of vowels in a string.


// Solution - For..Of Loop
function vowelCount(str) {
    var vowels = ["a", "e", "i", "o", "u"],
        result = 0;

    str = str.toLowerCase();

    for (var i = 0; i < str.length; i++) {
        for (var vowel of vowels) {
            if (str.charAt(i) === vowel) {
                result += 1;
            }
        }
    }

    return result;
}

// Output
console.log(vowelCount("All cows eat grass"));
// => 5