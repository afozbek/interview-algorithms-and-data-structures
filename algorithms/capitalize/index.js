// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    }
    return result;
}
module.exports = capitalize;


// function capitalize(str) {
//     let array = str.split('');
//     array[0] = array[0].toUpperCase();
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] === ' ') {
//             array[i + 1] = array[i + 1].toUpperCase();
//         }
//     }
//     return array.join('');
// }
//2-
// function capitalize(str) {
//     let arr = str.split(' ');
//     let index = 0;
//     for (let element of arr) {
//         arr[index] = element.charAt(0).toUpperCase() + element.slice(1)
//         index++;
//     }
//     return arr.join(' ');
// }
//3-
// function capitalize(str) {
//     let arr = []
//     for (let element of str.split(' ')) {
//         arr.push(element[0].toUpperCase() + element.slice(1));
//     }
//     return arr.join(' ');
// }