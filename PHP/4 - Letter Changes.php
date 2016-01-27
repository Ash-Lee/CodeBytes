<!-- PHP =====================================================================================================
4 - Longest Word
Create a function which modifies a string using the following algorithm:
Replace every letter in the string with the letter following it in the alphabet (i.e. c becomes d).
Then capitalise every vowel in the string.
========================================================================================================== -->


<!-- Solution 1 -->
<?php

    function letterChanges($str) {
        $abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        $code = str_split(strtolower($str));
        
        // Adjust letters
        foreach ($code as $key => $val) {
            foreach ($abc as $index => $letter) {
                if ($val == "z") {
                    $code[$key] = "a";
                } elseif ($val == $letter) {
                    $code[$key] = $abc[$index + 1];
                } else {
                    continue;
                }
            }
            
            // Capitalise vowels
            if ($code[$key] == "a" || $code[$key] == "e" || $code[$key] == "i" || $code[$key] == "o" || $code[$key] == "u") {
                $code[$key] = strtoupper($code[$key]);
            }
        }
        
        return implode($code);
    }

    echo "Solution 1: " . letterChanges("Hello world!") . "<br />"

?>
<!-- => "Ifmmp xpsmE!" -->