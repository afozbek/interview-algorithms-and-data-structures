// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//Possible solution return str.split('').reverse().join('') 
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;

//Not Recommended!!! 
// let result = []
// for (let i = str.length; i >= 0; i--) {
//     result.push(str[i]);
// }
// //With join you can return an string array to a string
// return result.join('');

// let reversed = '';

// for (let character of str) {
//     reversed = character + reversed;
// }
// return reversed;