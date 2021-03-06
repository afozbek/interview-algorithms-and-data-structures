// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(func) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = func.apply(this, args)
        cache[args] = result;
        return result;
    };
}
/*Time Complexity with recursive 2^n*/
function slowFib(n) {

    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
const fib = memoize(slowFib);

module.exports = fib;


/*TIME COMPLEXITY --> n^2*/
// function fib(n) {
//     let myFib = createFib(n);
//     return myFib[n];
// }
// function createFib(num) {
//     let fibArr = [0, 1];
//     for (let i = 2; i < num + 1; i++) {
//         let value = fibArr[i - 1] + fibArr[i - 2];
//         fibArr.push(value);
//     }
//     return fibArr;
// }