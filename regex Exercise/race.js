function solve(arr) {
    let regexChars = /[A-Za-z]/g
    let regexDigits = /[0-9]/g
    let participantsArr = arr.shift().split(', ')
    let line = arr.shift()
    let asocArr = {}

    for (racer of participantsArr){
        asocArr[racer] = 0
    }

    while (line !== 'end of race') {
        
        let name = line.match(regexChars).join('')
        let runned = line.match(regexDigits).map(Number).reduce((a, b) => a + b, 0)

        if (participantsArr.includes(name)){
            asocArr[name] += runned
        }

        line = arr.shift()
    }
    let sorted = Object.keys(asocArr).sort((a,b) => asocArr[b] - asocArr[a])
    console.log(`1st place: ${sorted[0]}`)
    console.log(`2nd place: ${sorted[1]}`)
    console.log(`3rd place: ${sorted[2]}`)
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]
)