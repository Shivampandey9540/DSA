


let arr = [-1, 1, 190, 119, -110, 100]




for (let k = 0; k < arr.length - 1; k++) {
    // console.log(arr[k], arr[k + 1], arr[k] < arr[k + 1])
    if (arr[k + 1] && arr[k] < arr[k + 1]) {
        let temp = arr[k]
        arr[k] = arr[k + 1]
        arr[k + 1] = temp
    }
}



console.log(arr)