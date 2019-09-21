console.log('www.thinkful.com /tauh ida parv een'.replace(/\s/g, '%20'))


urlifyForLoop = (input) => {
    // create array to parse value one at a time
    const arr = input.split('')
    
    //base case
    if (arr.length === 0) { return }
    
    // detect whitespace. create array without whitespaces
    let scrubbedArr = []
    for (i in arr) { 
        arr[i] === ' ' 
        ? scrubbedArr.push('%20') 
        : scrubbedArr.push(arr[i])
    }
    return scrubbedArr.join('')
}
console.log(urlifyForLoop('www.thinkful.com /tauh ida parv een'))



urlifyRecurrsion = (input) => {
    //base case
    if (input.length === 0) { return '' }
    
    // create array if more
    input.split('')
    
    // replace whitespace
    const checkForWS = input[0] === ' ' ? '%20': input[0]

    // rerun with input - first indexed value then
    // return final string after all functions complete
    return checkForWS + urlifyRecurrsion(input.slice(1))
}
console.log(urlifyRecurrsion('www.thinkful.com /tauh ida parv een'))