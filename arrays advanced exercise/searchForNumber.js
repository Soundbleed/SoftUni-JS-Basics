function solve(arr, parameters) {
    let taken = arr.slice(0, parameters[0])
    let deleteN = parameters[1]
    let n = parameters[2]
    let count = 0

    taken.splice(0, deleteN)

    for (element of taken) {
        if (element === n) {
            count++
        }
    }

    console.log(`Number ${n} occurs ${count} times.`)

}

solve([5, 2, 4, 1, 6, 3],
    [5, 2, 3]
)