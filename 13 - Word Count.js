// 13 - Word Count
// Create a function that returns the number of words in a string.
// Words will be separated by single spaces.


// Solution
function wordCount(str) {
    return str = str.split(" ").length;
}

// Output
console.log(wordCount("She sells seashells on the seashore"));
// => 6

console.log(wordCount("how much wood would a woodchuck chuck if a woodchuck could chuck wood"));
// => 13