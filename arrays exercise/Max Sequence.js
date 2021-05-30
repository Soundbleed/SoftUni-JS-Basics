function solve(arr) {

    let newArr = []
    let value = 0
    let needValue = 0
    let counter = 1
    let highCount = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] !== arr[j]) {
                counter = 1
                break;
            }
            else if (arr[i] === arr[j]) {
                counter++
                value = arr[i]
            }
            if (counter > highCount) {
                highCount = counter
                needValue = value
            }
        }
    }
    for (let i = 0; i < highCount; i++) {
        newArr.push(needValue)
    }
    console.log(newArr.join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])