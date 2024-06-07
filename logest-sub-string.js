function longsubstring(str) {

    /**
     * str hold the all values her 
     * l is for the last index which was removed
     * k is the value  which are itrating on 
     * set is the holder for this 
     * res has the hightest count for the number
     * while loop to manage the pre existing of any string removal
     * and for for loop for iteration for string
     * math is to just check if new length is greater then the lst one
     */
    let set = new Set()
    let l = 0;
    let res = 0
    for (let k = 0; k < str.length; k++) {
        while (set.has(str[k])) {
            set.delete(str[l])
            l += 1

        }
        set.add(str[k])
        res = Math.max(res, k - l + 1)

    }
    return res
}


let value = longsubstring('abcabcda')
console.log(value)