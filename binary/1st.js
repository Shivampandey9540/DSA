



let arr = [2, 4, 6, 7, 9, 12, 16, 17]


function Recursive(arr, low, high, search) {
    let mid = Math.floor(low + high / 2)
    console.log( arr[mid]< search, arr[mid],  low, high)
    if (arr[mid] === search) {
        return mid
    }

    if (arr[mid] < search) {
        return Recursive(arr, mid + 1, high, search)
    } else if (arr[mid] > search) { 
        return Recursive(arr, low, mid + 1, search)
    } else {
        return null
    }


}

console.log(Recursive(arr, 0, arr.length - 1, 4))