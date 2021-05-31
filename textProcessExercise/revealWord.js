function solve(words, sentance) {

    wordArray = words.split(", ")
    let result = ''
    for (word of wordArray) {
        if (sentance.includes("*".repeat(word.length))) {
           result = sentance.replace("*".repeat(word.length), word)
        }
    }
    console.log(result)
////
}

solve('great, learning',
    'softuni is ***** place for learning new programming languages'
)