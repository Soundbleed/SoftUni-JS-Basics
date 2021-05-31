function solve(sentance, word){

    console.log(sentance.split(word).join("*".repeat(word.length)))

}

solve("A small sentence with some words", "small")