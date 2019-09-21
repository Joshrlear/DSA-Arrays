merge = (arr1, arr2) => {
    let done = 0
    // push one value each time till that arr is completely copied to mainArr
    arr1.length > i ? mainArr.push(arr1[i]) : done += 1
    arr2.length > i ? mainArr.push(arr2[i]) : done += 1
    if (done !== 2) {
        // general case
        if (mainArr[mainArr.length - 2] > mainArr[mainArr.length - 1]) {
                temp = mainArr[mainArr.length - 1]
                mainArr[mainArr.length - 1] = mainArr[mainArr.length - 2]
                mainArr[mainArr.length - 2] = temp
            }
    }
    // base case
    else { return '' }

    // track loop count
    i++
    
    merge(arr1, arr2)
    return mainArr
}

let i = 0
let mainArr = []
const arr1 = [1, 3, 6, 8, 11]
const arr2 = [2, 3, 5, 8, 9, 10]
console.log({
    mergedArray: merge(arr1, arr2),
    ticks: i
})