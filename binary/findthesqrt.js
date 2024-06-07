//brute
function findSqrtOfInteger(intValue) {
  let ans = 1;

  for (let root = 0; root < intValue; root++) {
    if (root * root <= intValue) {
      ans = root;
    } else {
      break;
    }
  }
  return ans;
}

// console.log(findSqrtOfInteger(28));

//binary Search
function findSqrtOfIntegerBinary(intValue) {
  let low = 0;
  let high = intValue;
  let ans = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid <= intValue) {
      ans = mid;
      low = mid + 1;
    }
    if (mid * mid > intValue) {
      high = mid - 1;
    }
  }
  console.log(ans);
}

// findSqrtOfIntegerBinary(28);

function findMultipler(value, n, intValue) {
  if (n <= 1 || n > intValue) {
    // console.log(value, intValue)
    return value;
  }
  return value * findMultipler(value, n - 1, intValue);
}
// console.log(findMultipler(4, 2));

function findNthRoot(intValue, n) {
  let low = 0;
  let high = intValue;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let root = findMultipler(mid, n, intValue);

    if (root == intValue) {
      ans = mid;
      break;
    } else if (root > intValue) {
      high = mid - 1;
    } else if (root < intValue) {
      //   console.log();
      low = mid + 1;
    }
  }
  console.log(ans);
}

findNthRoot(898989, 199);
