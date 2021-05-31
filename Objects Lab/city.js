function solve(name, area, population, country, postCode) {

    let city = { 
        name: name, 
        area: area, 
        population: population, 
        country: country, 
        postCode: postCode 
    }

    for (i in city) {
        console.log(`${i} -> ${city[i]}`)
    }

}

solve("Sofia", "492", "1238438", "Bulgaria", "1000")