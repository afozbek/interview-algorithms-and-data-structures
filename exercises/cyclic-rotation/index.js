// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/**
 *
 * @param {Array} A An Array of numbers
 * @param {*} K A shifted value
 */
// Time Complexity O(N)
function solution(A, K) {
    let n = A.length;
    if (n <= 1 || K % n === 0) return A;
    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
    }
    return A;
}

console.log(solution([1, 3, 5, 7], 8));
