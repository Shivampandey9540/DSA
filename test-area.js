

function flip(arr, i) {
    let temp, start = 0;

    // console.log(arr)
    while (start < i) {
        temp = arr[start]
        arr[start] = arr[i]
        arr[i] = temp
        start++;
        i--;
    }
    // console.log("hello2", arr)
    return arr
}

/**
 * find the index of max value
 */
function findMax(arr, n) {
    let mi, i;
    // console.log(arr[i], arr[mi])
    for (mi = 0, i = 0; i < n; i++) {
        if (arr[i] > arr[mi]) {
            mi = i
        }
    }
    // console.log("hello1", mi)
    return mi
}
// print()
let arr = [89, 11, 10, 18, 18, 199]


// console.log(findMax(arr, arr.length))

// console.log(
// )
function pancake(arr, n) {
    for (let current_size = n; current_size > 1; --current_size) {
        let mi = findMax(arr, current_size);

        if(mi!= current_size){
            flip(arr, mi)
            flip(arr, current_size -1)
        }
    }
    // console.log(arr)
}

pancake(arr, arr.length)
console.log(arr)