function solve(elements) {
    let resultArr = []
    let operations = Math.ceil(elements.length / 2)

    for (let i = 0; i < operations; i++) {
        resultArr[i] = elements[elements.length - 1 - i]
        resultArr[elements.length - 1 - i] = elements[i]
    }
    console.log(resultArr.join(" "));
}

solve(['abc', 'def', 'hig', 'klm', 'nop'])