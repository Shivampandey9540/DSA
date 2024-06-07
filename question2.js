let e = {
    "e": 1, "b": 2, "c": 3, "d": 4, "i": 5, "f": 6, "g": 7, "h":
        8, "o": 9, "j": 10, "k": 11, "l": 12, "m": 13, "n": 14, "u": 15, "p":
        16, "q": 17, "r": 18, "s": 19, "t": 20, "a": 21, "v": 22, "w": 23,
    "x": 24, "y": 25, "z": 26,
};
let word = ['aobcdh', 'aibcdh', 'aabcdh', 'aacbdh', 'cfghjd', 'cighjd'];
const compare = (x, y) => {
    let av;
    let bv;
    let n = x.length;
    let result = 0;
    if (x.length > y.length) {
        let n = y.length;
    }
    for (let k = 0; k < n; k++) {
        av = x[k];
        bv = y[k];
        if (av != bv) {
            if (k == 1) {
                if (e[av] > e[bv]) {
                    result = 1;
                    break;
                }
            } else {
                if (av > bv) {
                    result = 1;
                    break;
                }
            }
            break;
        }
    }
    return result;
}
const bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (compare(inputArr[j], inputArr[j + 1]) == 1) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};
console.log(bubbleSort(word));