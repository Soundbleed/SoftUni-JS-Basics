function solve(input) {

    let collection = {};
    let value = 1

    for (word of input) {
        if (!collection.hasOwnProperty(word)) {
            collection[word] = value
        } else
            collection[word] += 1
    }

    let sorted = Object.entries(collection);
    sorted.sort((a,b) => b[1] - a[1])

    for (let[word, times] of sorted){
        console.log(`${word} -> ${times} times`)
    }

}

solve(["Here", "is", "the", "first", "sentence", "Here", "is",
    "another", "sentence", "And", "finally", "the", "third", "sentence"])