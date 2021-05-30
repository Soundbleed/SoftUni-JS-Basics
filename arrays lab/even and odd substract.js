function solve(strings) {
    let even = 0
    let odd = 0

    for (string of strings) {
        let currentNum = Number(string)
        if (currentNum % 2 === 0) {
            even += currentNum
        } else{
            odd += currentNum
        }
    }

    let result = even - odd

    console.log(result)

}

solve(['1', '2', '3', '4', '5', '6'])