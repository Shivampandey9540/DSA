let arr = [1, 2, 3, 5, 6, 7]



let end_of_chan = 7


let sum_of_chan = end_of_chan * (end_of_chan + 1) / 2

for (let i = 0; i < arr.length; i++) {
    sum_of_chan = sum_of_chan - arr[i]
}
console.log(sum_of_chan)