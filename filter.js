filter = arr => {
    // base case
    if (arr.length === 0) { return '' }

    // remove vals less than 5
    arr[0] >= 5 && filteredArr.push(arr[0])

    // rerun till length = 0
    filter(arr.slice(1))

    // return when all functions finish
    return filteredArr
}

// create filtered array
let filteredArr = []
const arr = [4,12,9,72,13,0,22,0,4]
console.log(filter(arr))