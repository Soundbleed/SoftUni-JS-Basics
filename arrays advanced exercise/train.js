function solve(arr) {
    let wagons = arr.shift().split(" ").map(Number)
    let capacity = Number(arr.shift())

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]
        let isTrue = command.includes("Add")

        if (isTrue) {
            wagons.push(Number(command.split(" ")[1]))
        } else {
            let n = Number(command)

            for (let j = 0; j < wagons.length; j++) {
                let wagon = wagons[j]
                if (n + wagon <= capacity) {
                    wagons.splice(j, 1, n + wagon)
                    break;
                }


            }
        }

    }

    console.log(wagons.join(" "));
    
}

solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)