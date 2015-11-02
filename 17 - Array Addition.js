// 17 - Array Addition
// Create a function that takes an array of numbers and returns true if any combination of numbers
// within the array can be added up to equal the largest number in the array.
// The array will not be empty, will not contain all the same elements and may contain negative numbers.
// (i.e. [4, 6, 23, 10, 1, 3] = true = 4 + 6 + 10 + 3 = 23 )


// Solution
function arrayAddition(arr) {
    var largestNumber = 0,
        largestIndex,
        chain = [],
        chainValue = 0,
        count = 0;

    // Find largest value
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
            largestIndex = i;
        }
    }

    // Remove largest value from array
    arr.splice(largestIndex, 1);

    // Combination Search
    for (var i = 0; i < arr.length; i++) {
        // Reset chain to a new starting value
        chainValue = arr[i];
        chain = [arr[i]];
        count = 0;

        for (var j = 0; j < arr.length; j++) {
            if (i === j || j === count) {
                continue;
            }

            if (chainValue < largestNumber) {
                chainValue += arr[j];
                chain.push(arr[j]);
                console.log(chain);

                if (chainValue > largestNumber) {
                    chainValue -= arr[j];
                    chain.pop();
                }

                if (j === arr.length - 1 && chainValue !== largestNumber) {
                    chainValue = arr[i];
                    chain = [arr[i]];
                    j = 0;
                    count += 1;
                }

                if (chainValue === largestNumber) {
                    return "combination: " + chain;
                }
            }
        }
    }

    return false;

}

// Output
console.log(arrayAddition([3, 5, -1, 8, 12]));
// => 

console.log(arrayAddition([5, 7, 16, 1, 2]))

/*
 * Notes
 *
 * Solution incomplete - only partially works for small arrays.
 *
 * Subset Sum Problem
 * Research combinations and permutations.
 * Gain more experience with recursion.
 *
 */








function arrayAddition(arr) {
    var largestNumber = 0,
        largestIndex,
        chain = [],
        chainValue = 0,
        count = 0;

    // Find largest value
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
            largestIndex = i;
        }
    }

    // Remove largest value from array
    arr.splice(largestIndex, 1);

    // Combination Search
    for (var i = 0; i < arr.length; i++) {
        // Reset chain to a new starting value
        chainValue = arr[i];
        chain = [arr[i]];
        count = 0;
        console.log(count);

        for (var j = 0; j < arr.length; j++) {
            if (i === j || j === count) {
                continue;
            }

            if (chainValue < largestNumber) {
                chainValue += arr[j];
                chain.push(arr[j]);

                console.log(chain, chainValue);

                if (chainValue > largestNumber) {
                    chainValue -= arr[j];
                    chain.pop();
                    console.log("backtrack", chain);
                }

                if (j === arr.length - 1 && chainValue !== largestNumber) {
                    chainValue = arr[i];
                    chain = [arr[i]];
                    j = 0;
                    count += 1;
                    console.log(count);
                }

                if (chainValue === largestNumber) {
                    return "combination: " + chain;
                }
            }
        }
    }

    return false;

}


//console.log(arrayAddition([3, 5, 11, -1, 8, 12]));
//console.log(arrayAddition([1, 4, 6, 23, 10, 1, 3]));
//console.log(arrayAddition([5, 7, 16, 1, 2]));
console.log(arrayAddition([2.5, 4, 5, 2.5, 10, 15, 10, 20, 30, 80]));