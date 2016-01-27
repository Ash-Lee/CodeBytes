<!-- PHP ===================================================================================
    3 - Longest Word
    Create a function which returns the largest word in a string.
    If there are two or more words that are the same length, return the first word.
    Ignore punctuation and assume the string parameter will not be empty.
======================================================================================== -->


<!-- Solution 1 -->
<?php
    function longestWord($sen) {
        $words = str_word_count($sen, 1);
        $word = $words[0];
        
        foreach ($words as $val) {
            $wordLength = strlen($word);
            $valLength = strlen($val);
                
            if ($valLength > $wordLength) {
                $word = $val;
            } else {
                continue;
            }
        }
    
        return $word;
    }

    echo "Solution 1: " . longestWord("I love dogs") . "<br />";
?>
<!-- => "love" -->


<!--
  Notes
    * No need to manually remove punctuation when using str_word_count(). -->