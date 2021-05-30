function substitution(arr) {

    let k = Number(arr.shift())
    let l = Number(arr.shift())
    let m = Number(arr.shift())
    let n = Number(arr.shift())

    let firstNumbers = []
    let secondNumbers = []
    // get first number combo
    for (let i = k; i <= 8; i++) {

        if (i % 2 === 0) {
            var char11 = i
        } else {
            continue;
        }

        for (let i = 9; i >= l; i--) {
            if (i % 2 !== 0) {
                var char12 = i
                let number = `${char11}${char12}`
                firstNumbers.push(number)
            }

        }
    }

    // get second numbers combo
    for (let i = m; i <= 8; i++) {

        if (i % 2 === 0) {
            var char21 = i
        } else {
            continue;
        }

        for (let i = 9; i >= n; i--) {
            if (i % 2 !== 0) {
                var char22 = i
                let number = `${char21}${char22}`
                secondNumbers.push(number)
            }

        }
    }
    // compareand print
    let steps = 1
    for (let i = 0; i < firstNumbers.length; i++) {
        let number1 = Number(firstNumbers[i])
        for (let i = 0; i < secondNumbers.length; i++) {
            let number2 = Number(secondNumbers[i])

            if (steps > 6) {
                break;
            }
            if (number1 === number2) {
                console.log('Cannot change the same player.')
            } else {
                console.log(`${number1} - ${number2}`)
                steps++
            }

        }
    }

}

substitution([ '7', '3', '7', '1', '' ]
)