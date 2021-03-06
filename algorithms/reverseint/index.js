// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Much cleaner Math.sign(number) returns 0 -1 or 1
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n);
}
module.exports = reverseInt;

//My solution 
// function reverseInt(n) {
//     const s = Math.sign(n);
//     if (s == 1 || s == 0) return parseInt(n.toString().split('').reverse().join(''));
//     else {
//         n = n * -1
//         return parseInt(n.toString().split('').reverse().join('')) * -1;
//     }
// }