// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//array.slice(st, fn) method copy some elements from index to given index
//If we have slice(2, 4) and our array.length = 3 
//we only get array[2] and there will be no error perfect!
function chunk(array, size) {
    const myArr = [];
    let index = 0;
    while (index < array.length) {
        let sliced = array.slice(index, index + size);
        // console.log(sliced);
        myArr.push(sliced);
        index = index + size;
    }
    return myArr;
}
// chunk([1, 2, 3, 4, 5, 6, 7], 3);
module.exports = chunk;

//Deneme1
//      let myArr = []
//     let subArr = []
//     let a = 0;
//     while (array.length < size) {
//         for (let i = 0; i < size; i++) {
//             subArr.push(array.shift());
//         }
//         myArr[a] = new Array(subArr.length);
//         myArr[a].push(subArr);
//         a++;
//         subArr = [];
//     }
//     if (array.length > 0) myArr.push(array);
//     return myArr;

//---
//Complex ..
// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
//         console.log(last);
//         if (!last || last.length === size) {
//             chunked.push([element]);
//         }
//         else {
//             last.push(element);
//         }
//         console.log(chunked);
//     }
//     return chunked;
// }