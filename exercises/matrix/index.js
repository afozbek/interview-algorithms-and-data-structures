// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//array.push(array1);
function matrix(n) {
    results = createEmptyArray(n);
    let counter = 1;
    let start_col = 0, start_row = 0
    let end_col = n, end_row = n;
    while (start_col <= end_col && start_row <= end_row) {
        for (let i = start_col; i < end_col; i++) {
            results[start_row][i] = counter;
            counter++;
        }
        start_row++;
        for (let i = start_row; i < end_row; i++) {
            results[i][end_col - 1] = counter;
            counter++;
        }
        end_row--;
        for (let j = end_col - 2; j >= start_col; j--) {
            results[end_row][j] = counter;
            counter++;
        }
        end_col--;
        for (let j = end_row - 1; j >= start_row; j--) {
            results[j][start_col] = counter;
            counter++;
        }
        start_col++;
    }
    return results;
}

//Creates an empty array based on the input---> inputXinput matrix
function createEmptyArray(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        let den = []
        for (let j = 0; j < num; j++) {
            den[j] = 0;
        }
        arr.push(den);
    }
    return arr;
}
module.exports = matrix;
