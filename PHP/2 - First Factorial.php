<!-- PHP ======================================================================================================
2 - First Factorial
Create a function which returns the factorial of a number (i.e. if $num = 4, return "4*3*2*1" or 24).
=========================================================================================================== -->


<!-- Solution 1 -->
<?php

    function firstFactorial_1($num) {  
        $factorial = "";
        
        for ($i = $num; $i > 0; $i--) {
            $factorial .= $i;
            
            if ($i != 1) {
                $factorial .= "*";
            }
        }
        
        return $factorial; 
    }

    echo "Solution 1: " . firstFactorial_1(4) . "<br />";

?>
<!-- => "4*2*3*1" -->


<!-- Solution 2 -->
<?php

    function firstFactorial_2($num) {  
        $factorial = "";

        if ($num == 1) return 1;
        
        return $factorial .= $num . "*" . firstFactorial_2($num - 1);
    }

    echo "Solution 2: " . firstFactorial_2(4) . "<br />";

?>
<!-- => "4*2*3*1" -->


<!-- Solution 3 -->
<?php

    function firstFactorial_3($num) {
        $count = 1;
        
        for ($i = 1; $i <= $num; $i++) {
            $count *= $i;
        }
        
        return $count;
    }

    echo "Solution 3: ", firstFactorial_3(4), "<br />";

?>
<!-- => 24 -->


<!-- Solution 4 -->
<?php

    function firstFactorial_4($num) {
        if ($num == 1) return 1;
        
        return $count = $num * firstFactorial_4($num - 1);
    }

    echo "Solution 4: ", firstFactorial_4(4), "<br />";
    
?>
<!-- => 24 -->


<!--
  Notes
    * Think recursively! - Each recursive call returns a single value. -->