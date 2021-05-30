function solve(input){

    let colors = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }

    let jackToAce = {
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }

    let collection = {}

    for(line of input){
        let[name,hand] = line.split(": ")
        if(!collection.hasOwnProperty(name)){
            collection[name] = []
        }
        hand = hand.split(", ")
        collection[name].push(...hand)
    }

    for (let [key,value] of Object.entries(collection)){
        let unique = new Set(collection[key])
        let total = 0
        let uniqueArr = Array.from(unique)
        for (el of uniqueArr){
            let elements = el.split("")
            let color = elements.pop()
            let powerNum = elements.join("")
            if(isNaN(powerNum)){
                powerNum = jackToAce[powerNum]

            }
            total += colors[color] * Number(powerNum)
        }
        collection[key] = total
        console.log(`${key}: ${collection[key]}`)
    }

    
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )