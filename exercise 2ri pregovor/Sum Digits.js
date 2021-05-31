function Hello(n) {
    let sum = 0
    let shredN = n

    while (shredN > 0) {
        let currentDigit = shredN % 10
        sum += currentDigit
        shredN = Math.trunc(shredN / 10)
    }

    console.log(sum);
}

Hello(245678)