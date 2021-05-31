function solve(n1, n2, n3) {

    let add = (a, b) => a + b;
    let sum = add(n1,n2)
    let subtract = (a, b) => a - b;
    let result = subtract(sum, n3)

    console.log(result)

}

solve(16, 9, 10)