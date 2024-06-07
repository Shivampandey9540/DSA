
let arr = [1, 3]
let arr2 = [2]

let left = 0;
let right = 0;
let new_arr = []

while (left < arr.length && right < arr2.length) {
    if (arr[left] > arr2[right]) {
        new_arr.push(arr2[right])
        right += 1
    } else if (arr[left] < arr2[right]) {
        new_arr.push(arr[left])
        left += 1
    } else {
        new_arr.push(arr[left])
        new_arr.push(arr2[right])
        left += 1
        right += 1
    }
}


if (left > right) {
    new_arr.push(...arr2.splice(right, arr2.length))
} else if (right > left) {
    new_arr.push(...arr.slice(left, arr.length))

}

console.log(new_arr)
let high = new_arr.length - 1


let mediun_index = high / 2
if (high % 2 === 0) {
    mediun_index = new_arr[mediun_index]
} else {
    let first = Math.floor(mediun_index)
    let second = Math.ceil(mediun_index)
    console.log(new_arr[first]+ new_arr[second] )
    mediun_index = (new_arr[first] + new_arr[second]) / 2
}
// console.log(mediun_index)