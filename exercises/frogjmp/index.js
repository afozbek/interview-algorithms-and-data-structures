// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// /**
//  *
//  * @param {Number} X
//  * @param {Number} Y
//  * @param {Number} D
//  */
// function solution(X, Y, D) {
//     if (X === Y) {
//         return 0;
//     }
//     let currentDest = X;
//     let step = 0;
//     while (currentDest < Y) {
//         currentDest += D;
//         step++;
//     }
//     return step;
// }

/**
 *
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} D
 */
function solution(X, Y, D) {
    if (X === Y) {
        return 0;
    }
    let distance = Y - X;
    let step = Math.floor(distance / D);
    return distance % D === 0 ? step : step + 1;
}

console.log(solution(20, 55, 30));
