let first_number_set = [1, 3]

let second_number_set = [2, 4]

// let loop_run_space = Math.max(first_number_set.length, second_number_set.length)
let loop_run_space = first_number_set.length + second_number_set.length

let first_array_itra = 0;
let second_array_itra = 0;
let new_array = []


for (let itra = 0; itra < loop_run_space; itra++) {

    if (first_number_set[first_array_itra] < second_number_set[second_array_itra] || !second_number_set[second_array_itra] && first_number_set[first_array_itra]) {
        new_array.push(first_number_set[first_array_itra])
        first_array_itra += 1
    } else if (second_number_set[second_array_itra] < first_number_set[first_array_itra] || !first_number_set[first_array_itra] && second_number_set[second_array_itra]) {
        new_array.push(second_number_set[second_array_itra])
        second_array_itra += 1
    } else if (second_number_set[second_array_itra] === first_number_set[first_array_itra]) {

        if (!second_number_set[second_array_itra] || !first_number_set[first_array_itra]) {
            continue
        }
        new_array.push(second_number_set[second_array_itra])
        new_array.push(first_number_set[first_array_itra])
        first_array_itra += 1
        second_array_itra += 1
    }
}


let median = Math.max(new_array.length / 2)
let result = 0;
console.log(new_array.length%2)
if (new_array.length % 2) {
    console.log(median)
    result = (new_array[median] + new_array[median + 1]) / 2
} else {
    result = new_array[median]
}


// let median = new_array.length / 2
console.log( result)