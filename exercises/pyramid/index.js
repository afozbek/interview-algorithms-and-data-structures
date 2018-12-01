// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const mid = Math.floor((2 * n - 1) / 2);
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < 2 * n - 1; j++) {
            if (mid - i <= j && mid + i >= j) {
                str += '#';
            }
            else {
                str += ' ';
            }
        }
        console.log(str);
    }
}
module.exports = pyramid;

//MySol
// function pyramid(n) {
//     const str = '#'; const space = ' ';
//     let totalStr = '';
//     for (let row = 0; row < n; row++) {
//         totalStr =
//             space.repeat(n - row - 1) +
//             str.repeat(2 * row + 1) +
//             space.repeat(n - row - 1);
//         console.log(totalStr);
//     }
// }
