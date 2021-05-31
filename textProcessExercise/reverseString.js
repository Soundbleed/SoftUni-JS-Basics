function solve(snt) {

    let halfSize = snt.length / 2
    let firstHalf = snt.slice(0, halfSize)
    let secondHalf = snt.slice(halfSize)

    firstHalf = firstHalf.split('').reverse().join('')
    secondHalf = secondHalf.split('').reverse().join('')
    console.log(firstHalf)
    console.log(secondHalf)

}

solve('tluciffiDsIsihTgnizamAoSsIsihT')