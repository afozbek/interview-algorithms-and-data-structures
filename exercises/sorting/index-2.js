const { generateRandomNumbers } = require("./utils");

const smallArr = generateRandomNumbers(10);
const bigArr = generateRandomNumbers(1000);

console.log("TCL: smallArr", smallArr);

const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let smallNum = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = smallNum;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            return arr;
        }
    }
    return arr;
};

const selectionSort = arr => {
    for (let i = 0, n = arr.length; i < n; i++) {
        let smallIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[smallIndex]) {
                smallIndex = j;
            }
        }
        // i ile smallIndex yer değiştiriyor
        if (smallIndex !== i) {
            let smallNumber = arr[smallIndex];
            arr[smallIndex] = arr[i];
            arr[i] = smallNumber;
        }
    }
    return arr;
};

const mergeSort = arr => {
    if (arr.length === 1) return arr;
    let center = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, center);
    let secondHalf = arr.slice(center);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

const merge = (leftArr, rightArr) => {
    const results = [];
    let i = 0;
    // Loop through arrays and sort them according to order
    while (leftArr.length && rightArr.length) {
        if (leftArr[i] <= rightArr[i]) {
            results.push(leftArr.shift());
        } else {
            results.push(rightArr.shift());
        }
    }
    // ıf one element remaining in left or right we add to end of the arr
    // Beacuse it is the biggest number
    return [...results, ...leftArr, ...rightArr];
};

console.log("TCL: mergeSorted", mergeSort(smallArr));
