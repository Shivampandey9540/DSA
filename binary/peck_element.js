

function findPeak(arr) {


    let low = 0;
    let high = arr.length - 1

    // console.log(arr[low] , arr[low + 1])
    if (arr[low] > arr[low + 1] || low == high) {
        return low
    }
    if (arr[high] > arr[high - 1]) {
        return high
    }
    low = low + 1
    high = high - 1

    // console.log(arr[mid] > arr[mid + 1], arr[mid - 1])
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid
        }

        else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

}



// console.log("first index", findPeak([7, 6, 5, 4, 3, 2, 1]))
// console.log("last Index", findPeak([1, 2, 3, 4, 5, 6, 7]))
// console.log( findPeak([1, 2, 3, 1]))
// console.log( findPeak([1]))
console.log(findPeak([3, 4, 3, 2, 1]))