// let arr = [-1, -100, 3, 99];
let arr = [1, 2, 3, 4, 5, 6, 7];
// let arr = [1, 2, 3, /**/ 4, 5, 6];

// left rotate :-  4, 5, 6,    1, 2, 3
//right rotate : - 6, 5, 4,    3, 2, 1
let d = 3;

function reverse(arr, start, end) {
  while (start < end) {
    // console.log(arr[start], arr[end]);
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

// console.log(reverse(arr, 0, 2));

function leftRoatedArray(arr, k) {
  reverse(arr, 0, k - 1); // 0 + k-1
  reverse(arr, k, arr.length - 1); // k +  n
  reverse(arr, 0, arr.length - 1); // n
  console.log(arr);
}

// leftRoatedArray(arr, d);

function rightRoatedArray(arr, n, k) {
  if (n == 0) return;
  k = k % n;
  if (k > n) return;
  let temp = [];
  for (let i = n - k; i < n; i++) {
    temp[i - n + k] = arr[i];
  }
  for (let i = n - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i];
  }

  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }
return arr
}
console.log(rightRoatedArray(arr, 7, 2));
