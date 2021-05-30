function solve(arr) {

    // sort ascending
    arr.sort((a, b) => a - b)
    let copy = arr.slice()
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let biggest = copy.pop()
        let smallest = copy.shift()
        result.push(biggest,smallest)
    }

    console.log(result.join(" "))

    // // take half arrays
    // let first = arr.slice()
    // let second = first.splice(first.length / 2)

    // // sort descending second half

    // second.sort((a, b) => a - b)

    // // splice second half on odd indexes
    // let index = 0
    // for (let i = 0; i < arr.length; i++) {
    //     let element = second[index]
    //     if (i % 2 !== 0 || i === 1) {
    //         first.splice(i, 0, element)
    //         index++
    //     }
    // }
    // console.log(first.join(" "))

}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])