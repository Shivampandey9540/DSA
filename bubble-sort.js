

function BubbleSort(arr) {


    for (let k = 0; k < arr.length; k++) {

        for (let i = k + 1; i < arr.length; i++) {
            if (arr[k] > arr[i]) {
                // arr[i], arr[k] = arr[k], arr[i]
                let temp = arr[i]
                arr[i] = arr[k]
                arr[k] = temp
            }
        }

    }

    return arr
}

// console.log(BubbleSort([89, 10, 19, 110, 1, 10]))

// function swap(a, b) {
//     b, a = a, b
//     // console.log({a,b})
//     // // b = b + a;
//     // // a = a - b
//     // b = b + a
//     // a = b - a
//     // b = b - a
//     console.log({ b, a })
// }
// swap(10, 20)
// let a = 10;
// let b = 20;

// b = a + b

// a = b - a
// a = 20

// b = 30

// b = b - a
// console.log(b == 10)