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

console.log("TCL: selectionSorted", selectionSort(smallArr));
