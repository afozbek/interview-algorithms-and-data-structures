// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/**
 *
 * @param {Array} A An array of numbers
 */
// O(n)
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const numberObj = {};
    for (let i = 1, n = A.length + 2; i < n; i++) {
        numberObj[i] = i;
    }

    for (let i = 0, n = A.length; i < n; i++) {
        if (numberObj[A[i]]) {
            delete numberObj[A[i]];
        }
    }
    return Object.values(numberObj)[0];
}

console.log(solution([1, 2, 3, 6, 5]));
