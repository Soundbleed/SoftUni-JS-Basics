function solve(arr){

    let cities = []
    arr.forEach(element => {
        let [town, latitude, longitude] = element.split(' | ')
        let city = {}
        city.town = town
        city.latitude = Number(latitude).toFixed(2)
        city.longitude = Number(longitude).toFixed(2)
        cities.push(city)
    });

    cities.forEach(a => console.log(a))

}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)