function solve(input){
    
    let collection = {}
    
    for (let i = 0;i < input.length; i+=2){
        let resource = input[i]
        let quantity = Number(input[i + 1])

        if (!collection.hasOwnProperty(resource)){
            collection[resource] = quantity
        } else {
            collection[resource] += quantity
        }
    }

    let entries = Object.entries(collection);
    for ([key,value] of entries){
        console.log(`${key} -> ${value}`)
    }

}

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )