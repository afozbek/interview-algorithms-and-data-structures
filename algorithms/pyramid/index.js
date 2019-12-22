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

function pyramid(n, row = 0, column = 0, stair = '') {
    const mid = Math.floor((2 * n - 1) / 2);
    if (n === row) {
        return;
    }
    if (stair.length === 2 * n - 1) {
        console.log(stair);
        return pyramid(n, row + 1);
    }
    // const add = stair.length <= row ? '#' : ' ';
    //We can use stair.length instead column but I think it is more clear now!
    if (mid - row <= column && mid + row >= column) {
        stair += '#';
    }
    else {
        stair += ' ';
    }
    pyramid(n, row, column + 1, stair);
}
module.exports = pyramid;

//MySol
// function pyramid(n) {
//     const str = '#'; const space = ' ';
//     let totalStr = '';
//     for (let row = 0; row < n; row++) {
//         let copyStr = space.repeat(n - row - 1);
//         totalStr = copyStr + str.repeat(2 * row + 1) + copyStr;
//         console.log(totalStr);
//     }
// }

//MySol2-Recursive
// function pyramid(n, row = 0, column = 0, stair = '') {
//     const mid = Math.floor((2 * n - 1) / 2);
//     if (n === row) {
//         return;
//     }
//     if (stair.length === 2 * n - 1) {
//         console.log(stair);
//         return pyramid(n, row + 1);
//     }
//     // const add = stair.length <= row ? '#' : ' ';
//     if (mid - row <= column && mid + row >= column) {
//         stair += '#';
//     }
//     else {
//         stair += ' ';
//     }
//     pyramid(n, row, column + 1, stair);
// }
// function pyramid(n) {
//     const mid = Math.floor((2 * n - 1) / 2);
//     for (let i = 0; i < n; i++) {
//         let str = '';
//         for (let j = 0; j < 2 * n - 1; j++) {
//             if (mid - i <= j && mid + i >= j) {
//                 str += '#';
//             }
//             else {
//                 str += ' ';
//             }
//         }
//         console.log(str);
//     }
// }