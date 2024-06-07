/**
 * quick sorting 
 */
let word = ['aobcdh', 'aibcdh', 'aacbdh', 'cfghjd', 'cighjd', 'aabcdh'];

function partition(arr, low, high) {
    let pivot = arr[high];

    let n = low - 1
    for (let s = low; s <= high - 1; s++) {
        if (arr[s] < pivot) {
            n++
            let temp = word[s]
            word[s] = word[n]
            word[n] = temp
        }
    }
    let temp = word[high]
    word[high] = word[n + 1]
    word[n + 1] = temp
    return n + 1
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high)
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)
    }
}

let arr = [10, 7, 8, 9, 1, 5];
let n = arr.length;
let value = quickSort(arr, 0, n - 1)
console.log(arr, word)