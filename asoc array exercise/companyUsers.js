function solve(input) {

    let collection = {}
    for (line of input) {
        let [company, worker] = line.split(" -> ")
        if (collection.hasOwnProperty(company) && !collection[company].includes(worker)) {
            collection[company].push(worker)
        } else if (!collection.hasOwnProperty(company)) {
            collection[company] = [worker]
        }

    }
    let sortedKeys = Object.keys(collection);
    sortedKeys.sort((a,b) => a.localeCompare(b))

    for (key of sortedKeys){
        console.log(`${key}`)
        for ( el of collection[key]){
            console.log(`-- ${el}`)
        }
    }
    //vzemi kompaniq i rabotnik
    // dobavi gi v set
    // array convert & print

}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)