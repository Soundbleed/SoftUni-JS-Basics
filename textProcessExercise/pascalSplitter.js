function solve(input) {
    let result = []
    let cap = 0

    for (let i = 1; i < input.length; i++) {
        if (input[i].charCodeAt() > 64 && input[i].charCodeAt() < 91) {
            let word = input.substring(cap, i)
            result.push(word)
            cap = i
        }
    }
    result.push(input.substring(cap))
    console.log(result.join(', '))

}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')