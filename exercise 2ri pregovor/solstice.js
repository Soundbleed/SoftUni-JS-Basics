let helm = fn2521()
let gloves = fn2522()
let chest = fn2523()
let legs = fn2524()
let mark = fn2525()
let destinyClass = fn2538()
let completedSets = fn2539()
let discount = 1
let result = a - b
//drained check
if (a === 327 && destinyClass === 'Hunter') {
    if (helm) {
        result -= 10
    }
    if (gloves) {
        result -= 25
    }
    if (chest) {
        result -= 14
    }
    if (legs) {
        result -= 15
    }
    if (mark) {
        result -= 25
    }
}
else if (a === 327 && destinyClass === 'Warlock') {
    if (helm) {
        result -= 10
    }
    if (gloves) {
        result -= 25
    }
    if (chest) {
        result -= 20
    }
    if (legs) {
        result -= 14
    }
    if (mark) {
        result -= 20
    }
}
else if (a === 327 && destinyClass === 'Titan') {
    if (helm) {
        result -= 10
    }
    if (gloves) {
        result -= 14
    }
    if (chest) {
        result -= 25
    }
    if (legs) {
        result -= 15
    }
    if (mark) {
        result -= 25
    }
}
//renewed check
else if (a === 238 && destinyClass === 'Titan') {
    if (helm) {
        result -= 39
    }
    if (gloves) {
        result -= 25
    }
    if (chest) {
        result -= 25
    }
    if (legs) {
        result -= 25
    }
    if (mark) {
        result -= 25
    }
}
else if (a === 238 && destinyClass === 'Warlock') {
    if (helm) {
        result -= 25
    }
    if (gloves) {
        result -= 25
    }
    if (chest) {
        result -= 39
    }
    if (legs) {
        result -= 25
    }
    if (mark) {
        result -= 25
    }
}
else if (a === 238 && destinyClass === 'Hunter') {
    if (helm) {
        result -= 25
    }
    if (gloves) {
        result -= 25
    }
    if (chest) {
        result -= 39
    }
    if (legs) {
        result -= 30
    }
    if (mark) {
        result -= 20
    }
}

//magnificent check
else if (a === 99) {
    if (helm) {
        result -= 20
    }
    if (gloves) {
        result -= 15
    }
    if (chest) {
        result -= 25
    }
    if (legs) {
        result -= 25
    }
    if (mark) {
        result -= 14
    }
}

//discount add
if (completedSets === '1 Set Completed' && a !== 99){
    discount = 0.7
} else if (completedSets === '2 Sets Completed' && a !== 99){
    discount = 0.4
}
// result calculate
if (result < 0) {
    return 0
}
return result * discount;