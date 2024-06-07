
// let arr = [3, 1, 2, 3, 3, 3, 3, 3]
let arr = [1]
// let arr = [3, 3, 1, 3, 3, 3, 3]
// let arr = [2, 5, 6, 1, 2]
// let arr = [1,2,1]
// let arr = [10, 11, 18, 1, 3, 5, 6, 7]


// function roatedArray(arr, target) {
//     let low = 0;
//     let high = arr.length - 1

//     // console.log(new Date())
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)

//         if (arr[mid] === target) {
//             return mid
//         }


//         if (arr[low] === arr[mid] && arr[mid] === arr[high]) {

//             low += 1
//             high -= 1
//             continue;
//         }
//         else if (arr[low] <= arr[mid]) {
//             if (arr[low] <= target && target <= arr[mid]) {
//                 high = mid - 1
//             } else {
//                 low = mid + 1
//             }
//         } else {
//             if (arr[mid] <= target && target <= arr[high]) {
//                 low = mid + 1
//             } else {
//                 high = mid - 1
//             }
//         }
//     }

//     return -1
// }


// How to find the 
// function findMinInRoatedArray(arr, n) {
//     let low = 0;
//     let high = n - 1
//     let ans = Infinity
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)

//         if (arr[low] === arr[mid] && arr[mid] === arr[high]) {

//             low += 1
//             high -= 1
//             continue;
//         }
//         if (arr[low] <= arr[high]) {
//             ans = Math.min(ans, arr[low])
//             break
//         }
//         if (arr[low] <= arr[mid]) {
//             ans = Math.min(ans, arr[low])
//             // console.log(low)
//             low = mid + 1
//         } else {
//             ans = Math.min(ans, arr[mid])
//             high = mid - 1
//         }
//     }
//     console.log(ans)
// }
// // findMinInRoatedArray(arr, arr.length)




function findMinValueInRoatedArray(nums) {
    let low = 0;
    let high = nums.length - 1;
    let ans = Infinity;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        // console.log(low, high)

        if (nums[low] <= nums[mid]) {
            // console.log(ans)
            ans = Math.min(ans, nums[low])
            // console.log(low)
            if (arr[low] === arr[mid] && arr[mid] === arr[high]) {
                // console.log(low, high)
                low += 1
                high -= 1

                // console.log("hello", low, high)
                continue;
            }
            low = mid + 1
        }

        else {
            // console.log(ans)
            ans = Math.min(ans, nums[mid])
            high = mid - 1
        }
    }

    return ans
}
console.log(

    findMinValueInRoatedArray(arr)
)