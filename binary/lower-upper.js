// let arr = [1, 4, 6, 6, 6, 7, 9]
// function upperBound(arr, x) {

//     let low = 0;
//     let high = arr.length - 1
//     let ans = arr.length
//     while (low <= high) {

//         let mid = Math.floor((low + high) / 2)

//         if (arr[mid] > x) {
//             ans = mid;
//             high = mid - 1
//         } else {
//             low = mid + 1
//         }

//     }
//     return ans
//     // console.log(ans)
// }
// let HighBound = 8
// /** i need
//  * first = > 6 >= 8
//  */

// // upperBound([1, 3, 6, 7, 9, 10], 7)

// /**
//  * find the first and last occurnice
//  */

// function firstOccur(arr, x, n) {
//     let low = 0;
//     let high = n - 1
//     let ans = -1
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)
//         if (arr[mid] >= x) {
//             ans = mid
//             high = mid - 1
//         } else {
//             low = mid + 1
//         }
//     }
//     return ans
// }

// (function firstLastOccur() {
//     let first = firstOccur(arr, 6, arr.length)
//     if (first === -1) return [-1, -1]
//     let last = upperBound(arr, 6 )
//     console.log(first, last-1)
// })()

function upperBound(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
  // console.log(ans)
}
function firstOccur(arr, x) {
  let low = 0;
  let high = arr.length - 1;

  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) {
      ans = mid;
      high = mid - 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}

// Search for Element   and return its index for First Occur and Last occure
var searchRange = function (nums, target) {
  let first = firstOccur(nums, target);
  console.log(first);
  if (first < 0) return [-1, -1];
  let last = upperBound(nums, target);
  return [first, last - 1];
  // console.log(first, last-1)
};
console.log(searchRange([1, 3, 6, 7, 7, 7, 9, 10], 7));
