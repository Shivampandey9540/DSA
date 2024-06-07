

let check_string = "babad"

let arry = []
let currentval = ""
for (let k of check_string) {
    currentval = currentval + k
    arry.push(currentval)
}

// console.log(arry)
for (let k = 0; k < arry.length; k++) {
    for (let j = 0; j < arry[k].length/2; j++) {
        // console.log(arry[k][j])
    }
    console.log("\n")
}