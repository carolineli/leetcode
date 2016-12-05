// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".
// -------------------------------------------------------------

/**
 * @param {string} s
 * @return {string}
 */

var reverseString = function(s) {
    var arr = s.split("");
    var i, j, tmp;
    i = 0;
    j = arr.length - 1;
    while (i < j) {
        tmp = arr[i];
        arr[i++] = arr[j];
        arr[j--] = tmp;
    }
    return arr.join("");
    
};


var reverseString = function(s) {
    return s.split("").reverse().join();
}