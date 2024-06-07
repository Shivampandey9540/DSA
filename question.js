let e = {
    "e": 1, "b": 2, "c": 3, "d": 4, "i": 5, "f": 6, "g": 7, "h":
        8, "o": 9, "j": 10, "k": 11, "l": 12, "m": 13, "n": 14, "u": 15, "p":
        16, "q": 17, "r": 18, "s": 19, "t": 20, "a": 21, "v": 22, "w": 23,
    "x": 24, "y": 25, "z": 26,
};


let map = new Map()
let arr2 = []

let answer_two = []
function partition(arr, low, high) {
    let pivot = arr[high];
    // answer_two.push(pivot)
    let n = low - 1
    for (let s = low; s <= high - 1; s++) {
        if (arr[s] < pivot) {
            n++
            let temp3 = arr[s]
            arr[s] = arr[n]
            arr[n] = temp3
        }
    }
    let temp4 = arr[high]
    arr[high] = arr[n + 1]
    arr[n + 1] = temp4
    // answer_two.push(arr[n+1])
    // answer_two.push(arr[high])
    return n + 1
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high)

        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)
        // answer_two.push(arr)
    }
    // answer_two.push(arr)
    return arr
}
function convert(arr) {

    // for(let k =0; k)

    let number = ""

    for (let itr = 0; itr <= arr.length - 1; itr++) {

        for (let k = 0; k < arr[itr].length - 1; k++) {
            if (k == 1) {
                number = number + e[arr[itr][k]]
                continue;
            }
            number = number + arr[itr].charCodeAt(k);
        }
        // console.log(number)
        map.set(number, arr[itr])
        arr2.push(parseInt(number))
        number = ""
    }

    return arr2
}

let word = ['aabcdh', 'aibcdh', 'cighjd', 'aobcdh', 'aacbdh', 'cfghjd',];
// console.log(answer)
let answer = convert(word)

// console.log(answer, word)
let value = quickSort(answer, 0, answer.length - 1)
console.log(value, answer_two)