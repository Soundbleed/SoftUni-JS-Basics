function solve(input) {
    let neighborhoods = input.shift().split(", ")

    let collection = {}
    for (neighborhood of neighborhoods) {
        collection[neighborhood] = []
    }

    for (line of input) {
        let [neighborhood, person] = line.split(" - ")

        if (collection.hasOwnProperty(neighborhood)) {
            collection[neighborhood].push(person)
        }
    }

    let sorted = Object.entries(collection)
    sorted.sort((a, b) => b[1].length - a[1].length)

    
    for (let i = 0; i < sorted.length; i++) {
        let neighborhood = sorted[i][0]
        let people = sorted[i][1]
        console.log(`${neighborhood}: ${people.length}`)
        if (people.length > 0) {
            for (person of people) {
                console.log(`--${person}`)
            }
        }
    }
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)