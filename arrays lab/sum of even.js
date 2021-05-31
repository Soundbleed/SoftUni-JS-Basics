function solve(strings) {
    let result = 0

    for (string of strings) {
        let currentNum = Number(string)
        if (currentNum % 2 === 0) {
            result += currentNum
        }
    }

    console.log(result)

}

solve(['1', '2', '3', '4', '5', '6'])