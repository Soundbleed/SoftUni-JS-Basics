function solve(arr) {
    let object = {}
    for (element of arr) {
        element = JSON.parse(element)
        object = Object.assign(object, element)
    }
    let sortedKeys = Object.keys(object)
    let arrObjects = []
    for (i = 0; i < sortedKeys.length; i++){
        let key = sortedKeys[i]
        let obj = {}
        obj.name = key
        obj.description = object[key]
        arrObjects.push(obj)
    }
    arrObjects.sort((a, b) => a.name.localeCompare(b.name))
    arrObjects.forEach(object =>
        console.log(`Term: ${object.name} => Definition: ${object.description}`)
    )
 }

    solve([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}'
    ]
    )