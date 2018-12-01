// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // /[matched characters]/g-->non stop i-->case like upperCase
    const arr = str.match(/[aeiou]/gi)
    return arr ? arr.length : 0;
}
module.exports = vowels;

//My solution
// function vowels(str) {
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if (isVowel(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// function isVowel(ch) {
//     if (ch == 'a' || ch == 'e' || ch == 'o' || ch == 'u' || ch == 'i') {
//         return true;
//     }
//     return false;
// }

//1-
// function vowels(str) {
//     let count = 0;
//     let _vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let char of str.toLowerCase()) {
//         if (_vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }