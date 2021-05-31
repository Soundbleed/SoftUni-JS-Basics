function solve(input){
    let converted = JSON.parse(input)
    console.log(converted)

    for (const key in converted) {
       console.log(`${key}: ${converted[key]}`)
    }

}

solve('{"name": "George", "age": 40, "town": "Sofia"}')