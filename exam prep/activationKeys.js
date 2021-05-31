function solve(arr) {
    let key = arr.shift()
    let command = arr.shift()

    let actions = {
        Contains(actionKey, parameters) {
            if (actionKey.includes(parameters)) {
                console.log(`${actionKey} contains ${parameters}`)
            } else {
                console.log("Substring not found!")
            }
            return key;

        },
        Flip(actionKey, parameters) {
            let first = actionKey.substring(0, parameters[1]);
            let second = actionKey.substring(parameters[1], parameters[2]);
            let third = actionKey.substring(parameters[2]);

            if(parameters[0] === 'Upper'){
                second = second.toLocaleUpperCase();
            } else {
                second = second.toLocaleLowerCase();
            }

            result = first + second + third;
            console.log(result);
            return result;
        },
        Slice(actionKey, parameters){
            let first = actionKey.substring(0, parameters[0]);
            let third = actionKey.substring(parameters[1]);

            let result = first + third;
            console.log(result);
            return result;
        }
    }


    while (command !== 'Generate') {

        let [name, ...params] = command.split('>>>')
        key = actions[name](key, params)

        command = arr.shift()
    }

    console.log(`Your activation key is: ${key}`)
}

solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]
)