var twoSum = function (nums, target) {
    let memo = new Map()
    let result = [];
    // console.log(nums.length)
    for (let k = 0; k <= nums.length - 1; k++) {
        console.log(memo)
        if (memo.has(nums[k])) {
            result = [memo.get(nums[k]), k]
            return result
        }
        let outNumber = target - nums[k]

        memo.set(outNumber, k)


    }
    return result
};

let result = twoSum([2, 0, 11, 10, 8, 15], 9)
console.log(result)


