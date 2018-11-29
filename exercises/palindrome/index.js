// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    if (str.split('').reduce((rev, val) => val + rev, '') === str)
        return true;
    return false;
}

module.exports = palindrome;
   //1-
//    function palindrome(str) {
//     if (str.split('').reduce((rev, val) => val + rev, '') === str)
//         return true;
//     return false;
// }