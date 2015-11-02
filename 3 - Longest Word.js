// 3 - Longest Word
// Create a function that returns the longest word in a sentence.


// Solution
function longest(str) {
    var words = [""],
        result = [],
        obj = {};
    
    // Remove punctuation
    str = str.replace(/[^\w\s]|_/g, "")
             .replace(/\s+/g, " ");

    // Find longest words   
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        if (str[i].length === words[0].length) {
            words.push(str[i]);
        } else if (str[i].length > words[0].length) {
            words = [str[i]];
        }
    }

    // Remove duplicates
    for (var i = 0; i < words.length; i++) {
        obj[words[i]] = 0;
    }
    for (i in obj) {
        result.push(i);
    }
   
    return result;
}

// Output
console.log(longest("Grumpy wizards make toxic brew for the evil Queen and Jack"));
// => ["wizards"]

console.log(longest("Grumpy wizards make toxic brew for evil wizards and naughty elves"));
// => ["naughty", "wizards"]

console.log(longest("Badger! Badger! Badger!"));
// => ["Badger"]

/*
 * Notes
 *
 * Remove Punctuation
 * .replace(/[^\w\s]|_/g, "") - Replace anything that is not an alphanumeric character or whitespace.
 * .replace(/\s+/g, " ") - Collapse multiple spaces to single spaces.
 *
 * Remove Duplicate Code
 * Only one instance of a key can exist within an object. Object keys are always unique.
 * When a duplicated word (key) is added to the object, it replaces any previous keys of the same name.
 * Object key act as a filter, leaving only one instance of each duplicate word.
 * https://dreaminginjavascript.wordpress.com/2008/08/22/eliminating-duplicates/
 *
 * Possible Alternative Solutions
 * Array.prototype.filter()
 * jQuery.unique()
 *
 */