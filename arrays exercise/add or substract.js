function solve(arr) {

    let newArray = []
    let newSum = 0
    let oldSum = 0

    for (index in arr) {
        oldSum += arr[index]
        if (arr[index] % 2 === 0) {
            newArray[index]= Number(arr[index]) + Number(index)
        } else {
            newArray[index]= arr[index] - index
        }
    }

    for (element of newArray){
        newSum+=element
    }
    console.log(newArray);
    console.log(oldSum);
    console.log(newSum);
}

solve([5, 15, 23, 56, 35])