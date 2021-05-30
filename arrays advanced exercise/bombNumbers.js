function bomb(arr, bombarr) {

    let bomb = bombarr.shift()
    let count = bombarr.shift()
    let result = []
    let index = arr.indexOf(bomb) - count
    let deletedNums = count * 2 + 1

    while (arr.includes(bomb)) {
        result += arr.splice(Math.max(index, 0), deletedNums)
        index = arr.indexOf(bomb) - count
    }

    if (arr.length > 0) {
        console.log(arr.reduce((a, b) => a + b))
    } else {
        console.log(0)
    }
}
// for (element of arr) {
//     if (element === bomb) {
//         let index = arr.indexOf(bomb) - count
//         let deletedNums = count * 2 + 1
//         result += arr.splice(index, deletedNums)
//     }
// }
// if (arr.length > 0){
//     console.log(arr.reduce((a, b) => a + b))
// } else {
//     console.log(0)
// }
// }

bomb([4, 2, 8, 9, 1, 1, 1, 2, 2, 9],
    [9, 3])