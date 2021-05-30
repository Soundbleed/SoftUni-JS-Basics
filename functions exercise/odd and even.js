function solve(number) {

    let evenNums = getOddandEven(number, 'even')
    let oddNums = getOddandEven(number, 'odd')

    let evenSum = sumNums(evenNums)
    let oddSum = sumNums(oddNums)

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

    function getOddandEven(n, type) {
        let oddNumbers = []
        let evenNumbers = []

        while (n > 0) {
            let lastDigit = n % 10
            if (n % 2 === 0) {
                evenNumbers.push(lastDigit)
            } else if (n % 2 !== 0) {
                oddNumbers.push(lastDigit)
            }

            n = Math.trunc(n / 10)
        }

        if (type === 'even') {
            return evenNumbers
        } else if (type === 'odd') {
            return oddNumbers
        }
    }
    function sumNums(arr) {
        let sum = 0
        for (number of arr) {
            sum += number
        }
        return sum
    }

}

solve(3495892137259234)