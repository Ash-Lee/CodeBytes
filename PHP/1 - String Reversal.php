<!-- PHP ==========================================================================
    1 - String Reverse
    Create a function that returns a string parameter in reversed order.
=============================================================================== -->


<!-- Solution 1 -->
<?php
    function firstReverse_1($str) {  
        return strrev($str);
    }

    echo "Solution 1: " . firstReverse_1("Hello") . "<br />";
?>
<!-- => "olleH" -->


<!-- Solution 2 -->
<?php
    function firstReverse_2($str) {
        $newstring = "";
        
        for ($i = strlen($str) - 1; $i >= 0; $i--) {
            $newstring .= $str[$i];
        }
        
        return $newstring;
    }
    
    echo "Solution 2: " . firstReverse_2("Hello") . "<br />";
?>
<!-- => "olleH" -->


<!--
  Notes
    * Beware of local scope with for loops - Variables must be declared first!
    * Don't have to worry about brackets when assigning $i (- has higher precedence than =). -->