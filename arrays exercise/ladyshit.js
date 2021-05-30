function solve(arr) {

    let newArr = []
    let length = arr.shift()
    newArr.length = length
    let ladyPosition = arr.shift()
    for (let i = 0; i < ladyPosition.length; i++) {
        let bugIndex = ladyPosition[i]
        if (bugIndex > newArr.length || bugIndex < 0 || bugIndex === ' ') {
            continue;
        } else {
            newArr[bugIndex] = 1
        }
    }

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 1) {
            continue;
        } else {
            newArr[i] = 0
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let textCommand = arr[i]
        let index = 0
        let command = ""
        let move = 0
        let spaces = 0
        for (let i = 0; i < textCommand.length; i++) {
            if (textCommand[i] === ' ') {
                spaces++
                continue;
            }
            if (spaces === 0) {
                index += Number(textCommand[i])
            } else if (spaces === 1) {
                command += textCommand[i]
            } else {
                move += Number(textCommand[i])
            }


        }
        if (index <= newArr.length && command === 'left' && newArr[index] === 1) {
            for (let i = index; i >= 0 || i < newArr.length; i -= move){
                newArr[index] = 0
                if (newArr[i] === 1){
                    continue;
                } else {
                    newArr[i] = 1
                    break;
                }
            }
        } else if (index <= newArr.length && command === 'right' && newArr[index] === 1) {
            for (let i = index; i >= 0 && i < newArr.length; i += move){
                if (newArr[i] === 1){
                    newArr[index] = 0
                    continue;
                } else {
                    newArr[i] = 1
                    break;
                }
            }
        }

    }

    console.log(newArr.join(' '));
}

solve([3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1'
]
)