let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
var maxArea = function (arr) {
    let result = 0
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        let height = 0
        let width = 0
        if (arr[left] > arr[right]) {
            height = arr[right]
        } else {
            height = arr[left]
        }


        width = right - left


        if (result < (height * width)) {
            value = [height, width, right, left, arr[right], arr[left]]
            result = height * width
        }
        if (arr[left] < arr[right]) {
            left += 1
        } else {
            right -= 1
        }

        // counter -= 1
    }

    return result

};
console.log(

    maxArea(arr)
)




// let result = 0
// for (let itr = 0; itr < arr.length; itr++) {

//     for (let itr2 = itr; itr2 < arr.length; itr2++) {

//         let width = itr2 - itr
//         let height = 0;
//         if (arr[itr2] > arr[itr]) {
//             height = arr[itr]
//         } else {
//             height = arr[itr2]
//         }
//         let temp = width * height
//         if (result < temp) {
//             result = temp
//         }
//         // console.log(itr2-itr)

//     }

// }
// console.log(result)
