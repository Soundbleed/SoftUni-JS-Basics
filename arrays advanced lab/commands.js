function command(arr) {

    let text = arr.shift()
    let textArr = []
    let element = ""
    for (i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            textArr.push(element)
            element = ""
            continue;
        }
        element += text[i]
    }
    textArr.push(element)

    let numArr = textArr.map(Number)
    let textArr2 = text.split(' ')
    let numArr2 = textArr2.map(Number)

    for (i = 0; i < arr.length; i++) {
        let [command, num1, num2] = arr[i].split(" ")
        num1 = Number(num1)
        num2 = Number(num2)
        switch (command) {
            case "Add": add(numArr2, num1); break;
            case "Remove": remove(numArr2, num1); break;
            case "RemoveAt": removeAt(numArr2, num1); break;
            case "Insert": insert(numArr2, num1, num2); break;
        }
    }

    console.log(numArr2.join(" "))

    function add(array, number) {
        array.push(number)
    }

    function remove(arr, num) {
        arr = arr.filter(x => x !== num)
        numArr2 = arr
    }

    function removeAt(arr, index) {
        arr.splice(index, 1)
    }

    function insert(arr, num, index) {
        arr.splice(index, 0, num)
    }


}

command(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)