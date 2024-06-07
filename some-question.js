let string = "2s-s-EAM".split("")

let k = 5
let number_counter = 0;

let number_plat = ""

for (let i = string.length - 1; i >= 0; i--) {
    let v = string.pop()
    if (v !== "-") {
        if (number_counter === k) {
            number_plat = "-" + number_plat
            number_counter = 0;
        }
        number_plat = v.toUpperCase() + number_plat
        number_counter = number_counter + 1

    }

}

// number_plat = string[0] + number_plat
// for (let k = 0; k < number_group_set.length; k++) {

//     if (k == 0) {
//         result = number_group_set[0] + result
//     } else {
//         result = result + "-" + number_group_set[k]
//     }
//     // result = result + "-" + k
// }

console.log(number_plat)

// console.log(string)
// result = string + result