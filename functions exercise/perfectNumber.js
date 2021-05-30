function solve(n) {

    let result = 0
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            result += i
        }
    }

    if (result === n && result !== 0) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }

}

solve(28)