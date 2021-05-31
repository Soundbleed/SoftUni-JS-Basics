function solve(sentance, word) {

    let wordArray = sentance.split(" ")
    let count = 0
    for (el of wordArray) {
        if (el === word) {
            count++
        }
    }

    console.log(count);

}

solve("This is a word and it also is a sentence",
    "is"
)