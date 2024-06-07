

function multiplyer(str) {
    let stack = []
    // let new_str = ""
    for (let k = 0; k < str.length; k++) {
        if (str[k] != "]") {
            stack.push(str[k])
        }
        else {
            let str2 = ""
            // console.log(stack[stack.length-1])
            while (stack[stack.length - 1] != "[") {
                str2 = str2 + stack.pop(0)
            }
            stack.pop(0)
            let num = ""

            let current_stack_value = stack[stack.length - 1]

            while (parseInt(current_stack_value) && typeof parseInt(current_stack_value) === 'number') {
                stack.pop(0)
                num = current_stack_value + num
                current_stack_value = stack[stack.length - 1]
            }

        //   console.log((  parseFloat("123456789")* parseFloat("987654321")))
            // console.log("out of loop", num)
            for (let sp = 1; sp < num; sp++) {
                str2 = str2 + str2
            }
            stack.push(str2)
        }

    }
   return stack.pop()
}

let value=
multiplyer("2[2[b]]")
console.log(value)