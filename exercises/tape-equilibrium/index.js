// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/**
 *
 * @param {Array} A
 */
// O(n)
function solution(A) {
    let n = A.length;
    let totalResult = 0;

    for (let i = 0; i < n; i++) {
        totalResult += A[i];
    }
    let minResult = Number.MAX_SAFE_INTEGER;
    let leftResult = 0;
    for (let i = 1; i < n; i++) {
        leftResult += A[i - 1];
        let loopResult = Math.abs(2 * leftResult - totalResult); // leftResult - (totalResult -leftResult)
        if (loopResult < minResult) {
            minResult = loopResult;
        }
    }
    return minResult;
}

console.log(solution([1, 2, 3, 4]));
