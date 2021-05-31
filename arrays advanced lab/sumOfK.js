function sumOfK(n, k) {
    let result = [1]

    for (i = 1; i < n; i++) {
        let current = result.slice(-k)
        result[i] = 0
        for (element of current) {
            result[i] += element
        }

    }

    console.log(result.join(' '))

}

sumOfK(8, 2)