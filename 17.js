
function combined(letter, arr) {

    if (arr.length === 0) {
        return letter
    }

    letter = letter + arr.shift()
    combined(letter, arr)
}
var letterCombinations = function (digits) {
    let digits_map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", 'k', "l"],
        6: ["m", "n", "0"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }

    let full_digits = digits.split("")
    let arr = []
    for (let itr = 0; itr < full_digits.length; itr++) {
        arr.push(digits_map[full_digits[itr]])
    }

};


letterCombinations("23")