function solve(arr) {

    let newArr = []
    let isMax = true

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let firstNum = arr[i]
            let secondNum = arr[j]
            if (firstNum <= secondNum) {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            newArr.push(arr[i])
        }
        isMax = true;
    }

    console.log(newArr.join(' '));
}

solve([1, 4, 3, 2])