/* JavaScript ============================================================================
    6 - Letter Capitalise
    Create a function that capitalises the first letter of every word in a string.
======================================================================================= */


// Solution
function letterCapitalise(str) {
    var word = "",
        letter = "",
        result = "";
    
    str = str.split(" ");
    
    for (var i = 0; i < str.length; i++) {
        word = str[i];
        letter = word.charAt(0).toUpperCase();
        word = letter + word.substring(1);
        result += (i === str.length - 1 ? word : word + " ");
    }
   
    return result;
}

// Output
console.log(letterCapitalise("badger! badger! badger!"));
// => "Badger! Badger! Badger!"

console.log(letterCapitalise("a b c d e f g h i j k l m n o p q r s t u v w x y z"));
// => "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z" 