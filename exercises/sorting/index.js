// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowerIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowerIndex]) {
                lowerIndex = j;
            }
        }
        if (lowerIndex !== i) {
            const smaller = arr[lowerIndex];
            arr[lowerIndex] = arr[i];
            arr[i] = smaller;
        }
    }
    return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
