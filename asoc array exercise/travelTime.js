function solve(input) {

    let destinations = {}

    for (line of input) {
        let [country, town, price] = line.split(" > ")
        price = Number(price)

        if (destinations.hasOwnProperty(country)) {
            if (destinations[country].hasOwnProperty(town)) {
                if (destinations[country][town] > price) {
                    destinations[country][town] = price
                }
            } else {
                destinations[country][town] = price
            }

        } else {
            destinations[country] = {
                [town]: price
            }
        }


    }
    let keys = Object.keys(destinations)
    keys.sort((a,b) => a.localeCompare(b))
    let sortedDestinations = {}

    for (let key of keys) {
        sortedDestinations[key] = destinations[key];
    }

    destinationsArrCountries = Object.entries(sortedDestinations);
    for (let el of destinationsArrCountries){
        let country = el[0]
        let townPrice = el[1]
        let entries = Object.entries(townPrice)
        let newArr = []
        newArr.push(country)
        for (let [key, value] of entries){
            newArr.push(key)
            newArr.push(value)
        }
        console.log(newArr.join(" -> "))
    }
    // make country key, with asoc array object town -> value price - push
    //if country exists, check town if town exists replace with cheapest value, 
    //if town doesnt exist add town and value to the country key
    //print country -> town price/town price again


}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])