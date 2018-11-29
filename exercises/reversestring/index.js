// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //Temp
    return str.split('').reduce((rev, char) => char + rev, '')
}


module.exports = reverse;

//Not Recommended!!!
// 1-
// function reverse(str) {
//     let result = []
//     for (let i = str.length; i >= 0; i--) {
//         result.push(str[i]);
//     }
//     //With join you can return an string array to a string
//     return result.join('');
// }
//2-
// function reverse(str) {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }

//3-
// function reverse(str) {
//     return str.split('').reverse().join('')
// }
//4-
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '')
// }