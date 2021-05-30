function solve(input){

    let words = input.shift().split(" ")
    let collection = {};
    for (el of words){
        collection[el] = 0
    }

    for (word of input){
        if (collection.hasOwnProperty(word)){
            collection[word]++
        }
    }

    let sortedKeys = Object.keys(collection)
    sortedKeys.sort((a,b) => collection[b]- collection[a])
    for (key of sortedKeys){
        console.log(`${key} - ${collection[key]}`)
    }
}

solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','sentence','sentence','because','this','is','your','task'
    ]
    )