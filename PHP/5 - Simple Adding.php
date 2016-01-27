<!-- PHP ===============================================================
5 - Simple Adding
Create a function which adds up all the numbers from 1 to $num.
==================================================================== -->


<!-- Solution 1 -->
<?php

    function simpleAdding_1($num) {
        $count = 0; 
        
        for ($i = 0; $i <= $num; $i++) {
            $count += $i;
        }
        
        return $count;
    }

    echo "Solution 1: ", simpleAdding_1(12), "<br />";
    echo "Solution 1: " . (string)simpleAdding_1(12) . "<br />";

?>
<!-- => 78 -->


<!-- Solution 2 -->
<?php
    
    function simpleAdding_2($num) {
        if ($num == 0) return 0;

        return $count = $num + simpleAdding_2($num - 1);
    }

    echo "Solution 2: ", simpleAdding_2(12), "<br />";
    echo "Solution 2: " . (string)simpleAdding_2(12) . "<br />";

?>
<!-- => 78 -->